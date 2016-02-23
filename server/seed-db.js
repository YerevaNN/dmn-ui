'use strict';

const networkN = 6;
const modelN   = 6;
const vocabN   = 1000;
const samplesN = 100;

const db = {
  networks: [],
  models: [],
  vocab: [],
  samples: []
};


for (let i = 0; i < vocabN; i++) {
  db.vocab.push(`word${i}`);
}


function getRandomRange(a, b) {
  a = a || 0;
  b = b || 0;

  return Math.floor(Math.random() * b) + a;
}

function getSample(array) {
  return array[getRandomRange(0, array.length)];
}

function getSentence() {
  const wordsN = getRandomRange(5, 10);

  let sent = '';

  for (let j = 0; j < wordsN; j++) {
    sent += getSample(db.vocab) + ' ';
  }

  return sent.trim();
}

function getStory() {
  const sentencesN = getRandomRange(2, 10);

  let story = '';

  for (let i = 0; i < sentencesN; i++) {

    story += getSentence().trim() + '.\n';
  }

  return story.trim();
}

for (let i = 0; i < samplesN; i++) {
  db.samples.push({
    id: i + 1,
    C: getStory(),
    Q: getSentence() + '?'
  });
}

for (let i = 0; i < networkN; i++) {
  db.networks.push({id: i, name: `Network ${i + 1}`, description: `Description of Network ${i + 1}`});

  for (let j = 0; j < modelN; j++) {
    db.models.push({
      id: j, 
      name: `Model ${j + 1} of Network ${i + 1}`, 
      networkId: i, 
      description: `Description of Network ${i + 1}`,
      hyper_param1: 1,
      hyper_param2: 1,
      hyper_param3: 1,
      hyper_param4: 1,
      hyper_param5: 1,
      hyper_param6: 1,
      vocab: db.vocab,
      samples: db.samples
    });
  }
}




console.log(JSON.stringify(db, null, '  '));
