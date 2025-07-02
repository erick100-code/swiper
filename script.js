const swiper = new Swiper('.mySwiper1', {

    pagination: {
        el: ".swiper-pagination", 
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',  
    },

    autoplay: {
        delay: 500,
    },

    rewind: true,
    autoHeight: true,
    grabCursor: true,
    speed: 1000,
    keyboard: true,
    mousewheel: {
        invert: true,
    }
});

const swiper2 = new Swiper('.mySwiper2', {
    pagination: {
        el:'.swiper-pagination',
        type: 'fraction'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    virtual: {
        slides: (function () {
            let slides = []

            for(let sld = 1; sld <= 600; sld++) {
                slides.push(`slide ${sld}`)
            }

            return slides
        })(),
    },
})

let prepend = 0
let append = 601

document.querySelector('.prepend2').addEventListener('click', (e) => {
    e.preventDefault()

    swiper2.virtual.prependSlide([
        `<div>slide ${prepend--}</div>`,
        `<div>slide ${prepend--}</div>`,
    ])
})

document.querySelector('.slide-1').addEventListener('click', (event) => {
    event.preventDefault()

    swiper2.slideTo(0, 0)
})

document.querySelector('.slide-250').addEventListener('click', (event) => {
    event.preventDefault()

    swiper2.slideTo(249, 0)
})

document.querySelector('.slide-600').addEventListener('click', (eve) => {
    eve.preventDefault()

    swiper2.slideTo(599, 0)
})

document.querySelector('.append-slide').addEventListener('click', (event) => {
    event.preventDefault()
    swiper2.virtual.appendSlide([
        `<div>slide ${append++}</div>`
    ])
})

const swiper3 = new Swiper('.mySwiper3', {
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect:'cube',
    keyboard: true,

    mousewheel: {
        invert: true,
    },
})

const swiper3// definir o terceiro coursel como efeito dinamica ao clicar muda o efffect para aleatoria mudando o slide ou algo que funcione