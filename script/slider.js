/* slider */

const slider = document.getElementById("slider");



const from = document.getElementById("priceFrom");
const before = document.getElementById("priceBefore");

before.innerHTML = "250";

slider.oninput = function(){

	from.innerHTML = slider.value;


}	