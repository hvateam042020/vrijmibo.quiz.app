import { QuizQuestion } from "./quizquestion"

export class Quiz {

  id: Number
  name: String
  questions: Array<QuizQuestion>

  constructor () {
      // Todo: construct model
  }

  /**
   * Is quiz valid?
   * Returns true if quiz is correctly filled in; otherwise false.
   */
  isValid() {
    if(!this.id)
    {
      return false;
    }
    if(!this.name || this.name.length == 0)
    {
      return false;
    }
    if(!this.questions || this.questions.length == 0)
    {
      return false;
    }

    // Lastly check questions if valid.
    for(let i = 0; i < this.questions.length; i++)
    {
      if(!this.questions[i].isValid())
      {
        return false;
      }
    }

    return true;
  }
}