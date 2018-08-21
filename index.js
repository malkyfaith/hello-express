const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send({
    name: 'Malkeet',
    address: 'Sydney' 
  });
});

app.get('/about', (req, res) => {
  res.render()
})

app.listen(3000);
