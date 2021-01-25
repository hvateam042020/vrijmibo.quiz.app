export class QuizQuestion {

  id: Number
  question: String
  validAnswer: String
  answerA: String
  answerB: String
  answerC: String
  answerD: String

  constructor (id, question, validAnswer, answerA, answerB, answerC, answerD) {
    // Todo: construct model
    this.id = id;
    this.question = question;
    this.validAnswer = validAnswer;
    this.answerA = answerA;
    this.answerB = answerB;
    this.answerC = answerC;
    this.answerD = answerD;
  }
  
  /**
   * Is quizanswer valid?
   * Returns true if quiz is correctly filled in; otherwise false.
   */
  isValid() {
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