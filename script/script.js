var doc = document,
    socials = doc.getElementById('socials'),
    popUp,
    close = doc.getElementById('close');

//function that open links with soc. networks (id = popup)
function show() {
    popUp = doc.getElementById('popup');
    popUp.style.display = 'flex';
    console.log(popUp);
    console.log(popUp.style);
}

//function that close block with soc. networks (same id)
function closePopUp() {
    popUp.style.display = 'none';
}

socials.onclick = show;
close.onclick = closePopUp;

