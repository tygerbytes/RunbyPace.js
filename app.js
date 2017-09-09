const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

workoutRouter = require('./routes/workoutRoutes');
app.use('/api/workouts', workoutRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the RunbyPace.js API!');
});

app.listen(port, () => {
  console.log('Running on port: ' + port);
});

module.exports = app;
