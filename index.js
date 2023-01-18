$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });





    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

    // typing animation
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Programmer", "Coder", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Web Designer", "Student", "Coder", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 100,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});















function fiverr(){
    window.open("https://bit.ly/3G6bLix")
}

function chatbox(){
    window.open("https://aryancoder007.github.io/ChatBox/")
}
function mitra(){
    window.open("https://aryancoder007.github.io/Mitra/")
}
function realfilter(){
    window.open("https://aryancoder007.github.io/Project-116/")
}
function hand(){
    window.open("https://aryancoder007.github.io/Project-Hand_Gesture/")
}
function animal(){
    window.open("https://aryancoder007.github.io/Project_AnimalSound/")
}
function github(){
    window.open("https://github.com/AryanCoder007")
}
function website(){
    window.open("https://aryancoder007.github.io/e-commerce-website/")
}
function writing(){
    window.location = "works.html";
}