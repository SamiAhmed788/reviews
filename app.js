const imj = document.querySelector('#check');
const naam = document.querySelector("#name");
const des = document.querySelector('#designation');
const para = document.querySelector('#description');

console.log(imj)
let peoples = [
  {

  imgsrc :"asseets/R.jpeg",

name:"sami",
designation : 'developer',
description : 'start new journey of its developing more website foe gaining experience',
  },
  {
    imgsrc : "asseets/jetthalal.jpg",
    name:"d",
    designation : 'developer',
    description : "start new journey of its developing more website foe gaining experience"
  },
  {
    imgsrc : "asseets/hqdefault.jpg",
    name:"sami",
    designation : 'developer',
    description : "start new journey of its developing more website foe gaining experience"
  },
  {
    imgsrc : "asseets/OIP.jpeg",
    name:"sami",
    designation : 'developer',
    description : "start new journey of its developing more website foe gaining experience"
  },
  {
    imgsrc: "asseets/Fy4lZS7X0AIpvRB.jpg",
    name:"sami",
    designation : 'developer',
    description : "start new journey of its developing more website foe gaining experience"
  },
]
let check = false
let number = 0

let item = peoples[number]

function showperson(peoples) {
  imj.src = peoples.imgsrc
naam.textContent = peoples.name;
des.textContent = peoples.designation
para.textContent = peoples.description;



}
showperson(item)

function forward() {

  if (item === peoples.lenght - 1){
    return check 
  }else{
    number = 0

  }
showperson(item)
}

function backward() {
   
  if (item == peoples.lenght - 1) {
    
  } 
  number--;
  item = peoples[number]
showperson(item)
}