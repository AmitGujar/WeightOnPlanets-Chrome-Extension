'use strict';
console.log("Inside main.js");

function weightConverter() {
	let valNum = document.getElementById("inputkilograms").value;

	document.getElementById("outputMercury").innerHTML = (valNum / 9.81) * 3.7;
	document.getElementById("outputVenus").innerHTML = (valNum / 9.81) * 8.87;
	document.getElementById("outputMars").innerHTML = (valNum / 9.81) * 3.711;
	document.getElementById("outputJupiter").innerHTML = (valNum / 9.81) * 24.79;
	document.getElementById("outputSaturn").innerHTML = (valNum / 9.81) * 10.44;
	document.getElementById("outputUrenus").innerHTML = (valNum / 9.81) * 8.69;
	document.getElementById("outputNeptune").innerHTML = (valNum / 9.81) * 11.15
	document.getElementById("outputMoon").innerHTML = (valNum / 9.81) * 1.622;
}
/**
 * Adding a timeout of 0 ms. Essentially means this will run
 * on the next event loop after the page loads.
 * If timeout is removed, the actionButton element returns null.
 */
setTimeout(() => {
	document.getElementById("actionButton").addEventListener("click", this.weightConverter);
	console.dir(document.getElementById("actionButton"));
}, 0); 



