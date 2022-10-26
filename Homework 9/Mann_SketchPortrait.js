function setup() {
    createCanvas(400, 500);
  }
  
  function draw() {
    background(220);
    fill('black')
    textSize(20);
    text('Blockhead', 10, 30);
    textSize(15);
    text('Alexandria Mann, 2022', 225, 475)
    fill('#fae5d2');
    rect(50, 50, 300, 400,20);

    rect(75, 135, 100, 80)
    rect(225, 135, 100, 80)
    
    fill('white')
    circle(125, 175, 75)
    circle(275, 175, 75)
    
    fill('#dcf4fa')
    circle(125, 175, 45)
    circle(275, 175, 45)
    
    fill('black')
    circle(125, 175, 25)
    circle(275, 175, 25)
    rect(175,160, 50,20)
    
    fill('#edcd9a')
    triangle(150, 300, 250, 300, 200, 200)

    fill('pink')
    triangle(125, 325, 275, 325, 200, 400)

    strokeWeight(2)
    
    
  }