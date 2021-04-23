const express = require('express')
const app = express()
const expbs = require('express-handlebars')

app.engine('handlebars',expbs({defaultLayout: false }))
app.set('view engine','handlebars')


app.get('/',  (req, res) =>{
   
  res.render('index')
})
const port = process.env.PORT || 3000;

app.listen(port,()=>{console.log('Server Started')})