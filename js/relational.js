var productList = [
    {image : "../img/viewProduct/pro1.jpg", name:"Milk Capuchino"},
    {image : "../img/viewProduct/pro2.jpg", name:"MatCha Coffee"},
    {image : "../img/viewProduct/pro3.jpg", name:"Apple Capuchino"},
    {image : "../img/viewProduct/pro4.jpg", name:"Coffee Capuchino"},
    {image : "../img/viewProduct/pro5.jpg", name:"Black Coffee"},
    {image : "../img/viewProduct/pro6.jpg", name:"Chocolate Capuchino"},
    {image : "../img/viewProduct/pro7.jpg", name:"Siver Coffee"},
    {image : "../img/viewProduct/pro8.jpg", name:"Chocolate MatCha"},
    {image : "../img/viewProduct/pro9.jpg", name:"Pink tea"},
]

function show(ev){
    var srcImg = ev.target.getAttribute("value");
    var imgProduct = document.getElementById("imgProduct");
    var imgElement = document.createElement("img");
    imgElement.src = srcImg;
    imgProduct.removeChild(imgProduct.childNodes[0]);
    imgProduct.appendChild(imgElement);
    imgProduct.style.display = "flex";
    flagNav = true;
}

function addProduct(){
    var productWrapper = document.getElementById("wrapperProduct");

    for(var i = 0; i < productList.length; i++){
        var item = document.createElement("div");
        var view = document.createElement("div");
        var img = document.createElement("img");
        var wrappButton = document.createElement("div");
        var button1 = document.createElement("a");
        var button2 = document.createElement("a");
        var infomation = document.createElement("div");
        var h1 = document.createElement("h1");

        item.classList.add("item");
        view.classList.add("view");
        img.src=productList[i].image;
        wrappButton.classList.add("wrappButton");
        button1.setAttribute("value", productList[i].image);
        button1.innerHTML = '<i class="fas fa-search"></i>';
        button2.innerHTML = '<i class="fas fa-link"></i>';

        button1.addEventListener("click", show);
        button2.href = "portfolio.html";

        infomation.classList.add("infomation");
        h1.innerHTML = productList[i].name;


        item.appendChild(view);
        view.appendChild(img);
        view.appendChild(wrappButton);
        wrappButton.appendChild(button1);
        wrappButton.appendChild(button2);

        item.appendChild(infomation);
        infomation.appendChild(h1);

        productWrapper.appendChild(item);
    }
}