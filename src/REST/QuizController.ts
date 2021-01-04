import axios from "axios"

export class QuizController {
  static API_URL = "http://10.0.2.2:3000"

  /**
   * Recieve a quiz from api by id.
   * @param {Function} callback callback handler when api request is returned.
   */
  static getById(id, callback) {
    let url = QuizController.API_URL + "/quiz/" + id;

    axios({
        url: url,
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(response => {
        var result = response.data;

        if(callback != null)
          callback(result);
    }, error => {
        console.error(error);
    });
  }

  /**
   * Get all quizzes from api.
   * @param callback callback handler when api request is returned.
   */
  static getAll(callback) {
    let url = QuizController.API_URL + "/quiz/all";

    axios({
        url: url,
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(response => {
        var result = response.data;

        if(callback != null)
          callback(result);
    }, error => {
        console.error(error);
    });
  }

  /**
   * Create a new quiz with given quiz object.
   * @param quiz quiz object.
   * @param callback callback handler when api request is returned.
   */
  static createQuiz(quiz, callback) {
    let url = QuizController.API_URL + "/quiz";

    axios({
        url: url,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(quiz)
    }).then(response => {
        var result = response.data;

        if(callback != null)
          callback(result);
    }, error => {
        console.error(error);
    });
  }

  /**
   * Post quiz answers.
   * @param {PostQuizAnswer} postQuizAnswer model to post to REST api.
   * @param {Function} callback callback handler when api request is returned.
   */
  static postAnswers(postQuizAnswer, callback) {
    let url = QuizController.API_URL + "/result";

    axios({
        url: url,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(postQuizAnswer)
    }).then(response => {
        var result = response.data;

        if(callback != null)
          callback(result);
    }, error => {
        console.error(error);
    });
  }

  /**
   * Delete a quiz by id.
   * @param id quiz id.
   * @param callback callback handler when api request is returned.
   */
  static deleteQuizById(id, callback) {
    let url = QuizController.API_URL + "/quiz/" + id;

    axios({
        url: url,
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    }).then(response => {
        var result = response.data;

        if(callback != null)
          callback(result);
    }, error => {
        console.error(error);
    });
  }
}