/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

let block = "#";
  let space = "&nbsp;"
  let row = "";
  while(true) {
   height = Number(prompt("Please enter a number between 1 and 23:"));
   if(height >=1 && height <=23 && Number.isInteger(height)) {
     for(let i=0; i<height; i++) {
       for(let x=0; x<=(height-2-i); x++) {
       row = row + space;
     }
     for(let y=0; y<=(1+i); y++) {
         row = row + block;
       }
       row = row + "<br/>";
     }
     document.getElementById("mario-easy-output").innerHTML="<code>" + row + "</code>";
     break;
   }
  }

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY

}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

let block = "#";
   let space = "&nbsp;"
   let row = "";
   while(true) {
     height = Number(prompt("Please enter a number between 1 and 23:"));
     if(height >=1 && height <=23 && Number.isInteger(height)) {
       for(let i=0; i<height; i++) {
         for(let x=0; x<=(height-2-i); x++) {
         row = row + space;
       }
       for(let y=0; y<=(1+i); y++) {
           row = row + block;
         }
         row = row + space + space;
         for(let v=0; v<=(1+i); v++) {
           row = row + block;
         }
         row = row + "<br/>";
       }
       document.getElementById("mario-hard-output").innerHTML="<code>" + row + "</code>";
       break;
     }
   }


  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

let oddSum=0;
 let evenSum=0;
 while (true){
   card=prompt("Enter your credit card number: ");
   if ((card.length==16 || card.length==15 || card.length==13) && Number.isInteger(Number(card))){
     break;
   }
 }
 for(let i=card.length-2;i>=0;i-=2) {
   let num=Number(card[i])*2;
   let strnum=num.toString();
   let sum_num=0;
   for (let j=0;j<strnum.length;j++){
     sum_num=sum_num+Number(strnum[j]);
   }
   even=sum_num+evenSum;
   console.log(even);
 }
 for(let k=card.length-1; k>=0;k-=2){
   odd=oddSum+Number(card[k])
 }
 console.log(odd);
 if (card.length==15 && (card[0]==3 &&(card[1]==7 || card[1]==4)) && (oddSum+evenSum)%10==0){
   document.getElementById("credit-output").innerHTML="<img src ='./images/amex.png'/>";
 }
 else if ((card.length==13 || card.length==16) && card[0]==4 && (oddSum+evenSum)%10==0){
   document.getElementById("credit-output").innerHTML="<img src ='./images/visa.png'/>";
 }
 else if (card.length==16 && (card[0]==5 && (card[1]==1 || card[1]==2 || card[1]==4 || card[1]==5)) && (oddSum+evenSum)%10==0){
   document.getElementById("credit-output").innerHTML="<img src ='./images/mastercard.png'/>";
 }
 else {
   document.getElementById("credit-output").innerHTML="<img src ='./images/invalid.png'/>";
 }
 card=Number(card);

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

let mystery = (Math.random()*1000).toFixed(0);
let yourGuess = prompt("Guess a number from 1-1000 (its a whole number btw):")
let attempts = 1
if (yourGuess > mystery) {
  yourGuess = prompt("Too high, guess a bit lower")
} else if (yourGuess < mystery) {
  yourGuess = prompt("Too low, guess a bit higher")
} else {
  alert("You Guessed Correctly!");
}

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
windspeed = Number(prompt("Please enter a positive integer for your windspeed"));
 //legible break
 while (windspeed < 0) {
   windspeed = Number(prompt("Please enter a positive integer for your windspeed"));
 }
 while (Number.isInteger(windspeed) == false) {
   windspeed = Number(prompt("Please enter a positive integer for your windspeed"));
 }
 console.log(windspeed)
