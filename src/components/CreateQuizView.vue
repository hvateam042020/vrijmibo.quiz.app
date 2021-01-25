<template>
    <Page actionBarHidden="true">
      <GridLayout class="page" columns="*" rows="auto,*">
        <Toolbar row="0" col="0"  :title="headerTitle">
          
        </Toolbar>

        <GridLayout row="1" col="0" columns="auto,*,auto" rows="auto,auto,*,auto" class="app-content">
          <Label row="0" col="0" colSpan="3" class="txt-title" :text="title"/>

          <TextField row="1" colSpan="3" v-model="quiz.name" :hint="quizNameHint" class="et-primary quiz-name"/>

          <ListView @itemTap="onQuestionTapped" row="2" rowSpan="2" col="0" colSpan="3" for="(question, index) in quiz.questions" class="listview">
            <v-template> 
              <!--Stacklayout to add margins-->
              <StackLayout marginBottom="10">
                <QuizButton :id="index" :text="question.question"/>
              </StackLayout>
            </v-template>
          </ListView>

          <Button @tap="onPublishButtonTapped($event)" row="3" col="0" colSpan="3" :text="publish" class="btn-primary btn-publish"/>
          
          <Button @tap="onFloatingButtonTapped($event)" text="+" class="btn-fb" row="3" col="2"/>
        </GridLayout>
      </GridLayout>
    </Page>
</template>

<script lang="ts">
import { QuizController } from "../REST/QuizController";
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
        publish: "publish quiz"
      }
    },
    methods: {
      onFloatingButtonTapped(evt) {
        this.$navigateTo(CreateQuizQuestionView, {
           
        });
      },
      onBackButtonPressed() {
        this.$navigateBack();
      },
      onQuestionTapped(evt) {
        this.$navigateTo(CreateQuizQuestionView, { props: {
          editQuestion: this.questions[evt.index],
          editQuestionIndex: evt.index
        },
         
                    });

        //Todo
		//Edit question
      },
      onPublishButtonTapped(evt) {
        console.log("On publish button tapped..");
        console.log(this.quiz.isValid());
        if(this.quiz.isValid())
        {
			//Todo
			//publish question
			QuizController.createQuiz(this.quiz, this.$navigateBack);
        }
      }
    },
    components: {
      Toolbar,
      QuizButton
    },
    computed: {
      questions() {
        return this.$store.state.newQuiz.questions;
      },
	    quiz() {
        return this.$store.state.newQuiz;
      },
    },
    mounted() {
      let quiz = new Quiz(null, "", []);
      this.$store.commit("setNewQuiz", quiz);
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
