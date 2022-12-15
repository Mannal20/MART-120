function setup() {
    createCanvas(500, 500);
    window.alert ("Make your way through the track by not touching the Red or Purple rectangles. Touch the Cyan block to win! Use WASD to move.")
  }
  //Variables
  var PlayerX = 15
  var PlayerY = 15
  var Square1X = 400
  var Square1Y = 90
  var Square1Speed = 1
  var Square2X = 220
  var Square2Y = 130
  var Square2Speed = -1
  var Square3X = 50
  var Square3Y = 200
  var Square3Speed = -0.75
  var Square4X = 150
  var Square4Y = 380
  var Square4Speed = -1.25
  var Square5X = 300
  var Square5Y = 400
  var Square5Speed = 1.5

  //Movement Keys
  var w = 87
  var s = 83
  var a = 65
  var d = 68

function draw() {
    background(220);
    createWalls();
    RestartZones();
    Square1();
    Square2();
    Square3();
    Square4();
    Square5();
    Goal();
    CreatePlayer();
    displayWinningText();
    
  }
   
  //Player
  function CreatePlayer(x,y)
  {fill ("yellow")
    circle (PlayerX, PlayerY, 15)
    if(keyIsDown(w))
    {PlayerY -= 3;}
    if(keyIsDown(s))
    {PlayerY += 3;}
    if(keyIsDown(a))
    {PlayerX -= 3;}
    if(keyIsDown(d))
    {PlayerX += 3;}
    if(PlayerX > width) {PlayerX = 0}
    if(PlayerX < 0) {PlayerX = width}
    if(PlayerY > height) {PlayerY = 0}
    if(PlayerY < 0) {PlayerY = height}
  }

   function createWalls()
   {
    fill("black")
    rect (0, 30, 450, 10)
    rect (440, 40, 10, 200)
    rect (350, 240, 100, 10)
    rect (300, 290, 200, 10)
    rect (340, 80, 10, 170)
    rect (290, 130, 10, 170)
    rect (50, 130, 240, 10)
    rect (0, 80, 350, 10)
    rect (50, 130, 10, 200)
    rect (50,330, 220, 10)
    rect (0, 380, 200, 10)
    rect (200, 380, 10, 80)
    rect (270, 330, 10, 80)
    rect (200, 450, 300, 10)
    rect (270, 400, 300, 10)
   }

   function Square1()
   {
    fill ("purple")
    rect (Square1X, Square1Y, 50, 50);
    Square1X += Square1Speed;
    if(Square1X <=400  || Square1X >= 450)
    {Square1Speed *=-1;}
   }
   
   function Square2()
   {
    fill("purple")
    rect(Square2X, Square2Y, 50, 50);
    Square2Y += Square2Speed;
    if(Square2Y <=80  || Square2Y >= 130)
    {Square2Speed *=-1;}
   }
   
   function Square3()
   {
    fill("purple")
    rect(Square3X, Square3Y, 50, 50);
    Square3X += Square3Speed;
    if(Square3X <=0  || Square3X >= 50)
    {Square3Speed *=-1;}
   }

   function Square4()
   {
    fill("purple")
    rect(Square4X, Square4Y, 50, 50);
    Square4Y += Square4Speed;
    if(Square4Y <=330  || Square4Y >= 380)
    {Square4Speed *=-1;}
   }

   function Square5()
   {
    fill("purple")
    rect(Square5X, Square5Y, 50, 50);
    Square5Y += Square5Speed;
    if(Square5Y <=400  || Square5Y >= 450)
    {Square5Speed *=-1;}
   }
   function RestartZones()
   {
    fill("red")
    rect (0, 40, 440, 40)
    rect (350, 40, 90, 200)
    rect (60, 140, 230, 190)
    rect (280, 300, 230, 100)
    rect (0, 390, 200, 150)
    rect (200, 460, 300, 50)
   }
   function Goal()
   {
    fill("cyan")
    rect (480, 410, 20, 40)
   }
   //Winning Text
function displayWinningText()
{
    if(PlayerX > 480 && PlayerY > 410)
    {
        fill("black");
        textSize(20);
        text("You did it!", width/2-50, height/2-50);
    }
}

//I attempted to make it where if the player touches the squares or red area then it would send them back to the start. The variables wouldn't allow it
function TouchRestarts()
{
  if(PlayerX = Square1X && PlayerY > Square1Y)
  {
      PlayerX = 15;
      PlayerY = 15;
  }
}