'use strict';

const networkN  = 6;
const modelN    = 6;
const vocabN    = 1000;

const db = {
  networks: [],
  models: [],
  vocab: [],
  _predict: {
    answer: null,
    facts: [],
    episodes: []
  }
};


for (let i = 0; i < networkN; i++) {
  db.networks.push({id: i + 1, name: `Network ${i + 1}`});

  for (let j = 0; j < modelN; j++) {
    db.models.push({id: j + 1, name: `Model ${j + 1} of Network ${i + 1}`, networkId: i + 1});
  }
}

for (let i = 0; i < vocabN; i++) {
  db.vocab.push(`word${i}`);
}

console.log(JSON.stringify(db, null, '  '));
