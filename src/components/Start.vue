<template>
    <Page actionBarHidden="true">
      <GridLayout class="page" columns="*" rows="auto,*">
        <Toolbar row="0" col="0" :title="headerTitle">
        </Toolbar>

        <GridLayout row="1" col="0" columns="*,auto" rows="auto,*,auto" class="app-content">
          <Label row="0" col="0" colSpan="2"  class="txt-title" :text="title"/>

          <ListView @itemTap="onQuizTapped" row="1" rowSpan="2" col="0" colSpan="2" for="quiz in quizzes" class="listview">
            <v-template>
              <!--Stacklayout to add margins-->
              <StackLayout marginBottom="10">
                <QuizButton :id="quiz.id" :text="quiz.name"/>
              </StackLayout>
            </v-template>
          </ListView>

          <Button @tap="onFloatingButtonTapped($event)" text="+" class="btn-fb" row="2" col="1"/>
        </GridLayout>
      </GridLayout>
    </Page>
</template>

<script lang="ts">
import Toolbar from "./toolbar/Toolbar.vue";
import QuizButton from "./QuizButton.vue";
import CreateQuizView from "./CreateQuizView.vue";
import QuizView from "./QuizView.vue";

  export default {
    data() {
      return {
        headerTitle: "Start quiz",
        title: "Select your quiz"
      }
    },
    methods: {
      onFloatingButtonTapped(evt) {
        
        // Navigation
        this.$navigateTo(CreateQuizView);
      },
      onQuizTapped(evt) {
        this.$store.commit("setSelectedQuiz", evt.index);
        this.$navigateTo(QuizView);
      }
    },
    components: {
      Toolbar,
      QuizButton
    },
    computed: {
      quizzes() {
        return this.$store.state.quizzes;
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

.btn-fb {
  margin: 0 0 20 0;
  font-size: 32;
  color: white;
  padding: 0;
  text-align: center;
}
</style>
