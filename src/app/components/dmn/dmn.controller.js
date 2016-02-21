export class DmnController {
  constructor(Networks) {
    'ngInject';

    this.busy            = false;
    this.wordsNotInVocab = [];

    Networks.getList()
      .then((networks) => {
        this.networks = networks;
      });
  }

  selectNetwork(network) {
    this.model = this.vocab = this.vocabStr = this.vocabMap = null;

    return network.all('models').getList()
      .then((models) => {
        this.models = models;
      });
  }

  selectModel(model) {
    if (!model) {
      return;
    }

    return this.model.get()
      .then((model) => {
        this.vocabMap = new Map();
        this.vocab    = model.vocab;
        this.vocabStr = model.vocab.join(' ');
        this.vocab.forEach((word) => {
          this.vocabMap.set(word, 0);
        });
      });
  }

  getNumber(n) {
    return new Array(n);
  }

  isMax(episodeIdx, factIdx) {
    const factAttention = this.prediction.episodes[episodeIdx][factIdx];

    return Math.max.apply(Math, this.prediction.episodes[episodeIdx]) === factAttention;
  }

  predict(form) {
    if (form.$invalid || this.busy) {
      return false;
    }

    this.busy = true;

    return this.model.one('_predict').customPOST({story: this.story, question: this.question})
      .then((prediction) => {
        this.prediction = prediction;
      })
      .finally(() => {
        this.busy = false;
      });
  }

  getSample() {
    return this.model.all('samples').customGET('_sample')
      .then(({story, question}) => {
        this.story    = story;
        this.question = question;
      });
  }
}
