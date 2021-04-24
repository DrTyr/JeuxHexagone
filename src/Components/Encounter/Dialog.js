export class Dialog {
  constructor(picture, text, answers = []) {
    this.picture = picture;
    this.text = text;
    this.answers = answers;
  }

  addAnswer(answer) {
    this.answers.push(answer);
  }

  manageGoto() {
    return this.answers.goto;
  }
}
