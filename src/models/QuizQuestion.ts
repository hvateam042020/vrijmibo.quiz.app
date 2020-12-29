export class QuizQuestion {

  id: Number
  question: String
  validAnswer: String
  answerA: String
  answerB: String
  answerC: String
  answerD: String

  constructor () {
    // Todo: construct model
  }
  
  /**
   * Is quizanswer valid?
   * Returns true if quiz is correctly filled in; otherwise false.
   */
  isValid() {
    if(!this.id)
    {
      return false;
    }
    if(!this.question || this.question.length == 0)
    {
      return false;
    }
    if(!this.answerA || this.answerA.length == 0)
    {
      return false;
    }
    if(!this.answerB || this.answerB.length == 0)
    {
      return false;
    }
    if(!this.answerC || this.answerC.length == 0)
    {
      return false;
    }
    if(!this.answerD || this.answerD.length == 0)
    {
      return false;
    }
    if(!this.validAnswer || this.validAnswer.length == 0)
    {
      return false;
    }


    return true;
  }
}