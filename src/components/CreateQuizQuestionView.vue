<template>
    <Page actionBarHidden="true">
      <GridLayout @loaded="onLayoutLoaded" class="page" columns="*" rows="auto,*">
        <Toolbar row="0" col="0"  :title="headerTitle">
          
        </Toolbar>

        <GridLayout row="1" col="0" columns="50, *" rows="auto,auto,auto,auto,auto,auto,auto" class="app-content">
          <Label row="0" col="0" colSpan="2"  class="txt-title" :text="title"/>

          <TextField row="1" colSpan="2" v-model="quizQuestion.question" :hint="quizNameHint" class="et-primary quiz-name"/>
          
		  <Switch row="2" col="0" colSpan="1" ref="switchA" @tap="onSwitchPressed('A')"/>
		  <TextField row="2" col="1" colSpan="1" v-model="quizQuestion.answerA" :hint="quizAnswerHint" class="et-primary quiz-answer a"/>
		  
		  <Switch row="3" col="0" colSpan="1" ref="switchB" @tap="onSwitchPressed('B')"/>
		  <TextField row="3" col="1" colSpan="1" v-model="quizQuestion.answerB" :hint="quizAnswerHint" class="et-primary quiz-answer b"/>
		  
		  <Switch row="4" col="0" colSpan="1" ref="switchC" @tap="onSwitchPressed('C')"/>
		  <TextField row="4" col="1" colSpan="1" v-model="quizQuestion.answerC" :hint="quizAnswerHint" class="et-primary quiz-answer c"/>
		  
		  <Switch row="5" col="0" colSpan="1" ref="switchD" @tap="onSwitchPressed('D')"/>
		  <TextField row="5" col="1" colSpan="1" v-model="quizQuestion.answerD" :hint="quizAnswerHint" class="et-primary quiz-answer d"/>
          
		  <Button @tap="onCreateButtonTapped($event)" row="6" col="0" colSpan="2" :text="createQuestion" class="btn-primary btn-publish"/>
        </GridLayout>
      </GridLayout>
    </Page>
</template>

<script lang="ts">
import { Quiz } from "../models/quiz";
import Toolbar from "./toolbar/Toolbar.vue";
import QuizButton from "./QuizButton.vue";
import { QuizQuestion } from "../models/quizquestion";

  export default {
    data() {
      return {
        headerTitle: "Create quiz question",
        title: "Your question",
        createQuestion: "Add question",
        backButton: "<",
        quizNameHint: "Quiz question",
        quizAnswerHint: "Quiz answer",
		    quizQuestion: new QuizQuestion(null, "", "", "", "", "", ""),
      }
    },
    props: {
      editQuestion: Object,
      editQuestionIndex: Number
    },
    methods: {
      onLayoutLoaded() {
        if(this.editQuestion != null && this.editQuestionIndex != null) {
          this.quizQuestion = this.editQuestion;
          this.checkValidAnswer();
          this.createQuestion = "Edit question";
        }
      },
      checkValidAnswer() {
        switch(this.quizQuestion.validAnswer) {
          case this.quizQuestion.answerA: 
            this.$refs.switchA.nativeView.checked = true;
          break;
          case this.quizQuestion.answerB: 
            this.$refs.switchB.nativeView.checked = true;
          break;
          case this.quizQuestion.answerC: 
            this.$refs.switchC.nativeView.checked = true;
          break;
          case this.quizQuestion.answerD: 
            this.$refs.switchD.nativeView.checked = true;
          break;
        }
      },
      onCreateButtonTapped() 
      {
        if(this.editQuestionIndex != null)
        {
          this.$store.commit("editQuizQuestion", { question:this.quizQuestion, index:this.editQuestionIndex });
          this.$navigateBack();
          return;
        }
        this.$store.commit("addQuizQuestion", this.quizQuestion);
        this.$navigateBack();
      },
      onBackButtonPressed() {
        this.$navigateBack();
      },
      onSwitchPressed(answer){
        this.$refs.switchA.nativeView.checked = false;
        this.$refs.switchB.nativeView.checked = false;
        this.$refs.switchC.nativeView.checked = false;
        this.$refs.switchD.nativeView.checked = false;
        switch(answer){
          case 'A':
            this.quizQuestion.validAnswer = this.quizQuestion.answerA;
          break;
          case 'B':
            this.quizQuestion.validAnswer = this.quizQuestion.answerB;
          break;
          case 'C':
            this.quizQuestion.validAnswer = this.quizQuestion.answerC;
          break;
          case 'D':
            this.quizQuestion.validAnswer = this.quizQuestion.answerD;
          break;
        }
	  }
      
    },
    components: {
      Toolbar
    },
    computed: {
	
    }
  }
</script>

<style scoped>
	.quiz-name{
		margin: 0 0 50 0;
	}
	.quiz-answer{
		margin: 0 0 10 0;
	}
</style>
