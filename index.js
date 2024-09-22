const images = document.querySelectorAll('.foto-bergerak');
let index = 0;
next();
function next() 
{
    images[index].style.display = 'none';
    index = (index + 1) % 3;
    images[index].style.display = 'block';
    setTimeout(next, 3000);
}
images[index].style.display = 'block';