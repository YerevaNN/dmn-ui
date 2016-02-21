'use strict';

class Babi {
  constructor(story, question, answer = 'John', supportingFact = 1) {
    this.punctR = /(\b|[.?!]+)$/;

    this.babiTask = this.babify(story, question, answer, supportingFact);
  }

  babify(story, question, answer, supportingFact) {
    return story
      .split('\n')
      .map((fact) => fact.trim().replace(this.punctR, '.'))
      .concat([`${question.trim().replace(this.punctR, '?')}\t${answer.trim()} ${supportingFact}`])
      .map((fact, idx) => `${idx + 1} ${fact}`)
      .join('\n')
  }

  toString() {
    return this.babiTask;
  }
}

module.exports = Babi;
