/* filter */





const style  = document.getElementById("SideBar__block9");
const stylecontent = document.getElementById("SideBar__content9");


const arrowUPstyle = document.getElementById("arrowUp9");
const arrowDownstyle = document.getElementById("arrowDown9");


style.onclick = function (){

	if (stylecontent.style.display=="") {
		stylecontent.style.display="block";
		arrowUPstyle.style.display="block";
		arrowDownstyle.style.display="none";
	}
	else{
		stylecontent.style.display="";
		arrowUPstyle.style.display="none";
		 arrowDownstyle.style.display="block";
	}



}



const season  = document.getElementById("SideBar__block8");
const sesoncontent = document.getElementById("SideBar__content8");


const arrowUPseason = document.getElementById("arrowUp8");
const arrowDownseason = document.getElementById("arrowDown8");


season.onclick = function (){

	if (sesoncontent.style.display=="") {
		sesoncontent.style.display="block";
		arrowUPseason.style.display="block";
		arrowDownseason.style.display="none";
	}
	else{
		sesoncontent.style.display="";
		arrowUPseason.style.display="none";
		 arrowDownseason.style.display="block";
	}



}



const material  = document.getElementById("SideBar__block7");
const materialcontent = document.getElementById("SideBar__content7");


const arrowUPmaterial = document.getElementById("arrowUp7");
const arrowDownmaterial = document.getElementById("arrowDown7");


material.onclick = function (){

	if (materialcontent.style.display=="") {
		materialcontent.style.display="block";
		arrowUPmaterial.style.display="block";
		arrowDownmaterial.style.display="none";
	}
	else{
		materialcontent.style.display="";
		arrowUPmaterial.style.display="none";
		 arrowDownmaterial.style.display="block";
	}



}



const color  = document.getElementById("SideBar__block6");
const colorcontent = document.getElementById("SideBar__content6");


const arrowUPcolor = document.getElementById("arrowUp6");
const arrowDowncolor = document.getElementById("arrowDown6");


color.onclick = function (){

	if (colorcontent.style.display=="") {
		colorcontent.style.display="block";
		arrowUPcolor.style.display="block";
		arrowDowncolor.style.display="none";
	}
	else{
		colorcontent.style.display="";
		arrowUPcolor.style.display="none";
		 arrowDowncolor.style.display="block";
	}



}


const size  = document.getElementById("SideBar__block5");
const sizecontent = document.getElementById("SideBar__content5");


const arrowUPsize = document.getElementById("arrowUp5");
const arrowDownsize = document.getElementById("arrowDown5");


size.onclick = function (){

	if (sizecontent.style.display=="") {
		sizecontent.style.display="block";
		arrowUPsize.style.display="block";
		 arrowDownsize.style.display="none";
	}
	else{
		sizecontent.style.display="";
		arrowUPsize.style.display="none";
		 arrowDownsize.style.display="block";
	}



}


const sex  = document.getElementById("SideBar__block4");
const sexcontent = document.getElementById("SideBar__content4");


const arrowUPSex = document.getElementById("arrowUp4");
const arrowDownSex = document.getElementById("arrowDown4");


sex.onclick = function (){

	if (sexcontent.style.display=="") {
		sexcontent.style.display="block";
		arrowUPSex.style.display="block";
		arrowDownSex.style.display="none";
	}
	else{
		sexcontent.style.display="";
		arrowUPSex.style.display="none";
		arrowDownSex.style.display="block";
	}



}




const brand  = document.getElementById("SideBar__block3");
const brandcontent = document.getElementById("SideBar__content3");


const arrowUPBrand = document.getElementById("arrowUp3");
const arrowDownBrand = document.getElementById("arrowDown3");


brand.onclick = function (){

	if (brandcontent.style.display=="") {
		brandcontent.style.display="block";
		arrowUPBrand.style.display="block";
		arrowDownBrand.style.display="none";
	}
	else{
		brandcontent.style.display="";
		arrowUPBrand.style.display="none";
		arrowDownBrand.style.display="block";
	}



}


const category = document.getElementById("SideBar__block");
const categorycontent = document.getElementById("SideBar__content");

const arrowUP = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowDown");

category.onclick = function() {

	
	if (categorycontent.style.display=="") {
		categorycontent.style.display="block";
		arrowUP.style.display="block";
		arrowDown.style.display="none";
	}
	else{
		categorycontent.style.display="";
		arrowUP.style.display="none";
		arrowDown.style.display="block";
	}
}

const sale = document.getElementById("SideBar__block2");
const salecontent = document.getElementById("SideBar__content2");

const arrowUPSale = document.getElementById("arrowUp2");
const arrowDownSale = document.getElementById("arrowDown2");



sale.onclick = function (){

	if (salecontent.style.display=="") {
		salecontent.style.display="block";
		arrowUPSale.style.display="block";
		arrowDownSale.style.display="none";
	}
	else{
		salecontent.style.display="";
		arrowUPSale.style.display="none";
		arrowDownSale.style.display="block";
	}



}





const price = document.getElementById("SideBar__block1");
const pricecontent = document.getElementById("SideBar__content1");

const arrowDownPrice = document.getElementById("arrowDown1");
const arrowUPPrice = document.getElementById("arrowUp1");


price.onclick = function() {

	
	if (pricecontent.style.display=="") {
		pricecontent.style.display="block";
		arrowUPPrice.style.display="block";
		arrowDownPrice.style.display="none";
	}
	else{
		pricecontent.style.display="";
		arrowUPPrice.style.display="none";
		arrowDownPrice.style.display="block";
	}
}













