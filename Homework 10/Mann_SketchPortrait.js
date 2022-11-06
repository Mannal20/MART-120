//Variables
  //Eyebrows
  var eyebrow1X = 75
  var eyebrow1Y = 100
  var eyebrow1Direction = 1
  var eyebrow2X = 225
  var eyebrow2Y = 100
  var eyebrow2Direction = -1

  //Irises
  var iris1X = 125
  var iris1Y = 175
  var iris1Direction = 0.5
  var iris2X = 275 
  var iris2y = 175
  var iris2Direction = 0.5

  //Pupils
  var pupil1X = 125
  var pupil1Y = 175
  var pupil1Direction = 0.5
  var pupil2X = 275
  var pupil2Y = 175
  var pupil2Direction = 0.5

  //Mouth
  var triPoint1X = 125
  var triPoint1Y = 325
  var triPoint2X = 275
  var triPoint2Y = 325
  var triPoint3X = 200
  var triPoint3Y = 400
  var triPointDirection = 0.75

  //Title Size
  var size = 20;
  var count = 0;
  var sizeDirection = 1;


function setup() {
    createCanvas(400, 500);
  }
  
  function draw() {
    background(220);
    
    //head - stay
    fill('#fae5d2');
    rect(50, 50, 300, 400,20);
    
    //glass frames - stay
    rect(75, 135, 100, 80);
    rect(225, 135, 100, 80);
    
    //eye whites - stay
    fill('white')
    circle(125, 175, 75)
    circle(275, 175, 75)
    
    //irises - horizontal movement
    fill('#dcf4fa')
    circle(iris1X, iris1Y, 45)
    iris1X += iris1Direction;
    if(iris1X <=110  || iris1X >= 140)
    {iris1Direction *=-1;}
    circle(iris2X, iris2y, 45)
    iris2X += iris2Direction;
    if(iris2X <=260  || iris2X >= 290)
    {iris2Direction *=-1;}
    
    //pupils - horizontal movement
    fill('black')
    circle(pupil1X, pupil1Y, 25)
    pupil1X += pupil1Direction;
    if(pupil1X <=110  || pupil1X >= 140)
    {pupil1Direction *=-1;}
    circle(pupil2X, pupil2Y, 25)
    pupil2X += pupil2Direction;
    if(pupil2X <=260  || pupil2X >= 290)
    {pupil2Direction *=-1;}
    
    //glasses bridge - stay
    rect(175,160, 50,20)

    //eyebrows - vertical
    rect(eyebrow1X, eyebrow1Y, 100,20)
    eyebrow1Y += eyebrow1Direction;
    if(eyebrow1Y <= 90 || eyebrow1Y >= 110)
    {eyebrow1Direction *=-1;}
    rect(eyebrow2X, eyebrow2Y, 100,20)
    eyebrow2Y += eyebrow2Direction;
    if(eyebrow2Y <= 90 || eyebrow2Y >= 110)
    {eyebrow2Direction *=-1;}
    
    //nose - stay
    fill('#edcd9a')
    triangle(150, 300, 250, 300, 200, 200)
    
    //mouth - diagonal movement  -moves along both x and y
    fill('pink')
    //         1X   1Y   2X   2Y   3X    3Y
    //triangle(125, 325, 275, 325, 200, 400)
    triangle(triPoint1X, triPoint1Y, triPoint2X, triPoint2Y, triPoint3X, triPoint3Y)
    triPoint1X += triPointDirection;
    if(triPoint1X <= 115 || triPoint1X >= 135)
    {triPointDirection *=-1;}
    triPoint1Y += triPointDirection;
    if(triPoint1Y <= 315 || triPoint1Y >= 335)
    {triPointDirection *=-1;}
    triPoint2X += triPointDirection;
    if(triPoint2X <= 265 || triPoint2X >= 285)
    {triPointDirection *=-1;}
    triPoint2Y += triPointDirection;
    if(triPoint2Y <= 315 || triPoint2Y >= 335)
    {triPointDirection *=-1;}
    triPoint3X += triPointDirection;
    if(triPoint3X <= 190 || triPoint3X >= 210)
    {triPointDirection *=-1;}
    triPoint3Y += triPointDirection;
    if(triPoint3Y <= 390 || triPoint3Y >= 410)
    {triPointDirection *=-1;}

    //text
    fill('black')
    textSize(15);
    text('Alexandria Mann, 2022', 225, 475)
    
    fill('black')
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Blockhead', 10, 30);
    

    strokeWeight(2)
    
    
  }