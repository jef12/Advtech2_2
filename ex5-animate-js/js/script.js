
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
	//setInterval(whattodoafteratime, time); causes an action/function to happen repeatedly. If 30fps is frame rate:
	setInterval( function(){ moveABit() }, 1000/30);

}//end function makeCircle()
/**
*add a bit to the Y property ('left' in CSS)
*which causes the div to seem to move to the right
*/

function moveABit(){
	var newc = document.getElementsByTagName("div")[0];
	//we have to use parseInt() to convert the left property from "50px"
	//to a number so we can add more to it:
	var new_left = parseInt(newc.style.left) + 10;
	newc.style.left = new_left + "px";
}

onload=init;


function init(){
	makeCircle();
}