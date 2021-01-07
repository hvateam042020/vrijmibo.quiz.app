<template>
    <Page actionBarHidden="true">
      <GridLayout class="page" columns="*" rows="auto,*">
        <Toolbar row="0" col="0" :leftTap="onBackButtonPressed" :title="headerTitle">
          <Label class="btn-toolbar-back" :text="backButton" slot="left"/>
        </Toolbar>

        <GridLayout row="1" col="0" columns="*,*" rows="auto,*,*,*" class="app-content">
          <Label textWrap="true" row="0" col="0" colSpan="2"  class="txt-title" :text="question"/>
          <Button @tap="onAnswerTapped('A')" class="answer-button a" row="1" col="0" :text="answerA"/>
          <Button @tap="onAnswerTapped('B')" class="answer-button b" row="1" col="1" :text="answerB"/>
          <Button @tap="onAnswerTapped('C')" class="answer-button c" row="2" col="0" :text="answerC"/>
          <Button @tap="onAnswerTapped('D')" class="answer-button d" row="2" col="1" :text="answerD"/>
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

  export default {
    data() {
      return {
        headerTitle: "Offline quiz",
        currentQuestionIndex: 0,
        backButton: "<",
      }
    },
    methods: {
      onAnswerTapped(answer) {
        let givenAnswer = "";
        switch(answer) {
          case 'A':
            givenAnswer = this.answerA;
          break;
          case 'B':
            givenAnswer = this.answerB;
          break;
          case 'C':
            givenAnswer = this.answerC;
          break;
          case 'D':
            givenAnswer = this.answerD;
          break;
          default:
        }

        this.$store.commit("addGivenAnswerInQuiz", givenAnswer);
        if(this.currentQuestionIndex == this.selectedQuiz.questions.length-1) {
          this.$navigateTo(StatisticsView);
          return;
        }

        this.currentQuestionIndex++;
      },
      onBackButtonPressed() {
        this.$navigateBack();
      },
    },
    components: {
      Toolbar
    },
    computed: {
      selectedQuiz() {
        return this.$store.state.quizzes[this.$store.state.selectedQuiz];
      },
      question() {
        return this.selectedQuiz.questions[this.currentQuestionIndex].question;
      },
      answerA() {
        return this.selectedQuiz.questions[this.currentQuestionIndex].answerA;
      },
      answerB() {
        return this.selectedQuiz.questions[this.currentQuestionIndex].answerB;
      },
      answerC() {
        return this.selectedQuiz.questions[this.currentQuestionIndex].answerC;
      },
      answerD() {
        return this.selectedQuiz.questions[this.currentQuestionIndex].answerD;
      },
    }
  }
</script>

<style lang="scss"  scoped>
@import "../app.scss";

.app-content {
  margin-bottom: 10;
}

.answer-button {
  border-width: 0;
  color: white;
  android-elevation: 5;
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
