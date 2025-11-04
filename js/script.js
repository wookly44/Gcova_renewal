/* -------------------- header -------------------- */

// header_center_nav
const head = document.querySelector('header')
const nav = document.querySelector('.mainmenu')
const navs = document.querySelectorAll('.mainmenu>li');
const mains = document.querySelectorAll('.mainmenu>li>a');
const subs = document.querySelectorAll('.submenu');
const back = document.querySelector('.sub_back');

nav.addEventListener('mouseover',function(){
        for(j=0; j<5; j++){
            subs[j].style.height = '300px';
        };
        head.style.borderBottom = '1px solid #e7e7e7';
        back.style.height = '300px';
    })
nav.addEventListener('mouseleave',function(){
        for(j=0; j<5; j++){
            subs[j].style.height = '0';
        };
        head.style.borderBottom = 'none';
        back.style.height = '0';
})

function navigation(){
    let widthSize = window.innerWidth
    if(widthSize < 890){
        nav.style.display = "none"
    }
}
navigation()


// header_right_ham
const ham = document.querySelector('.ham');
const hamTop = document.querySelector('.ham>span:nth-child(1)')
const hamCenter = document.querySelector('.ham>span:nth-child(2)');
const hamBottom = document.querySelector('.ham>span:nth-child(3)');
const navon = document.querySelector('.nav_on')

ham.addEventListener('click',function(){
    ham.classList.toggle('on');
    if(ham.classList.contains('on')){
        hamCenter.style.display = 'none';
        hamTop.style.transform = 'rotate(45deg)';
        hamTop.style.marginTop = '13px';
        hamBottom.style.transform = 'rotate(-45deg)';
        hamBottom.style.marginTop = '-2px';
        navon.style.display='flex';
    }else{
        hamCenter.style.display = 'block';
        hamTop.style.transform = 'rotate(0)';
        hamTop.style.marginTop = '5px';
        hamBottom.style.transform = 'rotate(0)';
        hamBottom.style.marginTop = '8px';
        navon.style.display='none';
    }
})

/* -------------------- main -------------------- */
// section_1_slide
var swiper1 = new Swiper(".sec1 .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".sec1 .swiper-button-next",
        prevEl: ".sec1 .swiper-button-prev",
    },
});

function slides(){
    let sizeWidth = window.innerWidth
    if(sizeWidth >= 839){
        var swiper2 = new Swiper(".sec5 .mySwiper", {
            slidesPerView: 2.7,
            spaceBetween: 5,
            loop: true,
            freeMode: true,
            navigation: {
                nextEl: ".sec5 .swiper-button-next",
                prevEl: ".sec5 .swiper-button-prev",
            },
        });
    }else{
        var swiper2 = new Swiper(".sec5 .mySwiper", {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
            loop: true,
            freeMode: true,
            navigation: {
                nextEl: ".sec5 .swiper-button-next",
                prevEl: ".sec5 .swiper-button-prev",
            },
        });
    }
}
slides()

// topBtn
let topBtn = document.querySelector('.topBtn')

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
