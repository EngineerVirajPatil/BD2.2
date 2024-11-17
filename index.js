const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function filterEvenNumber(num){
  return num%2===0;
}

app.get('/even-numbers',(req, res)=>{
  let result=numbers.filter((num)=>filterEvenNumber(num));
  //let result=numbers.filter((num)=>num%2===0); //working line
  res.json(result);
})

let ages=[10,20,30,17,15,25];

function filterAgesGreaterThan18(age){
  return age>18;
}

app.get('/adult-ages',(req, res)=>{
 let result= ages.filter(age=>filterAgesGreaterThan18(age));
 res.json(result);
})

let words=["apple","banana","cherry","date","fig","grape"];

function filterWordsGreaterThanFiveCharacters(word){
  return word.length>5;
}

app.get('/long-words',(req, res)=>{
let result=words.filter(word=>filterWordsGreaterThanFiveCharacters(word));
res.json(result);
})

let fileSizes=[50,75,100,25,30,150,200];

function filterSmallerFileSizes(fileSize,filterParam){
  return fileSize<filterParam;
}

app.get('/small-files',(req, res)=>{
  let filterParam=parseFloat(req.query.filterParam);
  let result=fileSizes.filter(fileSize=>filterSmallerFileSizes(fileSize,filterParam));
  res.json(result);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
