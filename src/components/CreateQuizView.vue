<template>
    <Page actionBarHidden="true">
      <GridLayout class="page" columns="*" rows="auto,*">
        <Toolbar row="0" col="0" :leftTap="onBackButtonPressed" :title="headerTitle">
          <Label class="btn-toolbar-back" :text="backButton" slot="left"/>
        </Toolbar>

        <GridLayout row="1" col="0" columns="*,auto" rows="auto,auto,*,auto" class="app-content">
          <Label row="0" col="0" colSpan="2"  class="txt-title" :text="title"/>

          <TextField row="1" colSpan="2" v-model="quiz.name" :hint="quizNameHint" class="et-primary quiz-name"/>

          <ListView @itemTap="onQuestionTapped" row="2" rowSpan="2" col="0" colSpan="2" for="question in quiz.questions" class="listview">
            <v-template>
              <!--Stacklayout to add margins-->
              <StackLayout marginBottom="10">
                <QuizButton :id="question.id" :text="question.question"/>
              </StackLayout>
            </v-template>
          </ListView>

          <Button @tap="onPublishButtonTapped($event)" row="3" col="0" colSpan="2" :text="publish" class="btn-primary btn-publish"/>

          <Button @tap="onFloatingButtonTapped($event)" text="+" class="btn-fb" row="3" col="1"/>
        </GridLayout>
      </GridLayout>
    </Page>
</template>

<script lang="ts">
import { Quiz } from "../models/quiz";
import Toolbar from "./toolbar/Toolbar.vue";
import QuizButton from "./QuizButton.vue";
import CreateQuizQuestionView from "./CreateQuizQuestionView.vue";

  export default {
    data() {
      return {
        headerTitle: "Create quiz",
        title: "Your quiz",
        backButton: "<",
        quizNameHint: "Quiz name",
        publish: "publish quiz",
        quiz: new Quiz(null, "", [])
      }
    },
    methods: {
      onFloatingButtonTapped(evt) {
        this.$navigateTo(CreateQuizQuestionView);
      },
      onBackButtonPressed() {
        this.$navigateBack();
      },
      onQuestionTapped(evt) {
        console.log(evt.index);
      },
      onPublishButtonTapped(evt) {
        console.log("On publish button tapped..");
        if(this.quiz.isValid())
        {
          // Validation correct create quiz.
        }
      }
    },
    components: {
      Toolbar,
      QuizButton
    },
    computed: {
      questions() {
        return this.quiz.questions;
      }
    }
  }
</script>

<style scoped>
.listview {
  separator-color: transparent;
}

.txt-title {
  margin: 20 0 20 0;
}

.quiz-name {
  margin: 20 5 20 5;
}

.btn-fb {
  margin: 0 0 20 0;
  font-size: 32;
  color: white;
  padding: 0;
  text-align: center;
}

.btn-publish {
  height: 40;
}
</style>
