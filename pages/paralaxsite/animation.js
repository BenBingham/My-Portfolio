const pbtn = document.querySelector('.animate');
pbtn.addEventListener('click', (e) => {
    pbtn.classList.add('animate__animated', 'animate__backOutLeft');
    //window.location = "http://127.0.0.1:5502/public/index.html";
});

pbtn.addEventListener('animationend', () => {
    window.location = "index.html";
    
});





