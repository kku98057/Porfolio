let navIntro = document.getElementById('.skill');
let navIntroOffset = navIntro.offsetTop;
console.log(navIntroOffset);
win =()=>{
    window.scrollTo(navIntro);}

winHandle =()=>{
    navIntro.addEventListener('click',win);
}
winHandle()