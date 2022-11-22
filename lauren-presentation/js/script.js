"use strict";

/*****************
CART 451 PRESENTATION
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// let a = createA('http://p5js.org/', 'this is a link');
let currentAnswer = '';
let creatoDisplayFont;
let boldFont;
let state = 'laurenMenu';
let inputVisibile = 'true';
//img
let mouseCursor;
let laurenAlexaImg;
let laurenSTImg;
let laurenVoiceImg;
let laurenVoiceP5Img;
let laurenAlexa2Img;

let kyleBioImg;
let kyleBio2Img;
let kyleBio3Img;
let kyleBio4Img;

let kyle1Img;

let kyle2Img;
let kyle2LeftImg;
let kyle2RightImg;
let kyle2BottomImg;



let laurenVoiceActivated = false;
// Variables to store our two entities
let user;
let thankyou = true;

let cursorVisible = true;
let inputVisible = true;
let laurenBragSFX;
// Description of preload

function preload() {
  creatoDisplayFont = loadFont(`./assets/fonts/CreatoDisplay-Regular.otf`)
  boldFont = loadFont(`./assets/fonts/THEBOLDFONT.ttf`)
  mouseCursor = loadImage('./assets/images/cursor.png');
  laurenAlexaImg = loadImage('./assets/images/lauren-alexa.png');
  laurenSTImg = loadImage('./assets/images/lauren1.png');
  laurenVoiceImg = loadImage('./assets/images/lauren2a.png');
  laurenVoiceP5Img = loadImage('./assets/images/lauren2b.png');
  laurenAlexa2Img = loadImage('./assets/images/lauren3.png');
  kyleBioImg = loadImage('./assets/images/kyle-bio.jpeg');
  kyleBio2Img = loadImage('./assets/images/kyle-bio-2.png');
  kyleBio3Img = loadImage('./assets/images/kyle-bio-3.png');
  kyleBio4Img = loadImage('./assets/images/kyle-bio-4.png');
  kyle1Img = loadImage('./assets/images/kyle1.jpg');
  kyle2LeftImg = loadImage('./assets/images/kyle2a.png');
  kyle2RightImg = loadImage('./assets/images/kyle2b.jpeg');
  kyle2BottomImg = loadImage('./assets/images/kyle2c.jpeg');


  //sound
  laurenBragSFX = loadSound('./assets/sounds/laurenBrag.mp3');
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
  cursor = new UserCursor(width / 2, height / 2, 0.1, 3);
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
      lauren2();
      break;
    case `lauren3`:
      lauren3();
      break;
    case `kyleMenu`:
      kyleMenu();
      break;
    case `kyle1`:
      kyle1();
      break;
    case `kyle2`:
      kyle2();
      break;
      case `analysis`:
        analysis();
        break;  
        case `questions`:
          questions();
          break;  
  }
  displayCursor();
}

function laurenMenu() {
  background(208, 208, 208);
  // drawingContext.shadowOffsetX = 2;
  // drawingContext.shadowOffsetY = -2;
  // drawingContext.shadowBlur = 5;
  // drawingContext.shadowColor = 'white';

  push();
  imageMode(CENTER);
  rotate(0.05);
  image(laurenAlexaImg, 3 * width / 4, 3 * height / 5, 800, 600);
  pop();

  push();
  displayTitle(`Lauren's WORKS`, 100, width / 10, 100, 201, 60, 20);

  displayText(`ONE`, 40, width / 8, 300, 28, 28, 28);
  displayText(`TWO`, 40, width / 7, 350, 28, 28, 28);
  displayText(`THREE`, 40, width / 6, 400, 28, 28, 28);

  displayInput();
  displayBBRotated();
  pop();

}

function lauren1() {
  background(20, 20, 20);
  push();
  imageMode(CENTER);
  image(laurenSTImg, 3.2 * width / 5, 3.8 * height / 5, 700, 230);
  pop();
  displayTitle(`THE SOCIAL TURKERS`, 90, width / 6, 100, 201, 60, 20);
  displayTitle(`Dates with strangers, helped by strangers `, 40, width / 7, 175, 201, 60, 20);
  displayText(`16 dates, 1 month, 0.25$, Portland Oregon `, 40, width / 8, 250, 230, 230, 230);
  displayText(`Turkers watches 5 mins then response`, 40, width / 9, 300, 230, 230, 230);
  displayText('Exploring CHANGES and what if', 40, width / 10, 350, 230, 230, 230);
  displayInput();
  pop();
}

function lauren2() {
  background(20, 20, 20);
  push();
  imageMode(CENTER);
  if (!laurenVoiceActivated) {
    image(laurenVoiceImg, width / 2, height / 2 + 35, 900, 400);
  } else if (laurenVoiceActivated) {
    image(laurenVoiceP5Img, width / 2, height / 2 + 35, 900, 400);
  }
  pop();

  displayTitle(`what do you want me to say`, 60, width / 6, 100, 201, 60, 20);
  displayText('JavaScript (p5.js), Web Audio API, Descript Voice API, HTML, CSS', 20, width / 10, 150, 230, 230, 230);
  // 
  displayText('vulnerability, ownership, and authenticity in a time of rapidly advancing virtual reality', 20, 0.6 * width / 2, 590, 230, 230, 230);
  displayInput();
}

function lauren3() {
  background(20, 20, 20);
  push();
  imageMode(CORNER);
  image(laurenAlexa2Img, 0, 0, 900, 500);
  pop();

  displayTitle(`LAUREN`, 80, width / 6, 100, 201, 60, 20);
  displayText('questionsing AI, Privacy and Home', 30, 100, 520, 230, 230, 230);
  displayText('"...not to impose a point of view, but to give viewers a space to form their own"', 30, 100, 570, 230, 230, 230);

  displayInput();
}

function kyleMenu() {
  background(208, 208, 208);

  push();
  imageMode(CORNER);
  image(kyleBioImg, 25, 225, 500, 465);
  imageMode(CENTER);
  image(kyleBio2Img, 1000 - 25, 100, 400, 240);
  image(kyleBio3Img, 900 - 25, 330, 380, 230);
  image(kyleBio4Img, 800 - 25, 570, 420, 260);
  pop();
  push();
  displayTitle(`Kyle Mcdonald`, 80, 50, 120, 201, 60, 20);
  displayTextCenter(`ONE`, 40, width/2, height/2-20, 30,30,30);
  displayTextCenter(`TWO`, 40, width/2, height/2+20, 30,30,30);
  displayInput();
  pop();
}

function kyle1() {
  background(20, 20, 20);
  push();
  imageMode(CENTER);
  image(kyle1Img, 400, 300, 800, 500);

  displayTitle(`Sharing`, 90, 4.1*width / 6, 100, 201, 60, 20);
  displayTitle(`faces`, 90, 4.1*width / 6, 180, 201, 60, 20);
  displayText(`An installation piece `,30, 4.1*width / 6, 280, 230, 230, 230);
  displayText(`that connects people `,30, 4.1*width / 6, 310, 230, 230, 230);
   displayText(`from two countries`,30, 4.1*width / 6, 370, 230, 230, 230);
  displayText(`using face tracking`,30,  4.1*width / 6, 430, 490, 230, 230);

  displayText(`and crowdsourced images `,30,  4.1*width / 6, 490, 230, 230, 230);
  displayTitle(`Show video!`,30,  4.1*width / 6, 600, 201,60,20);
  // https://vimeo.com/96549043
   displayInput();
  pop();
}
function kyle2() {
  background(20, 20, 20);
  push();
  imageMode(CENTER);
  image(kyle2LeftImg,  width/4,125,600, 253);
  image(kyle2RightImg,  3*width/4,125,600, 253);
  image(kyle2BottomImg,  width/2,550,533, 300);
  pop();

  push();
  displayTitle(`Vibe Check`,90, width/4+50, height/2,  201, 60, 20);
  displayText(`Installation piece `,30, 100, 280, 230, 230, 230);

  displayText(`surveillance`,30, 100, 380, 230, 230, 230);
  displayText(`expression analysis`,30, 900, 480, 230, 230, 230);
  displayText(`art exhibition`,30, 900, 580, 230, 230, 230);
  displayInput();
  pop();
}

function analysis(){
  background(255);
  push();
  displayTitleCenter(`ANALYSIS`,300, width/2,height/2-50, 190,190,190);
  displayTitleCenter(`Lauren & Kyle`,60, width/4,height/4-50, 190,190,190);

  fill('rgba(201,60,20,0.7)');
  noStroke();
  ellipse(3*width/4-100,1.3*height/4, 275);
  displayTextCenter(`Connection through`,30, 3*width/4-100,1.3*height/4-20, 230, 230, 230);
  displayTextCenter(`technology`,30, 3*width/4-100,1.3*height/4+20, 230, 230, 230);

  ellipse(width/4+50-100,3*height/4, 280);
  displayTextCenter(`questions Privacy`,30, width/4+50-100,3*height/4, 230, 230, 230);

  ellipse(3*width/4-50-100,3*height/4, 230);
  displayTextCenter(`Intrusion`,30, 3*width/4-50-100,3*height/4-20, 230, 230, 230);
  displayTextCenter(`of technology`,30, 3*width/4-50-100,3*height/4+20, 230, 230, 230);

  ellipse(3*width/4+50,height/2+60, 250);
  displayTextCenter(`Similar mediums`,30, 3*width/4+50,height/2+40, 230, 230, 250);
  displayTextCenter(`cam, mic`,30, 3*width/4+50,height/2+80, 230, 230, 250);

  fill('rgba(201,60,20,0.9)');
  ellipse(width/2-100,height/2, 390);
  displayTextCenter(`Ubiqity of `,40, 600-100, 337.5-20, 230, 230, 230);
  displayTextCenter(`technologies`,40, 600-100, 337.5+20, 230, 230, 230);
  displayInput();
  pop();
}

function questions(){
  background(0);
  displayTitleCenter(`questions`,300, width/2,height/2-50, 20,20,20);
  displayText('Do you think that crowdsourcing is a good direction to go for future projects?',30,50,100,255);
  displayText('Do you think that artificial intelligence is too present in our lives?',30,50,200,255);
  displayText('Reflecting on the Lauren project by McCarthy, ',30,50,300,255);
  displayText('would you feel more comfortable with an AI virtual assistant or a human assistant?',30,50,340,255);
  displayTitle('FINAL QUESTION',50,50,500,201,60,20);
  displayTitle('hint: the human algorithm',30,50,550,201,60,20);

  displayInput();
}
function registerInput(input) {
  currentAnswer = input.toLowerCase();
  console.log(currentAnswer);
  if (currentAnswer == 1 && state == 'laurenMenu') {
    // States
    state = 'lauren1';
  } else if (currentAnswer == 'website' && state == 'lauren1') {
    window.open("http://socialturkers.com/");
  } else if (currentAnswer == 'next artist' && state == 'laurenMenu') {
    state = 'kyleMenu'
  } else if (state == 'lauren1' && currentAnswer == 'back' || state == 'lauren2' && currentAnswer == 'back' || state == 'lauren3' && currentAnswer == 'back') {
    state = 'laurenMenu';
  } else if (currentAnswer == 2 && state == 'laurenMenu') {
    state = 'lauren2';
  } else if (currentAnswer == 'hi lauren' && state == 'lauren2') {
    state = 'lauren2';
    laurenVoiceActivated = true;
    laurenBragSFX.play();
  } else if (currentAnswer == 3 && state == 'laurenMenu') {
    state = 'lauren3';
  } else if (state == 'kyleMenu' && currentAnswer == 1) {
    state = 'kyle1';
  }else if (state == 'kyleMenu' && currentAnswer == 2) {
    state = 'kyle2';
  }else if (state == 'kyle1' && currentAnswer == 'back' || state == 'kyle2' && currentAnswer == 'back' ) {
    state = 'kyleMenu';
  } else if (currentAnswer == 'show video' && state == 'kyle1') {
    window.open("https://vimeo.com/96549043");
  }else if (currentAnswer == 'the human algorithm' && state == 'questions') {
    window.open("https://percynguyen7.github.io/cart451/final-project/prototype/home.html");
  } else if (state == 'laurenMenu' && currentAnswer == 'next') {
    state = 'kyleMenu';
  } else if (state == 'kyleMenu' && currentAnswer == 'next') {
    state = 'analysis';
  } else if (state == 'analysis' && currentAnswer == 'next') {
    state = 'questions';
  } else if (state == 'kyleMenu' && currentAnswer == 'back') {
    state = 'laurenMenu';
  } else if (state == 'analysis' && currentAnswer == 'back') {
    state = 'kyleMenu';
  } else if (state == 'questions' && currentAnswer == 'back') {
    state = 'analysis';
  }

  // else if (currentAnswer == 'thank you' && thankyou ==true){
  //   thankyou = false;
  //   alert("You're welcome...")
  // }
}

function displayInput() {
  if (inputVisible == true) {
    displayText(`Input ` + currentAnswer, 30, width / 11, 625, 201, 60, 20);
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
function displayTitleCenter(string, size, x, y, r, g, b) {
  push();
  noStroke();
  textFont(boldFont);
  fill(r, g, b);
  textAlign(CENTER, CENTER);
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

function displayTextCenter(string, size, x, y, r, g, b) {
  push();
  noStroke();
  textStyle(NORMAL);
  textFont(creatoDisplayFont);
  fill(r, g, b);
  textAlign(CENTER, CENTER);
  textSize(size);
  text(string, x, y);
  pop();
}
function displayCursor() {
  push();
  imageMode(CENTER);
  image(mouseCursor, mouseX, mouseY, 90, 90);
  pop();
  if (cursorVisible) {
    cursor.display();
    cursor.move();
    cursor.chase();
  }
}

function displayBBRotated() {
  push();
  strokeWeight(40);
  stroke('rgba(201,60,20, 0.5)');
  fill('rgba(201,60,20, 0.15)');
  imageMode(CORNER);
  // translate(width / 2, height / 2);
  rotate(0.05);
  rect(width / 3, 0, 1200, 1200);
  pop();
}

//   function mousePressed() {
//     if (state === `menu`) {
//       state = `start`;
//     }
//   }

function keyPressed() {
  if (keyCode == 49 && state == 'laurenMenu') {
    state = 'lauren1';
  } else if (keyCode === 50 && state == 'laurenMenu') {
    state = 'lauren2';
  } else if (keyCode === 51 && state == 'laurenMenu') {
    state = 'lauren3';
  } else if (keyCode == 37 && state == 'lauren1' || keyCode == 37 && state == 'lauren2' || keyCode == 37 && state == 'lauren3') {
    state = 'laurenMenu';
  }
  // < and > 
  else if (keyCode == 37 && state == 'kyleMenu') {
    state = 'laurenMenu';
  } else if (keyCode == 39 && state == 'laurenMenu') {
    state = 'kyleMenu';
  } else if (keyCode == 49 && state == 'kyleMenu') {
    state = 'kyle1';
  } else if (keyCode == 50 && state == 'kyleMenu') {
    state = 'kyle2';
  } else if (keyCode == 37 && state == 'kyle1' || keyCode == 37 && state == 'kyle2'){
    state = 'kyleMenu';
  }  else if (keyCode == 39 && state == 'kyleMenu') {
    state = 'analysis';
    
  } else if (keyCode == 39 && state == 'analysis') {
    state = 'questions';
    
  }else if (keyCode == 37 && state == 'analysis') {
    state = 'kyleMenu';
  } else if (keyCode == 37 && state == 'questions') {
    state = 'analysis';
  } else if (keyCode == 32 && state == 'questions') {
    window.open("https://percynguyen7.github.io/cart451/final-project/prototype/home.html");
  } else if (keyCode == 32 && state == 'kyle1') {
    window.open("https://vimeo.com/96549043")
  } 


  // X (88) to close input!!
  if (keyCode == 88 && inputVisible == true) {
    inputVisible = false;
  } else if (keyCode == 88 && inputVisible == false) {
    inputVisible = true;
  }
  // C(67) to close cursor!!
  if (keyCode == 67 && cursorVisible == false) {
    cursorVisible = true;
  } else if (keyCode == 67 && cursorVisible == true) {
    cursorVisible = false;
  }
}