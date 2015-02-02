// GLOBAL VARIABLES
var destination_x, distance_per_frame, movetimer, timer_counter =0;

function makeCircle(){
	//make an html element not on the page yet
	var newc = document.createElement("div")
	newc.style.width="200px";
	newc.style.height="200px";
	newc.style.border="solid 2px #fff";
	newc.style.borderRadius="100px";
	newc.style.opacity="1";
	newc.style.position = "absolute";
	//its x and y coordinate on the page are its
	//CSS left and top properties
	newc.style.left = "70px";
	newc.style.top = "50px";
	//add the element to the page
	document.body.appendChild(newc);
	

}//end function makeCircle()
/**
*add a bit to the Y property ('left' in CSS)
*which causes the div to seem to move to the right
*/

function moveABit(){
	var newc = document.getElementsByTagName("div")[0];
	//add to the timer counter
	timer_counter++;
	
	//calculate the distance the DIV has to travel
	//take the mouse X and subtact the DIV's x
	var x_distance = destination_x - parseInt(newc.style.left);
	//divide that to get the little amount it should move each 'frame' -- have it move 1/3 of distance to resemeble easing or deceleration
	distance_per_frame = x_distance/3;
	//we have to use parseInt() to convert the left property from "50px"
	//to a number so we can add more to it:
	
	var new_left = parseInt(newc.style.left) + distance_per_frame;
	newc.style.left = new_left + "px";
	//console.log(distance_per_frame+"here"+newc.style.left);
	//once this function has occurred 30 times, stop the trip
	if (timer_counter >=30){
		clearInterval(movetimer);
		timer_counter = 0;
	}
}//END function moveABit

function causeTrip(e){
	e = (e || event); //so all browsers understand the event
	var newc = document.getElementsByTagName("div")[0];
	//get the coordinates of where cursor is
	destination_x = e.clientX;
	
		

	//in case the move timer's already running, stop it:
	clearInterval(movetimer);
	timer_counter = 0;
	//start a timer so the DIV moves that amount 30 times a second
	movetimer = setInterval( moveABit, 1000/30);
}


onload=init;


function init(){
	makeCircle();
	//event handler that passes along event info when there's a click
	document.onclick = function(e){ causeTrip(e); };
}