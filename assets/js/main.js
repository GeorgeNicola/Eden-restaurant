/* Parallax Effect */
$('.parallax-window').parallax({imageSrc: './assets/img/home-banner.jpg'});

/* AOS - Animation */
AOS.init();



document.addEventListener("scroll", function(){
    let scroll = scrollY;

    if(scroll > 300)
        document.querySelector(".navbar").classList.remove("nav-default");

    if(scroll < 300 )
        document.querySelector(".navbar").classList.add("nav-default");   
})





const menu = ["./assets/img/menu/cafe.jpg", 
            "./assets/img/menu/restaurant.jpg", 
            "./assets/img/menu/terasa.jpg", ]

const menuBtn = document.querySelectorAll(".menu-btn");          


for(let i = 0; i<menuBtn.length; i++)
    menuBtn[i].addEventListener("click", function(){
        document.querySelector("#menu-img").src = menu[i];
    })

