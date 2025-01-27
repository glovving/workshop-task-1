let x = 0;
let y2 = 0;
let move = 2;
let move2 = 3;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  function circle1(){
   
    stroke("red");
    fill('red');
    
    if(x > width){
      move = -2;
    }
    if(x< 0){
      move = 2;
    }

    circle(x, 200, 30);
    x = x+ move;}

  
  function circle2(){  
    
    stroke('blue');
    fill('blue');
    
    if(y2 > height){
      move2 = -3;
    }

     if (y2 < 0){
       move2 = 3; 
     } 
     circle(200, y2, 30);
     y2 = y2 + move2;
       }
  
  circle1();
  circle2();

  
  
  
  
}