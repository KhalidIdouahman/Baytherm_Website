
//  toggling menu

var navLinks = document.getElementById("navLinks");

// function showMenu() {
//     navLinks.style.right = "0px";
// }

// function hideMenu() {
//     navLinks.style.right = "-200px";
// }

// just for test and now it works perfectly

let menuBtn = document.querySelector(".fa-bars");

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navLinks.classList.toggle('active');
}

// it worked but keep it just for later

// window.addEventListener('scroll', function() {
//     var header = document.getElementById('main-header');
//     if (window.scrollY > 50) { // 50px is the threshold, change as needed
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });

