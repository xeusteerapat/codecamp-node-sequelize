const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/student', (req, res) => {
  let newStudent = {
    name: req.body.name,
    year: Number(req.body.year)
  };
  db.student
    .create(newStudent)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err));
});

app.get('/', (req, res) => {
  db.student.findAll().then(result => res.status(200).send(result));
});

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});
