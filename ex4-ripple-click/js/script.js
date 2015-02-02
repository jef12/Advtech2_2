
function makeCircle(e){
	e = (e || event);//for older browsers
	//console.log(e);
	//make an html element not on the page yet
	var newc = document.createElement("div")
	newc.style.width="20px";
	newc.style.height="20px";
	newc.style.border="solid 2px #66c";
	newc.style.borderRadius="100px";
	newc.style.opacity="1";
	newc.style.position = "absolute";
	newc.style.transition="height .2s ease-out, width .2s ease-out, opacity .4s ease-out";
	newc.style.webkitTransition="height .2s ease-out, width .2s ease-out, opacity .4s ease-out";
	//its x and y coordinate on the page are its
	//CSS left and top properties
	newc.style.left = e.clientX + "px";
	newc.style.top = e.clientY + "px";
	//add the element to the page
	document.body.appendChild(newc);
	//now that the circle has been created, a split second later
	//change some CSS, and the transition will cause an animation
	//setTimeout( whattodoafteratime, time)
	setTimeout( function() {
		newc.style.width="150px";
		newc.style.height="150px";
		newc.style.opacity=".2";
	}, 0);
	
}	

	document.onmousemove=
	function(e){
		makeCircle(e);
	}