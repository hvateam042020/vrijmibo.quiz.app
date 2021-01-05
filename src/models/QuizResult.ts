export class QuizResult {
  question: String
  validAnswer: String
  givenAnswer: String
  isValid: String

  constructor (question, validAnswer, givenAnswer, isValid) {
    this.givenAnswer = givenAnswer;
    this.question = question;
    this.validAnswer = validAnswer;
    this.isValid = isValid;
    // Todo: construct model
  }
}