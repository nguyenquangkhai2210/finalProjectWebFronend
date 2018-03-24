function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
        var warningName = document.getElementsByClassName("inputName");
        warningName[0].children[1].style.display = "block";
        var warningEmail = document.getElementsByClassName("inputEmail");
        warningEmail[0].children[1].style.display = "block";
        return false;
    }
}

function closewarning() {
    var warningName = document.getElementsByClassName("inputName");
    warningName[0].children[1].style.display = "none";
    var warningEmail = document.getElementsByClassName("inputEmail");
    warningEmail[0].children[1].style.display = "none";
}

function initMap() {
    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
