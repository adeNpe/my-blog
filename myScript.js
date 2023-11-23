var modeNow=1;
function modeswitch() {
	if(modeNow==1) { //浅转深
		document.getElementById("modeSwitchButton").innerHTML="<strong>Light</strong>";
		modeNow=0;	
		document.getElementById("modeSwitchButton").style.color="rgb(25,25,25)";
		document.getElementById("modeSwitchButton").style.background="rgb(200,200,200)";
		document.documentElement.style.setProperty("--background-color", "rgb(26,29,31)");
		document.documentElement.style.setProperty("--text-color", "rgb(200,200,200)");
	}
	else {
		document.getElementById("modeSwitchButton").innerHTML="<strong>Dark</strong>";
		modeNow=1;
		document.getElementById("modeSwitchButton").style.color="rgb(200,200,200)";
		document.getElementById("modeSwitchButton").style.background="rgb(25,25,25)";
		document.documentElement.style.setProperty("--background-color", "rgb(255,255,255)");
		document.documentElement.style.setProperty("--text-color", "rgb(25,25,25)");
	}
}

