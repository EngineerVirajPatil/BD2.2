const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12];

function filterEvenNumber(num){
  return num%2===0;
}

app.get('/even-numbers',(req, res)=>{
  let result=numbers.filter((num)=>filterEvenNumber(num));
  res.json(result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
