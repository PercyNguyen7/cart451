"use strict";

/*****************
CART 451 PRESENTATION
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let currentAnswer ='';
let aPampadourFont;
let eastmanFont;
let state ='laurenMenu';

//img
let mouseCursor;
let laurenAlexaImg;
// Variables to store our two entities
let user;


// Description of preload

function preload() {
    aPampadourFont = loadFont(`./assets/fonts/APampadour.otf`)
    eastmanFont =loadFont(`./assets/fonts/EastmanRomanTrial-Bold.otf`)
    mouseCursor = loadImage('./assets/images/cursor.png');
    laurenAlexaImg= loadImage('./assets/images/lauren-alexa.png');
}


// setup()
//
// Description of setup

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0);
    if (annyang) {
        let commands = {
          '*input': registerInput
        };
        annyang.addCommands(commands);
        annyang.start();
      }
      cursor = new UserCursor( width / 2, height / 2, 0.1, 7);
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

    push();
    // drawingContext.shadowOffsetX = 2;
    // drawingContext.shadowOffsetY = -2;
    // drawingContext.shadowBlur = 5;
    // drawingContext.shadowColor = 'white';

    push();
    imageMode(CENTER);
    rotate(0.05);
    image(laurenAlexaImg ,3*width/4, 3*height/5, 800,600);
    pop();
    displayTitle(`Lauren's WORKS`, 100, width / 10, 150, 201,60,20);

    displayText(`1. ST`, 60 , width /8, 400, 28,28,28);
    displayText(`2. L`, 60 , width /8 , 500, 28,28,28);
    displayText(`3. WDYWMTS`, 60 , width /8, 600, 28,28,28);
 
    displayText(`CHOICE: ` +  currentAnswer, 80, width / 10  , 800, 201,60,20);

    displayBBRotated();
    pop();
  
  }
  function lauren1(){
    background(208,208,3);
  }


  function registerInput(input){

    currentAnswer = input.toLowerCase();
    console.log(currentAnswer);

    if (currentAnswer == 1){
            // States
        state = 'lauren1';
    }

    else if (currentAnswer ==2){

    }
  }

  function displayTitle(string, size, x, y, r, g, b) {
    push();
    noStroke();
    textFont(eastmanFont);
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
    textFont(aPampadourFont);
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
    strokeWeight(80);
    stroke('rgba(201,60,20, 0.6)');
    fill('rgba(201,60,20, 0.2)');
    imageMode(CORNER);
    // translate(width / 2, height / 2);
    rotate(0.05);
    rect(width/2,0,1200,1200);
    pop();
}
  
//   function mousePressed() {
//     if (state === `menu`) {
//       state = `start`;
//     }
//   }