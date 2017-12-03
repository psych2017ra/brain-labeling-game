var input, button, greeting, brainPart;
function setup() {
  
  createCanvas(752, 606);
  img = loadImage("full-brain.jpg");
  
  responder = createElement('h2', "hello!");
  responder.position(80, 50);
  
  //frontal lobe
  input = createInput();
  input.position(90, 25);
  button = createButton('go');
  button.position(input.x + input.width, 25);
  button.mousePressed(guessFrontalLobe);
  
  //broca's area
  input2 = createInput();
  input2.position(40, 170);
  button2 = createButton('go');
  button2.position(input2.x + input2.width, input2.y);
  button2.mousePressed(guessBrocaArea);
  
  //temporal lobe
  input3 = createInput();
  input3.position(40, 260);
  button3 = createButton('go');
  button3.position(input3.x + input3.width, input3.y);
  button3.mousePressed(guessTemporalLobe);
  
  //longitudinal fissure
  input4 = createInput();
  input4.position(190, 340);
  button4 = createButton('go');
  button4.position(input4.x + input4.width, input4.y);
  button4.mousePressed(guessLongitudinalFissure);
  
  //frontal lobe
  input5 = createInput();
  input5.position(200, 390);
  button5 = createButton('go');
  button5.position(input5.x + input5.width, input5.y);
  button5.mousePressed(guessFrontalLobe2);
  
  //premotor area
  input6 = createInput();
  input6.position(230, 420);
  button6 = createButton('go');
  button6.position(input6.x + input6.width, input6.y);
  button6.mousePressed(guessPremotorArea);
  
  //precentral gyrus
  input7 = createInput();
  input7.position(230, 460);
  button7 = createButton('go');
  button7.position(input7.x + input7.width, input7.y);
  button7.mousePressed(guessPrecentralGyrus);
  
  //postcentral gyrus
  input8 = createInput();
  input8.position(230, 490);
  button8 = createButton('go');
  button8.position(input8.x + input8.width, input8.y);
  button8.mousePressed(guessPostcentralGyrus);
  
  //parietal lobe
  input9 = createInput();
  input9.position(230, 520);
  button9 = createButton('go');
  button9.position(input9.x + input9.width, input9.y);
  button9.mousePressed(guessParietalLobe);
  
  //occipital lobe
  input10 = createInput();
  input10.position(210, 570);
  button10 = createButton('go');
  button10.position(input10.x + input10.width, input10.y);
  button10.mousePressed(guessOccipitalLobe);

  //parietal lobe
  input11 = createInput();
  input11.position(560, 25);
  button11 = createButton('go');
  button11.position(input11.x + input11.width, input11.y);
  button11.mousePressed(guessParietalLobe2);
  
  //cerebellum
  input12 = createInput();
  input12.position(580, 300);
  button12 = createButton('go');
  button12.position(input12.x + input12.width, input12.y);
  button12.mousePressed(guessCerebellum);
  
   //medulla oblongota
  input13 = createInput();
  input13.position(580, 370);
  button13 = createButton('go');
  button13.position(input13.x + input13.width, input13.y);
  button13.mousePressed(guessMedullaOblongota);
  
   //wernicke's area
  input14 = createInput();
  input14.position(600, 200);
  button14 = createButton('go');
  button14.position(input14.x + input14.width, input14.y);
  button14.mousePressed(guessWernickeArea);
  
  //occipital lobe
  input15 = createInput();
  input15.position(630, 160);
  button15 = createButton('go');
  button15.position(input15.x + 100, input15.y);
  button15.mousePressed(guessOccipitalLobe2);
  
  //reading comprehension area
  input16 = createInput();
  input16.position(605, 55);
  button16 = createButton('go');
  button16.position(input16.x + input16.width, input16.y);
  button16.mousePressed(guessReadingComp);
  
  
}

function draw() {
    background(img);
  
}

function guessFrontalLobe() {
  
  var brainGuess = input.value();
  
  if (brainGuess == "frontal lobe")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input.value('');
  }
}

function guessBrocaArea() {
  
  var brainGuess = input2.value();
  
  if (brainGuess == "broca's area")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input2.value('');
  }
}

function guessTemporalLobe() {
  var brainGuess = input3.value();
  
  if (brainGuess == "temporal lobe")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input3.value('');
  }
}

function guessLongitudinalFissure() {
  var brainGuess = input4.value();
  
  if (brainGuess == "longitudinal fissure")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input4.value('');
  }
}

function guessFrontalLobe2() {
  var brainGuess = input5.value();
  
  if (brainGuess == "frontal lobe")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input5.value('');
  }
}

function guessPremotorArea() {
  var brainGuess = input6.value();
  
  if (brainGuess == "premotor area")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input6.value('');
  }
}
  
function guessPrecentralGyrus() {
  var brainGuess = input7.value();
  
  if (brainGuess == "precentral gyus")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input7.value('');
  }
}

function guessPostcentralGyrus() {
  var brainGuess = input8.value();
  
  if (brainGuess == "postcentral gyus")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input8.value('');
  }
}

function guessParietalLobe() {
  var brainGuess = input9.value();
  
  if (brainGuess == "parietal lobe")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input9.value('');
  }
}

function guessOccipitalLobe() {
  var brainGuess = input10.value();
  
  if (brainGuess == "parietal lobe")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input10.value('');
  }
}

function guessParietalLobe2() {
  var brainGuess = input11.value();
  
  if (brainGuess == "parietal lobe")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input11.value('');
  }
}

function guessCerebellum() {
  var brainGuess = input12.value();
  
  if (brainGuess == "cerebellum")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input12.value('');
  }
}

function guessMedullaOblongota() {
  var brainGuess = input13.value();
  
  if (brainGuess == "medulla oblongota")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input13.value('');
  }
}

function guessWernickeArea() {
  var brainGuess = input14.value();
  
  if (brainGuess == "wernicke's area")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input14.value('');
  }
}


function guessOccipitalLobe2() {
  var brainGuess = input15.value();
  
  if (brainGuess == "occipital lobe")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input15.value('');
  }
}

function guessReadingComp() {
  var brainGuess = input16.value();
  
  if (brainGuess == "reading comprehension area")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input16.value('');
  }
}


