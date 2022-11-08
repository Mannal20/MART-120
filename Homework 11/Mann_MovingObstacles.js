function setup() {
    createCanvas(500, 500);
  }
  
  //Variables
  var PlayerX = 25
  var PlayerY = 25
  var PurpleX = 400
  var PurpleY = 90
  var PurpleXSpeed = 1
  var PurpleYSpeed = 1
  var RedX = 220
  var RedY = 130
  var RedXSpeed = 0.75
  var RedYSpeed = 0.75

  //Movement Keys
  var w = 87
  var s = 83
  var a = 65
  var d = 68

  //Mouse Shape
  var mouseShapeX
  var mouseShapeY


  function draw() {
    background(220);

    //Border
    fill("black")
    rect(0,0,width,10)
    rect(0,0,10,height)
    rect(0, height-10,width, 10)
    rect(width-10,0,10,height-50)
    
    //Exit Text
    fill("black")
    text('Goal', 450, 475)
    textSize(20)
   
    //Player
    fill("yellow")
    circle(PlayerX, PlayerY, 25)
    if(keyIsDown(d)){PlayerX+=5}
    if(keyIsDown(a)){PlayerX-=5}
    if(keyIsDown(s)){PlayerY+=5}
    if(keyIsDown(w)){PlayerY-=5}


    //Moving Sauare 1
    fill ("purple")
    rect (PurpleX, PurpleY, 50, 50)
    PurpleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    PurpleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    PurpleX += PurpleXSpeed;
    PurpleY += PurpleYSpeed;
    if(PurpleX > width) {PurpleX = 0}
    if(PurpleX < 0) {PurpleX = width}
    if(PurpleY > height) {PurpleY = 0}
    if(PurpleY < 0) {PurpleY = height}

    //Moving Square 2
    fill("red")
    rect(RedX, RedY, 75, 75)
    RedXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    RedYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    RedX += RedXSpeed;
    RedY += RedYSpeed;
    if(RedX > width) {RedX = 0}
    if(RedX < 0) {RedX = width}
    if(RedY > height) {RedY = 0}
    if(RedY < 0) {RedY = height}

    //Mouse Circle
    fill("green");
    circle(mouseShapeX, mouseShapeY, 30);

    function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

    //Winning Text
    if(PlayerX > width && PlayerY > width-50)
    {
        fill("black");
        textSize(20);
        text("Good Job", width/2-50, height/2-50);
    }
  }