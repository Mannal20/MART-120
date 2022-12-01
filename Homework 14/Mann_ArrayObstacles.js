  //Player Variables
  var PlayerX = 25
  var PlayerY = 25

   //Movement Keys
   var w = 87
   var s = 83
   var a = 65
   var d = 68

    //Mouse Shape
  var mouseShapeX
  var mouseShapeY

  //Square Arrays
  var SquareX = 50
  var SquareY = 50

  var SquareShapeX = [];
  var SquareShapeY = [];
  var SquarePlaceX = [];
  var SquarePlaceY = [];

  var SquareSpeedX = [];
  var SquareSpeedY = [];
  var SquareColor = []
  
  function setup() {
  createCanvas(500, 500);
  //Square Array Setup
  SquareShapeX[0]= 50;
  SquareShapeY[0]=50;
  SquarePlaceX[0]=50;
  SquarePlaceY[0]=50;
  SquareSpeedX[0]=1;
  SquareSpeedX[0]=1;

  SquareShapeX[1]=75;
  SquareShapeY[1]=75;
  SquarePlaceX[1]=75;
  SquarePlaceY[1]=75;
  SquareSpeedX[1]=0.75;
  SquareSpeedX[1]=0.75;

  SquareShapeX[2]=25;
  SquareShapeY[2]=25;
  SquarePlaceX[2]=25;
  SquarePlaceY[2]=25;
  SquareSpeedX[2]=1.25;
  SquareSpeedX[2]=1.25;

  SquareShapeX[3]=35;
  SquareShapeY[3]=35;
  SquarePlaceX[3]=35;
  SquarePlaceY[3]=35;
  SquareSpeedX[3]=-1;
  SquareSpeedX[3]=-1;

  SquareShapeX[4]=65;
  SquareShapeY[4]=65;
  SquarePlaceX[4]=65;
  SquarePlaceY[4]=65;
  SquareSpeedX[4]=0.5;
  SquareSpeedX[4]=0.5;

  for (var i = 0; i < 3; i++)
  {
    SquareShapeX[i]= RandomNumber(75);
    SquareShapeY[i]= RandomNumber(75);
    SquarePlaceX[i]= RandomNumber(500);
    SquareShapeY[i]= RandomNumber(500);
    SquareSpeedX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    SquareSpeedY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  }

}
  function draw()
  {
    background(220);
    createBorders();
    createGoalText();
    drawPlayer();
    movePlayer();
    drawMouseCircle();
    mousePressed();
    displayWinningText();

    //Squares
    for (var i = 0; i <SquarePlaceX.length; i++){
        fill("red")
        rect(SquarePlaceX[i],SquarePlaceY[i], 75, 75);
        SquareSpeedX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        SquareSpeedY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        SquarePlaceX[i] += SquareSpeedX[i];
        SquarePlaceY[i] += SquareSpeedY[i];
        if (SquarePlaceX[i] > width) {
            SquarePlaceX[i] = 0;}
        if (SquarePlaceX[i] < 0) {
            SquarePlaceX[i] = width;}
        if (SquarePlaceY[i] > height) {
            SquarePlaceY[i] = 0;}
        if (SquarePlaceY[i] < 0) {
            SquarePlaceY[i] = height;}
        }
        for (var i = 1; i <SquarePlaceX.length; i++){
            fill("blue")
            rect(SquarePlaceX[i],SquarePlaceY[i], 65, 65);
            SquareSpeedX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            SquareSpeedY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            SquarePlaceX[i] += SquareSpeedX[i];
            SquarePlaceY[i] += SquareSpeedY[i];
            if (SquarePlaceX[i] > width) {
                SquarePlaceX[i] = 0;}
            if (SquarePlaceX[i] < 0) {
                SquarePlaceX[i] = width;}
            if (SquarePlaceY[i] > height) {
                SquarePlaceY[i] = 0;}
            if (SquarePlaceY[i] < 0) {
                SquarePlaceY[i] = height;}
            }
        for (var i = 2; i <SquarePlaceX.length; i++){
        fill("purple")
        rect(SquarePlaceX[i],SquarePlaceY[i], 50, 50);
        SquareSpeedX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        SquareSpeedY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        SquarePlaceX[i] += SquareSpeedX[i];
        SquarePlaceY[i] += SquareSpeedY[i];
        if (SquarePlaceX[i] > width) {
        SquarePlaceX[i] = 0;}
        if (SquarePlaceX[i] < 0) {
        SquarePlaceX[i] = width;}
        if (SquarePlaceY[i] > height) {
        SquarePlaceY[i] = 0;}
        if (SquarePlaceY[i] < 0) {
        SquarePlaceY[i] = height;}
        }
        for (var i = 3; i <SquarePlaceX.length; i++){
            fill("pink")
            rect(SquarePlaceX[i],SquarePlaceY[i], 50, 50);
            SquareSpeedX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            SquareSpeedY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            SquarePlaceX[i] += SquareSpeedX[i];
            SquarePlaceY[i] += SquareSpeedY[i];
            if (SquarePlaceX[i] > width) {
                SquarePlaceX[i] = 0;}
            if (SquarePlaceX[i] < 0) {
                SquarePlaceX[i] = width;}
            if (SquarePlaceY[i] > height) {
                SquarePlaceY[i] = 0;}
            if (SquarePlaceY[i] < 0) {
                SquarePlaceY[i] = height;}
            }
            for (var i = 4; i <SquarePlaceX.length; i++){
            fill("cyan")
            rect(SquarePlaceX[i],SquarePlaceY[i], 50, 50);
            SquareSpeedX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            SquareSpeedY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            SquarePlaceX[i] += SquareSpeedX[i];
            SquarePlaceY[i] += SquareSpeedY[i];
             if (SquarePlaceX[i] > width) {
                    SquarePlaceX[i] = 0;}
            if (SquarePlaceX[i] < 0) {
                    SquarePlaceX[i] = width;}
            if (SquarePlaceY[i] > height) {
                    SquarePlaceY[i] = 0;}
               if (SquarePlaceY[i] < 0) {
                    SquarePlaceY[i] = height;}
                }
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

//Goal Text
function createGoalText()
{fill("black")
text('Goal', 450, 475)
textSize(20)}

//Mouse Circle
function drawMouseCircle()
{fill("green");
circle(mouseShapeX, mouseShapeY, 20);}
function mousePressed()
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

//Random Number Function
function RandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

//rect(SquarePlaceX[0],SquarePlaceY[0],50, 50);
    //SquareSpeedX[0] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    //SquareSpeedY[0] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    //SquarePlaceX[0] += SquareSpeedX[0];
   //SquarePlaceY[0] += SquareSpeedY[0];
    //if (SquarePlaceX[0] > width) {
       // SquarePlaceX[0] = 0;}
   // if (SquarePlaceX[0] < 0) {
       // SquarePlaceX[0] = width;}
   // if (SquarePlaceY[0] > height) {
       // SquarePlaceY[0] = 0;}
   // if (SquarePlaceY[0] < 0) {
       // SquarePlaceY[0] = height;}