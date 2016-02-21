const express      = require('express');
const compress     = require('compression');
const favicon      = require('serve-favicon');
const bodyParser   = require('body-parser');
const logger       = require('morgan');
const errorHandler = require('errorhandler');
const path         = require('path');


const app = express();

app.set('port', process.env.PORT || 3000);
app.use(compress());
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'), {maxAge: 31557600000}));

app.post('/predict', (req, res, next) => {
  dnm({
    story: req.body.story,
    question: req.body.question
  })
    .then((state) => {
      res.send(state);
    })
    .catch(next);
});


app.use(errorHandler());

app.listen(app.get('port'), function () {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
