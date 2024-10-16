const navslide =() =>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.def');
    const cont=document.querySelector('.select-box');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('bar-active');
        cont.classList.toString('selected2');
    });
}

navslide();

var swiper;

function initSwiper() {
    if (window.innerWidth < 768) {
        swiper = new Swiper(".slide-contenair", {
            slidesPerView: 1,
            spaceBetween: 30,
            freeMode: true,
            centerslide: true,
            fade: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } 
    else{
        if (window.innerWidth < 1000){
        swiper = new Swiper(".slide-contenair", {
            slidesPerView: 2,
            spaceBetween: 30,
            freeMode: true,
            centeredSlides: true,
            fade: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
    else{
        swiper = new Swiper(".slide-contenair", {
            slidesPerView: 3, 
            spaceBetween: 30,
            freeMode: true,
            centeredSlides: true,
            fade: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
    }
}
initSwiper();
window.addEventListener('resize', function() {
    swiper.destroy();
    initSwiper();
});