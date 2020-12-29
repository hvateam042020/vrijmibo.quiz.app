export class PostQuizAnswer {
  quizId: Number
  givenAnswers: Array<String>

  constructor(id, givenAnswers) {
    this.quizId = id;
    this.givenAnswers = givenAnswers;
  }


  isValid() {
    if(!this.quizId || !(this.quizId instanceof Number)) {
      return false;
    }
    if(!this.givenAnswers || this.givenAnswers.length == 0) {
      return false;
    }
    return true;
  }
}