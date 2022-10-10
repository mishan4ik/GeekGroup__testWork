/* logo menu  header */

const logo = document.getElementById("logo");
const search = document.querySelector(".header__search");
const user = document.querySelector(".header__user");
const userBlock = document.querySelector(".header__block");


logo.onclick = function (){

	const mediaQuery = window.matchMedia('(max-width: 1000px)')
// Check if the media query is true
if (mediaQuery.matches && search.style.display == "" && user.style.display == "") {
	search.style.display = "block";
	user.style.display = "block";

  // Then trigger an alert

}  else{
	search.style.display = "";
	user.style.display = "";
}

}

/* burger menu  upmenu */

const burger = document.getElementById("burger");
const menu = document.querySelector(".UpMenu__menu");


burger.onclick = function (){

	const mediaQuery1 = window.matchMedia('(max-width: 1000px)')
// Check if the media query is true
if (mediaQuery1.matches && menu.style.display == "") {
	menu.style.display = "block";
	

  // Then trigger an alert

}  else{
	menu.style.display = "";
}

}

