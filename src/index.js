const express = require('express');
const bodyParser = require('body-parser');
const releaseHandlers = require('./handlers/releases');

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.post('/releases', releaseHandlers.post);
app.post('/errors', (req, res) => {
  console.log(req.body);
  res.status(400).send();
});
 
app.listen(3000, () => console.log('Server listening on port 3000'));