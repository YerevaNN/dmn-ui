'use strict';

const factsN    = 20;
const episodesN = 20;

const jsonServer = require('json-server');

const server = jsonServer.create();

server.use(jsonServer.defaults({
  static: './dist'
}));

const router   = jsonServer.router('./server/db.json');
const rewriter = jsonServer.rewriter(require('./routes.json'));


function getAttention() {
  return Math.round(Math.random() * 100) / 100;
}

server.use(rewriter);

server.post('/networks/:network/models/:model/_predict', (req, res) => {
  const db = router.db.object;

  const prediction = {
    answer: db.vocab[Math.floor(Math.random() * db.vocab.length)],
    facts: [],
    episodes: []
  };

  for (let i = 0; i < factsN; i++) {
    prediction.facts.push(`Fact ${i + 1}`);
  }

  for (let i = 0; i < episodesN; i++) {
    const episode = [];

    for (let j = 0; j < factsN; j++) {
      episode.push(getAttention());
    }

    prediction.episodes.push(episode);
  }

  res.locals.data = prediction;
  router.render(req, res);
});

server.use(router);

server.listen(3003);
