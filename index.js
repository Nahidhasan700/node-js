const express = require('express');


const app = express();

app.get('/', (req,res)=>{
      res.send('think you learning me');
})


app.listen(3000, ()=>console.log('Listening to port 3000'));