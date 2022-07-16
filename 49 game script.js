var block=document.getElementById("block");
var hole=document.getElementById("hole");
var character=document.getElementById("character");
var jumping=0;
var counter=0;

hole.addEventListener('animationiteration', () => {
	var random= -((Math.random()*300)+250);
	hole.style.top=random + "px";
	counter++;
});

setInterval(function () {
	var characterTop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	if(jumping==0)
	{
		character.style.top= (characterTop + 3) + "px";
	}
	var blockleft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	var holeTop= parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
	var cTop = -(500-characterTop);
	if ((characterTop>470) || ((blockleft<30) && (blockleft>-50) && ((cTop<holeTop) || (cTop>holeTop+250))))
	{
		alert("Game over! Score: "+(counter-1));
		character.style.top=100 + "px";
	}
}, 20);

function jump() 
{
	jumping=1;
	let jumpcount=0;
	var jumpInterval = setInterval(function () {
		var characterTop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
		if((characterTop>6) && (jumpcount<35))
		{
			character.style.top= (characterTop - 5) + "px";
		}
		if(jumpcount>40)
		{
			clearInterval(jumpInterval);
			jumping=0;
			jumpcount=0;
		}
		jumpcount++;
	}, 20);
}

function calljump(ev) {
	if (ev.keyCode==32) {	
		jump();
	}
}




