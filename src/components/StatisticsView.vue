<template>
    <Page actionBarHidden="true">
      <GridLayout @loaded="onViewLoaded" class="page" columns="*" rows="auto,*">
        <Toolbar row="0" col="0" :leftTap="onBackButtonPressed" :title="headerTitle">
          <Label class="btn-toolbar-back" :text="backButton" slot="left"/>
        </Toolbar>

        <GridLayout row="1" col="0" columns="*,*" rows="auto,auto,*,auto" class="app-content">
          <Label row="0" col="0" colSpan="2"  class="txt-title" :text="finishedText"/>
          <Label row="1" col="0" colSpan="2"  class="txt-title txt-result" :text="resultText"/>

          <ActivityIndicator :busy="isGettingQuizResults" v-show="isGettingQuizResults" height="50" width="50" row="2" rowSpan="2" col="0" colSpan="2"/>

          <ListView row="2" rowSpan="2" col="0" colSpan="2" for="(quizResult, index) in quizResults" class="listview">
            <v-template>
              <!--Stacklayout to add margins-->
              <StackLayout marginBottom="10">
                <QuizButton :isValid="quizResult.isValid" :id="index" :text="quizResult.givenAnswer"/>
              </StackLayout>
            </v-template>
          </ListView>
          <Button row="3" col="0" colSpan="2" class="btn-primary" @tap="onFinishButtonTapped" :text="finishText"/>
        </GridLayout>
      </GridLayout>
    </Page>
</template>

<script lang="ts">
import Toolbar from "./toolbar/Toolbar.vue";
import QuizButton from "./QuizButton.vue";
import CreateQuizView from "./CreateQuizView.vue";
import QuizView from "./QuizView.vue";
import StatisticsView from "./StatisticsView.vue";
import Start from "./Start.vue";

import { PostQuizAnswer } from "../models/PostQuizAnswer";
import { QuizController } from "../REST/QuizController";

  export default {
    data() {
      return {
        headerTitle: "Offline quiz",
        finishedText: "Finished!",
        finishText: "Finish",
        resultText: "",
        quizResults: [],
        isGettingQuizResults: true,
      }
    },
    methods: {
      onViewLoaded() {
        this.getQuizResults();
      },
      getQuizResults() {
        let givenAnswers = this.$store.state.givenAnswersInQuiz;
        let quizId = this.selectedQuiz.id;
        let postQuizAnswer = new PostQuizAnswer(quizId, givenAnswers);
        QuizController.postAnswers(postQuizAnswer, this.onGetQuizResultsCallback);
      },
      onGetQuizResultsCallback(result) {
        let correctCounter = 0;
        result.quizResult.forEach(element => {
          if(element.isValid) {
            correctCounter++;
          }
        });
        this.quizResults = result.quizResult;

        this.resultText = "You got " + correctCounter + "\\" + this.quizResults.length + " correct!";

        this.isGettingQuizResults = false;
      },
      onFinishButtonTapped() {
        this.$navigateTo(Start);
      }
    },
    components: {
      Toolbar,
      QuizButton
    },
    computed: {
      selectedQuiz() {
        return this.$store.state.quizzes[this.$store.state.selectedQuiz];
      },
    }
  }
</script>

<style lang="scss"  scoped>
@import "../app.scss";
.listview {
  separator-color: transparent;
}

.app-content {
  margin-bottom: 10;
}

.answer-button {
  border-width: 0;
  color: white;
  android-elevation: 5;
}

.txt-result {
  font-size: 18;
}

.a {
  background-color: $clr-quiz-red;
}

.b {
  background-color: $clr-quiz-blue;
}

.c {
  background-color: $clr-quiz-purple;
}

.d {
  background-color: $clr-quiz-orange;
}
</style>
