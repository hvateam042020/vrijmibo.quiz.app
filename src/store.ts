import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedQuiz: 1,

    quizzes: [ /*
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
      }*/
    ],
    givenAnswersInQuiz: [],
	newQuiz: {
        id: null,
        name: "",
        questions: [],
      },
  },
  mutations: {
    setSelectedQuiz(state, selectedQuiz) {
      state.selectedQuiz = selectedQuiz;
    },
    setQuizzes(state, quizzes) {
      state.quizzes = quizzes;
    },
    addGivenAnswerInQuiz(state, answer) {
      state.givenAnswersInQuiz.push(answer);
    },
	setNewQuiz(state, quiz){
	  state.newQuiz = quiz;
	},
	addQuizQuestion(state, quizQuestion){
	  state.newQuiz.questions.push(quizQuestion);
  },
  editQuizQuestion(state, questionResource) {
      state.newQuiz.questions.splice(questionResource.index, 1, questionResource.question);
  }
  },
  actions: {
		
  }
});
