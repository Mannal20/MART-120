//Just now realizing this is not in the instructions at all. Please disregard this page.
function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(220);

    //Player
    fill("yellow")
    circle(15, 15, 25)

    //Walls
    fill("black")
    rect (0, 30, 450, 10)
    rect (440, 40, 10, 50)
    rect (440, 140, 10, 100)
    rect (350, 240, 100, 10)
    rect (300, 290, 200, 10)
    rect (340, 80, 10, 170)
    rect (290, 130, 10, 170)
    rect (50, 130, 240, 10)
    rect (0, 80, 350, 10)
    rect (50, 130, 10, 200)
    rect (50,330, 220, 10)
    rect (0, 380, 200, 10)
    rect(200, 380, 10, 80)

    //Moving Sauare 1
    fill ("purple")
    rect (400, 90, 50, 50)

    //Moving Square 2
    fill("red")
    rect(220, 130, 50, 50)
    
    
  }