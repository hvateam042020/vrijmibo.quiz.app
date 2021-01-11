<template>
    <Page actionBarHidden="true">
      <GridLayout class="page" columns="*" rows="auto,*">
        <Toolbar row="0" col="0" :leftTap="onBackButtonPressed" :title="headerTitle">
          <Label class="btn-toolbar-back" :text="backButton" slot="left"/>
        </Toolbar>

        <GridLayout row="6" col="0" columns="*" rows="auto,auto,auto,auto,auto,auto,auto,*" class="app-content">
          <Label row="0" col="0" colSpan="2"  class="txt-title" :text="title"/>

          <TextField row="1" colSpan="2" v-model="quiz.name" :hint="quizNameHint" class="et-primary quiz-name"/>
          
		  <Switch row="2" col="1" colSpan="1" checked="false" v-model="validAnswer"/>
		  <TextField row="2" col="0" colSpan="2" v-model="quiz.answerA" :hint="quizAnswerHint" class="et-primary quiz-answer a"/>
		  
		  <Switch row="2" col="1" colSpan="1" checked="false" v-model="validAnswer"/>
		  <TextField row="3" col="0" colSpan="2" v-model="quiz.answerB" :hint="quizAnswerHint" class="et-primary quiz-answer b"/>
		  
		  <Switch row="2" col="1" colSpan="1" checked="false" v-model="validAnswer"/>
		  <TextField row="4" col="0" colSpan="2" v-model="quiz.answerC" :hint="quizAnswerHint" class="et-primary quiz-answer c"/>
		  
		  <Switch row="2" col="1" colSpan="1" checked="false" v-model="validAnswer"/>
		  <TextField row="5" col="0" colSpan="2" v-model="quiz.answerD" :hint="quizAnswerHint" class="et-primary quiz-answer d"/>
          
		  <Button @tap="onCreateButtonTapped($event)" row="6" col="0" colSpan="2" :text="createQuestion" class="btn-primary btn-publish"/>
        </GridLayout>
      </GridLayout>
    </Page>
</template>

<script lang="ts">
import { Quiz } from "../models/quiz";
import Toolbar from "./toolbar/Toolbar.vue";
import QuizButton from "./QuizButton.vue";

  export default {
    data() {
      return {
        headerTitle: "Create quiz question",
        title: "Your question",
        createQuestion: "Add question",
        backButton: "<",
        quizNameHint: "Quiz question",
        quizAnswerHint: "Quiz answer",
        quiz: new Quiz(null, "", [])
      }
    },
    methods: {
      onCreateButtonTapped() {
		this.$navigateBack();
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
