import axios from "axios"

export class QuizController {

  /**
   * Recieve all quizzes from api.
   * @param {Function} callback callback handler when api request is returned.
   */
  get(callback) {
    let url = "";

    axios({
        url: url,
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(response => {
        var result = response;

        if(callback != null)
          callback(result);
    }, error => {
        console.error(error);
    });
  }

  /**
   * 
   * @param {PostQuizAnswer} postQuizAnswer model to post to REST api.
   * @param {Function} callback callback handler when api request is returned.
   */
  post(postQuizAnswer, callback) {
    let url = "";

    axios({
        url: url,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(postQuizAnswer)
    }).then(response => {
        var result = response;

        if(callback != null)
          callback(result);
    }, error => {
        console.error(error);
    });
  }
}