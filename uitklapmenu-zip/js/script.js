var doors = [false,false,false];
doors[getRandomInt(0,2)] = true;


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max+1 - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function pickDoor(doorNo){
	if(doors[doorNo]){
		alert('gewonnen');
	}
	else{
		
	}
}