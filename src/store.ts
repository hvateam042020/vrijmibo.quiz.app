import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedQuiz: 1,

    // Todo: Retrieve quizzes from REST api and replace this mockup data.
    quizzes: [
      {
        id: 0,
        name: "First quiz",
        questions: [
          {
            id: 0,
            question: "First question",
            answerA: "First",
            answerB: "Second",
            answerC: "Third",
            answerD: "Fourth",
            validAnswer: "First"
          },
          {
            id: 1,
            question: "Second question",
            answerA: "First",
            answerB: "Second",
            answerC: "Third",
            answerD: "Fourth",
            validAnswer: "Third"
          }
        ],
      },
      {
        id: 1,
        name: "Second quiz",
        questions: [
          {
            id: 2,
            question: "[Second] First question",
            answerA: "First",
            answerB: "Second",
            answerC: "Third",
            answerD: "Fourth",
            validAnswer: "Second"
          },
          {
            id: 3,
            question: "[Second] Second question",
            answerA: "First",
            answerB: "Second",
            answerC: "Third",
            answerD: "Fourth",
            validAnswer: "Fourth"
          }
        ],
      }
    ]
  },
  mutations: {
    setSelectedQuiz(state, selectedQuiz) {
      state.selectedQuiz = selectedQuiz;
    }
  },
  actions: {

  }
});
