const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();
});


app.get('/', (req, res) => {
  res.render('home.hbs', {
    title: 'Home title',
    content: 'Home Content',
  })
});

app.get('/me', (req, res) => {
  res.send({
    name: 'Malkeet',
    address: 'Australia'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About title',
    content: 'About Content',
  });
})

app.listen(port, ()=>{
  console.log(`listening @ ${port}`)
});
