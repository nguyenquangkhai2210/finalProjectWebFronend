var flagNav = false;

function openMenuToggle(){
    var navbar = document.getElementsByClassName("navbarWrapper");
    var imgProduct = document.getElementById("imgProduct");
    var disappear = document.getElementsByClassName("big-contain");

    if(flagNav == false){
        navbar[0].style.display = "block";
        flagNav = true;
    } else{
        navbar[0].style.display = "none";
        try{
            imgProduct.style.display = "none";
        } catch (e){}

        try{
            disappear[0].style.display="none";
        } catch (e){}

        flagNav = false;
    }
}

window.onkeyup=function pressclose(){
	if(window.event.keyCode==27){
        var navbar = document.getElementsByClassName("navbarWrapper");
        var imgProduct = document.getElementById("imgProduct");
        var disappear = document.getElementsByClassName("big-contain");
        
		navbar[0].style.display = "none";
        try{
            imgProduct.style.display = "none";
        } catch (e){}

        try{
            disappear[0].style.display="none";
        } catch (e){}

        flagNav = false;
	}
}