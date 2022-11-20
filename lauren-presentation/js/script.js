"use strict";

/*****************
CART 451 PRESENTATION
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// let a = createA('http://p5js.org/', 'this is a link');
let currentAnswer ='';
let creatoDisplayFont;
let boldFont;
let state ='laurenMenu';
let inputVisibile = 'true';
//img
let mouseCursor;
let laurenAlexaImg;
let laurenSTImg;
let laurenVoiceImg;
// Variables to store our two entities
let user;
let thankyou = true;

let inputVisible = true;

// Description of preload

function preload() {
    creatoDisplayFont = loadFont(`./assets/fonts/CreatoDisplay-Regular.otf`)
    boldFont =loadFont(`./assets/fonts/THEBOLDFONT.ttf`)
    mouseCursor = loadImage('./assets/images/cursor.png');
    laurenAlexaImg= loadImage('./assets/images/lauren-alexa.png');
    laurenSTImg = loadImage('./assets/images/lauren1.png');
    laurenVoiceImg = loadImage('./assets/images/lauren2a.png');
}


// setup()
//
// Description of setup

function setup() {

    createCanvas(1200, 675);
    background(0);
    if (annyang) {
        let commands = {
          '*input': registerInput
        };
        annyang.addCommands(commands);
        annyang.start();
      }
      cursor = new UserCursor( width / 2, height / 2, 0.1, 3);

}


// draw()
//
// Description of draw()
function draw() {

    switch (state) {
        case `laurenMenu`:
            laurenMenu();
            break;
        case `lauren1`:
            lauren1();
            break;
        case `lauren2`:
            startGame();
            break;
        case `lauren3`:
            happyEnd();
            break;
        case `kylemenu`:
            sadEnd();
            break;
    }
    displayCursor();
  
}
function laurenMenu(){
    background(208,208,208);
    // drawingContext.shadowOffsetX = 2;
    // drawingContext.shadowOffsetY = -2;
    // drawingContext.shadowBlur = 5;
    // drawingContext.shadowColor = 'white';

    push();
    imageMode(CENTER);
    rotate(0.05);
    image(laurenAlexaImg ,3*width/4, 3*height/5, 800,600);
    pop();

    push();
    displayTitle(`Lauren's WORKS`, 100, width / 10, 100, 201,60,20);

    displayText(`ONE`, 40 , width /8, 300, 28,28,28);
    displayText(`TWO`, 40 , width /7 , 350, 28,28,28);
    displayText(`THREE`, 40 , width /6, 400, 28,28,28);
 
    displayInput();
    displayBBRotated();
    pop();
  
  }

  function lauren1(){
    background(20,20,20);
    push();
    imageMode(CENTER);
    image(laurenSTImg ,3.2*width/5, 3.8*height/5, 700,230);
    pop();
    displayTitle(`THE SOCIAL TURKERS`, 90, width / 6, 100, 201,60,20);
    displayTitle(`Dates with strangers, helped by strangers `, 40 , width /7, 175, 201,60,20);
    displayText(`16 dates, 1 month, 0.25$, Portland Oregon `, 40 , width /8, 250, 230,230,230);
    displayText(`Turkers watches 5 mins then response`, 40 , width /9, 300, 230,230,230);
    displayText('Exploring CHANGES and what if', 40 , width /10, 350, 230,230,230);
    displayInput();
    pop();
  }

  function lauren2(){
    background(20,20,20);
    push();
    imageMode(CENTER);
    image(laurenSTImg ,3.2*width/5, 3.8*height/5, 700,230);
    pop();
    displayTitle(`THE SOCIAL TURKERS`, 90, width / 6, 100, 201,60,20);
    displayTitle(`Dates with strangers, helped by strangers `, 40 , width /7, 175, 201,60,20);
    displayText(`16 dates, 1 month, 0.25$, Portland Oregon `, 40 , width /8, 250, 230,230,230);
    displayText(`Turkers watches 5 mins then response`, 40 , width /9, 300, 230,230,230);
    displayText('Exploring relationships - TRANSFORMATIONS and WHAT IFS', 40 , width /10, 350, 230,230,230);
    displayInput();
    pop();
  }

  function registerInput(input){

    currentAnswer = input.toLowerCase();
    console.log(currentAnswer);

    if (currentAnswer == '1' && state =='laurenMenu'){
            // States
        state = 'lauren1';
    }
    else if (state =='lauren1'&& currentAnswer =='menu' ||state =='lauren2'&& currentAnswer =='menu' ||state =='lauren3' && currentAnswer =='menu'){
      state ='laurenMenu';
    }

    else if(currentAnswer =='website' && state =='lauren1'){
      window.open("http://socialturkers.com/");
    }
    else if (currentAnswer ==2 && state =='lauren'){

    }
    else if (currentAnswer == 'thank you' && thankyou ==true){
      thankyou = false;
      alert("You're welcome...")
    }
  }

  function displayInput(){
    if (inputVisible == true){
      displayText(`Input ` +  currentAnswer, 30, width / 11  , 625, 201,60,20);
    }
    // else if (inputVisible == false){

    // }
  }

  function displayTitle(string, size, x, y, r, g, b) {
    push();
    noStroke();
    textFont(boldFont);
    fill(r, g, b);
    textAlign(LEFT, CENTER);
    textSize(size);
    text(string, x, y);
    pop();
  }

  function displayText(string, size, x, y, r, g, b) {
    push();
    noStroke();
    textStyle(NORMAL);
    textFont(creatoDisplayFont);
    fill(r, g, b);
    textAlign(LEFT, CENTER);
    textSize(size);
    text(string, x, y);
    pop();
  }

function displayCursor(){
    push();
    imageMode(CENTER);
    image(mouseCursor, mouseX, mouseY, 90, 90);
    pop();
    cursor.display();
    cursor.move();
    cursor.chase();
}
function displayBBRotated(){
    push();
    strokeWeight(40);
    stroke('rgba(201,60,20, 0.5)');
    fill('rgba(201,60,20, 0.15)');
    imageMode(CORNER);
    // translate(width / 2, height / 2);
    rotate(0.05);
    rect(width/3,0,1200,1200);
    pop();
}
  
//   function mousePressed() {
//     if (state === `menu`) {
//       state = `start`;
//     }
//   }

function keyPressed(){
  if (keyCode == 49 && state =='laurenMenu'){
    state = 'lauren1';
  }
  else if (keyCode === 50 && state == 'laurenMenu'){
    state = 'lauren2';
  }
  else if (keyCode == BACKSPACE && state == 'lauren1'|| keyCode == BACKSPACE && state == 'lauren2'||keyCode == BACKSPACE && state == 'lauren3'){
    state = 'laurenMenu';
  }

  // 32 IS FOR SPACEBAR!!
  if (keyCode == 32 && inputVisible == true){
    inputVisible = false;
  }
  else if (keyCode == 32 && inputVisible == false){
    inputVisible = true;
  }
}