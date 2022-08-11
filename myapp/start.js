const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!!!, this is to set up pipeline');
});

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});