//legible break
 if(windspeed >= 157) {
   let div5=document.getElementById("hurricane-output")
   div5.innerHTML = "Category 5 Hurricane."
 }
 if(windspeed >= 130 && windspeed <= 156){
     let div5=document.getElementById("hurricane-output")
     div5.innerHTML = "Category 4 Hurricane."
 }
 if (windspeed >= 111 && windspeed < 129){
    let div5=document.getElementById("hurricane-output")
   div5.innerHTML = "Category 3 Hurricane."
 }
 if (windspeed >= 96 && windspeed < 110){
   let div5=document.getElementById("hurricane-output")
   div5.innerHTML = "Category 2 Hurricane."
 }
 if (windspeed >= 74 && windspeed < 95){
   let div5=document.getElementById("hurricane-output")
   div5.innerHTML = "Category 1 Hurricane."
 }
 if (windspeed >= 39 && windspeed < 73){
   let div5=document.getElementById("hurricane-output")
   div5.innerHTML = "Tropical Storm."
 }
 if(windspeed < 39){
   let div5=document.getElementById("hurricane-output")
   div5.innerHTML = "The skies are calm..."
 }


  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  do{
    scoreNum1 = Number(prompt("Please enter a score between 0 and 10"));
  } while (scoreNum1 < 0.0 || scoreNum1 > 10.0|| !Number.isInteger(scoreNum1)){
  scores.push(scoreNum1);
}
  do{
    scoreNum2 = Number(prompt("Please enter a score between 0 and 10"));
  } while (scoreNum2 < 0.0 || scoreNum2 > 10.0|| !Number.isInteger(scoreNum2)){
  scores.push(scoreNum2);
}
  do{
    scoreNum3 = Number(prompt("Please enter a score between 0 and 10"));
  } while (scoreNum3 < 0.0 || scoreNum3 > 10.0|| !Number.isInteger(scoreNum3)){
  scores.push(scoreNum3);
}
  do{
    scoreNum4 = Number(prompt("Please enter a score between 0 and 10"));
  } while (scoreNum4 < 0.0 || scoreNum4 > 10.0|| !Number.isInteger(scoreNum4)){
  scores.push(scoreNum4);
}
  do{
    scoreNum5 = Number(prompt("Please enter a score between 0 and 10"));
  } while (scoreNum5 < 0.0 || scoreNum5 > 10.0|| !Number.isInteger(scoreNum5)){
  scores.push(scoreNum5);
}
  do{
    scoreNum6 = Number(prompt("Please enter a score between 0 and 10"));
  } while (scoreNum6 < 0.0 || scoreNum6 > 10.0|| !Number.isInteger(scoreNum6)){
  scores.push(scoreNum6);
}
  let totalScore = Number(scoreNum1) + Number(scoreNum2) + Number(scoreNum3) + Number(scoreNum4) + Number(scoreNum5) + Number(scoreNum6);
  let averageScore = (totalScore - Math.max(scoreNum1, scoreNum2, scoreNum3, scoreNum4, scoreNum5, scoreNum6) - Math.min(scoreNum1, scoreNum2, scoreNum3, scoreNum4, scoreNum5, scoreNum6)) / 4;
  let div6 = document.getElementById('gymnastics-output');

  div6.innerHTML = "Discarded: " + Math.min(scoreNum1, scoreNum2, scoreNum3, scoreNum4, scoreNum5, scoreNum6) + ', ' + Math.max(scoreNum1, scoreNum2, scoreNum3, scoreNum4, scoreNum5, scoreNum6) + '<br />Score: ' + averageScore.toFixed(2);


  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */


function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  let testScore;
   let quizScore;
   let homeWorkscore;
   let testAverage;
   let quizAverage;
   let homeworkAverage;
   let finalGradeAverage;
   testScore = prompt("Enter an integer between 1 and 100 for your testscore. Continue until all your scores are inputted, once all scores are inputted enter -1. ");
  while (testScore) {
    testScore = parseFloat(testScore);
 if (testScore == -1){
   testScore = false;
   break;
 }
else if(testScore <= 100.00 && 0.0 <= testScore)
 {
   tests += 1;
   testTotal += testScore;
 }
 else{
 }
 testScore = prompt("Enter an integer between 1 and 100 for your testscore. Continue until all your scores are inputted, once all scores are inputted enter -1. ")
}
quizScore = prompt("Enter an integer between 1 and 100 for your quizscore. Continue until all your scores are inputted, once all scores are inputted enter -1. ");
while (quizScore) {
 quizScore = parseFloat(quizScore);
if (quizScore == -1){
quizScore = false;
break;
 }
else if(quizScore <= 100.00 && 0.0 <= quizScore)
{
quizzes += 1;
quizTotal += quizScore;
}
else{
}
quizScore = prompt("Enter an integer between 1 and 100 for your quizscore. Continue until all your scores are inputted, once all scores are inputted enter -1. ")
}
homeWorkscore = prompt("Enter an integer between 1 and 100 for your homeworkscore. Continue until all your scores are inputted, once all scores are inputted enter -1. ");
while (homeWorkscore) {
 homeWorkscore = parseFloat(homeWorkscore);
if (homeWorkscore == -1){
homeWorkscore = false;
break;
}
else if(homeWorkscore <= 100.00 && 0.0 <= homeWorkscore)
{
homeworks += 1;
homeworkTotal += homeWorkscore;
}
else{
}
homeWorkscore = prompt("Enter an integer between 1 and 100 for your homeworkscore. Continue until all your scores are inputted, once all scores are inputted enter -1. ")
}
testAverage = testTotal/tests;
quizAverage = quizTotal/quizzes;
homeworkAverage = homeworkTotal/homeworks;
finalGradeAverage = (testAverage * 0.6) + (quizAverage * 0.3) + (homeworkAverage * 0.1);

console.log(homeWorkscore)
console.log(quizScore)
console.log(testScore)
console.log(testAverage)
console.log(quizAverage)
console.log(homeworkAverage)
console.log(finalGradeAverage)
  
let div7=document.getElementById("report-card-output")
div7.innerHTML = "Tests: " + testAverage.toFixed(2) + "</br>Quizzes: " + quizAverage.toFixed(2) + "</br>Homework: " + homeworkAverage.toFixed(2) + "</br>Grade: " + finalGradeAverage.toFixed(2);
  
  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
