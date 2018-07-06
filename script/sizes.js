//Choose a color

var doc = document,
    sizes = doc.getElementById('sizes'),
    color = doc.getElementById('color');

function htmlCollection(element, parent) {
    for (let i = 0; i < element.children.length; i++) {
        element.children[i].classList.remove('active');
    }
}

function changeSize(event) {
    let tar = event.target;
    htmlCollection(sizes);

    if (tar !== sizes) {
        tar.classList.add('active');
    }
}

function changeColor(event) {
    let tar = event.target;
    htmlCollection(color);

    if (tar !== color) {
        tar.classList.add('active');
    }
}

sizes.onclick = changeSize;
color.onclick = changeColor;

