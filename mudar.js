function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circulo =document.querySelector('.circulo');
    circulo.style.background = color;
}

function toggleMenu() {
    var menuToogle = document.querySelector('.toggle');
    var links = document.querySelector(',links');
    menuToogle.classList.toggle('active')
    links.classList.toggle('active')
}