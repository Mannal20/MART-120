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
  var BlueX = 100
  var BlueY = 300
  var BlueXSpeed = 1.5
  var BlueYSpeed = 1.5

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
    createBorders();
    createGoalText();
    drawPlayer();
    movePlayer();
    drawPurpleSquare();
    movePurpleSquare();
    drawRedSquare();
    moveRedSquare();
    drawBlueSquare();
    moveBlueSquare();
    drawMouseCircle();
    mouseClicked();
    displayWinningText();
  }
  //Player Functions
  function createPlayer(x,y)
{   PlayerX = x;
    PlayerY = y;
} 
  function movePlayer()
{   if(keyIsDown(w))
    {PlayerY -= 5;}
    if(keyIsDown(s))
    {PlayerY += 5;}
    if(keyIsDown(a))
    {PlayerX -= 5;}
    if(keyIsDown(d))
    {PlayerX += 5;}
}
    function drawPlayer()
{   fill("yellow")
    circle(PlayerX, PlayerY, 25)
}
//Border
function createBorders()
{
fill("black")
rect(0,0,width,10)
rect(0,0,10,height)
rect(0, height-10,width, 10)
rect(width-10,0,10,height-50)
}
//Purple Square
function createPurpleSquare(x,y)
{   PurpleX = x;
    PurpleY = y;
} 
function drawPurpleSquare()
{fill ("purple")
rect (PurpleX, PurpleY, 50, 50)}
function movePurpleSquare()
{PurpleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    PurpleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    PurpleX += PurpleXSpeed;
    PurpleY += PurpleYSpeed;
    if(PurpleX > width) {PurpleX = 0}
    if(PurpleX < 0) {PurpleX = width}
    if(PurpleY > height) {PurpleY = 0}
    if(PurpleY < 0) {PurpleY = height}}
//RedSquare
function createRedSquare(x,y)
{   RedX = x;
    RedY = y;
}
function drawRedSquare()
{fill("red")
rect(RedX, RedY, 75, 75)}
function moveRedSquare()
{RedXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    RedYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    RedX += RedXSpeed;
    RedY += RedYSpeed;
    if(RedX > width) {RedX = 0}
    if(RedX < 0) {RedX = width}
    if(RedY > height) {RedY = 0}
    if(RedY < 0) {RedY = height}}
//BlueSquare
function createBLueSquare(x,y)
{   BlueX= x
    BlueY = y
}
function drawBlueSquare()
{fill("blue")
rect(BlueX, BlueY, 30, 30)}
function moveBlueSquare()
{BlueYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    BlueX += BlueXSpeed;
    BlueY += BlueYSpeed;
    if(BlueX > width) {BlueX = 0}
    if(BlueX < 0) {BlueX = width}
    if(BlueY > height) {BlueY = 0}
    if(BlueY < 0) {BlueY = height}}
//Goal Text
function createGoalText()
{fill("black")
text('Goal', 450, 475)
textSize(20)}
//Mouse Circle
function drawMouseCircle()
{fill("green");
circle(mouseShapeX, mouseShapeY, 20);}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
//Winning Text
function displayWinningText()
{
    if(PlayerX > width && PlayerY > width-50)
    {
        fill("black");
        textSize(20);
        text("Good Job", width/2-50, height/2-50);
    }
}