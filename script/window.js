//Make a slider, when screen less then 401px

var width = document.documentElement.clientWidth,
    box = document.getElementById('box');
console.log(width);


if (width < 401) {
    box.classList.add('mySlider');
}