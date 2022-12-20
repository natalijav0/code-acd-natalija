alert("Welcome");
/* let a="10";*/
 //a has been initialised as 10 aka has a value of 10
 /*Math.random("");*/
 /* this is 
 a multi line comment
 this is
 a multi line comment */
/*prompt("Insert your name");*/
/*let userName=prompt("Insert your name");
alert("'Vaseto '" + userName + "' e procesirano'");
console.log(userName)*/
/*textPrompt()
function textPrompt(){
    <p>text</p>

    return<input></input>
}*/


 let randomNum=Math.random() * 3;
 console.log("'My random number: '"+ randomNum);
 let roundNum=Math.floor(randomNum)+1;

 let num=prompt('"Guess a number from 1 to 3 "');

  if (roundNum==num){
    alert('"You guessed right"')
  } else { 
    alert ('"You guessed wrong."')
  }

