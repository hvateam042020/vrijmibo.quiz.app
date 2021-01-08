<template>
    <Page actionBarHidden="true">
      <GridLayout class="page" columns="*" rows="auto,*">
        <Toolbar row="0" col="0" :leftTap="onBackButtonPressed" :title="headerTitle">
          <Label class="btn-toolbar-back" :text="backButton" slot="left"/>
        </Toolbar>

        <GridLayout row="1" col="0" columns="*,auto" rows="auto,auto,*,auto" class="app-content">
          <Label row="0" col="0" colSpan="2"  class="txt-title" :text="title"/>

          <TextField row="1" colSpan="2" v-model="quiz.name" :hint="quizNameHint" class="et-primary quiz-name"/>


          <Button @tap="onCreateButtonTapped($event)" row="3" col="0" colSpan="2" :text="createQuestion" class="btn-primary btn-publish"/>
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
        createQuestion: "Create question",
      }
    },
    methods: {
      onCreateButtonTapped() {

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

</style>
