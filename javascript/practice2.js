if(true){
  alert("성인입니다.")
}

//
let age = parseInt(prompt("나이는?"));
  if(age > 19){
    alert("성인입니다.");
  }
  
  //

let age = parseInt(prompt("나이는?"));
  if(age > 19){
    alert("성인입니다.");
  }
  else{
    alert("학생입니다.")
  }

//

let data1 = 173;
let data2 = 51;
  if ((data1 * data2) > 8000){
    alert("8000이 넘습니다")
  } else {
    alert("8000을 넘지 않습니다")
  }

//

let data1 = 173;
let data2 = 51;
  if(((data1 * data2) % 2) == 0){
    alert("짝수입니다.")
  }
  else{
    alert("홀수입니다.")
  }

//

function makeRed(event) {
    box.style.background = "red";
  }
  function makeBlue(event) {
    box.style.background = "blue";
  }
  function makeOrange(event) {
    box.style.background = "orange";
  }
  const box = document.querySelector(".box1");
  box.addEventListener("mouseover", makeRed);
  box.addEventListener("mouseout", makeBlue);
  box.addEventListener("click", makeOrange);

//

for (let num = 0; num < 10; num = num + 1){
  if(num == 0) {
  console.log("zero");
} else {
  console.log(num);
}}

//

let day = 2
for (let num = 0; num < 10; num = num + 1)
{
  if(num != 0){
  console.log(day + "X" + num + "=", (day * num))
}
}

//

