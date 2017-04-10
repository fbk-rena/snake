//alert("Hola")

var x = 0;
var y = 0;
var moveOn = 50;

var gameboard = document.getElementById("board");
var snakeHead = document.getElementById("snake");
var restart = document.getElementById("restart");

function freeze(){
	document.removeEventListener("keydown",move);
}

function lose(){
	alert("X-X Game Over");
	freeze();
}

function move(event){

  switch (event.keyCode) {

  	 case 37: //left
        x = x - moveOn;

        if (x < 0){
          lose();
          freeze();
        } else {snakeHead.style.marginLeft= x.toString()+"px";}
      break;

     case 38: //up
      y = y - moveOn;
        if (y < 0){
            lose();
            freeze();
          } else {snakeHead.style.marginTop= y.toString()+"px";}
      break;

    case 39: //rigth
      x = x + moveOn;
      if (x > 500){
        lose();
        freeze();
    	} else {snakeHead.style.marginLeft= x.toString()+"px";}
      break;
    case 40: //down
      y = y + moveOn;
        if (y > 500){
          lose();
          freeze();
        } else {snakeHead.style.marginTop=y .toString()+"px";}
      break;
    
    default:
      alert("Usa las teclas de desplasamiento");
    break;
  }
}

function playAgain() {
  	x = 0;
  	y = 0;
  	snakeHead.style.marginTop = y;
  	snakeHead.style.marginLeft = x;
  	document.addEventListener("keydown",move);
}

restart.addEventListener("click",playAgain);
document.addEventListener("keydown",move);