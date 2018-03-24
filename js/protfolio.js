// Slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  n %= 4;
  for (i = 0; i < x.length; i++) {
     	x[i].style.display = "none";  
  }
  x[n].style.display = "block";  
}

function Open(z){
	var appear=document.getElementsByClassName("big-contain");
	showDivs(z);
	appear[0].style.display="block";
	flagNav = true;
}