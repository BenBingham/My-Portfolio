
var screentl = gsap.timeline();
screentl.pause();
screentl.to('#overlay, #click', {ease: "linear", duration: .5, opacity: 0})


// Screen Saver //



// first webpage //

var tl = gsap.timeline();

document.getElementById("overlay").onclick = function () {
    tl.play();
    tlvs.play();
    screentl.play();
  };
tl.pause();
tl.from("#circle", {ease: "ease-out", duration: .7, width: 0, height: 0})
.from("#text4", {ease: "ease-out", duration: .2, width: 0, height: 0})
.from("#text3", {ease: "ease-out", duration: .5, width: 0, height: 0})
.from("#text2", {ease: "ease-out", duration: .5, width: 0, height: 0})
.from("#text1", {ease: "ease-out", duration: .7, width: 0, height: 0});
    


//  vscode page //

let tlvs =  gsap.timeline();
tlvs.pause();
tlvs.from("#line1", {ease: "linear", duration: .5, opacity: 0, delay: .5})
.from("#line2", {ease: "linear", duration: .1, width: 0, height: 0})
.from("#line3", {ease: "linear", duration: .1, width: 0, height: 0})
.from("#line4", {ease: "linear", duration: .1, width: 0, height: 0})
.from("#line5", {ease: "linear", duration: .2, width: 0, height: 0})
.from("#line6", {ease: "linear", duration: .2, width: 0, height: 0})
.from("#line7", {ease: "linear", duration: .3, width: 0, height: 0})
.from("#line8", {ease: "linear", duration: .3, width: 0, height: 0})
.from("#line9", {ease: "linear", duration: .4, width: 0, height: 0})
.from("#line10", {ease: "linear", duration: .5, width: 0, height: 0})
.from("#line11", {ease: "linear", duration: .5, width: 0, height: 0})
.from("#line12", {ease: "linear", duration: .5, width: 0, height: 0})
.from("#line13", {ease: "linear", duration: .5, width: 0, height: 0})
.from("#line14", {ease: "linear", duration: .5, width: 0, height: 0});


// console //

tl.from('#console', { ease: "linear", duration: 0.5, scale: 0, y:300, x:320, delay: 1})
.to('#console-write', {  duration: .7, opacity:0, delay: .5, repeat: 5, yoyo: true, });



 


/////////////////////// Paralax effect \\\\\\\\\\\\\\\\\\\\\

let imageParra = document.querySelector('.img');

window.addEventListener( 'scroll', function() {
  let value = window.scrollY;

  imageParra.style.bottom = value * .07 + '%';
})


const sections = document.querySelectorAll('section');
const dissapear = document.querySelector('.scroll');
const fade = document.querySelectorAll('.slide-in');
const slide = document.querySelectorAll('#works');

let options = {
  rootMargin: "-150px",
  threshold: 0.25
}

let observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
    // console.log(entry.target)
    entry.target.classList.toggle('onscroll')
    observer.unobserve(entry.target)
  })
}, options);

observer.observe(dissapear);

// sections.forEach(section => {
//   observer.observe(section);
// })



let fadeinObserver = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
    // console.log(entry.target)
    entry.target.classList.add('fadein')
    fadeinObserver.unobserve(entry.target)
  })
}, options);


fade.forEach(fadein => {
  fadeinObserver.observe(fadein);;
})


// works observer //

let slideinObserver = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
    // console.log(entry.target)
    entry.target.classList.add('works-slide')
    slideinObserver.unobserve(entry.target)
  })
}, options);


slide.forEach(slidein => {
  slideinObserver.observe(slidein);;
})




// DropDown Menu //


document.addEventListener("click", e => {
  const isDropdownbutton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownbutton && e.target.closest("[data-dropdown]") != null) 
  return;
  let currentDropdown 
  if(isDropdownbutton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }
  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if(dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  })
})



//////////// Scroll ///////////////

const scroll = new SmoothScroll('a[href*="#"]');



