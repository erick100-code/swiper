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
    
    mousewheel: {
        invert: true,
    },

    effect:'cube',
    keyboard: true,
    grabCursor: true,
});

const effectb = document.getElementById('effectb')
const swiperss = document.querySelectorAll('.carmud')
const veteffect = ['fade', 'coverflow', 'flip', 'creative', 'cards', 'slide']

effectb.addEventListener('mousedown', () => {
    effectb.classList.add('muda')
})

effectb.addEventListener('mouseup', () => {
    effectb.classList.remove('muda')
})

effectb.addEventListener('mouseleave', () => {
    effectb.classList.remove('muda')
})

let norepet = -1

effectb.addEventListener('click', () => {
    let ale 
    do {
        
        ale = Math.floor(Math.random() * veteffect.length)
    } while (ale === norepet);
    norepet = ale

    calc(veteffect[ale])

    effectb.classList.add('muda')
    setTimeout(() => {
        effectb.classList.remove('muda')
    }, 500);
})

let swiper5
let swiper6
let swiper7
let swiper8
let swiper9

function calc(param) {
    swiperss.forEach(swip => {
        swip.style.display = 'none'
    })

    switch(param) {
        case 'flip':
            swiperss[3].style.display = 'block' 
            if (!swiper5) {
                swiper5 = new Swiper('.mySwiperFlip', {// para adicionar efeitos o swiper precisa estar visivel ou seja display none\
                        
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    pagination: {
                        el:'.swiper-pagination'
                    },

                    effect:'flip',
                    slidesPerView: 3,
                })
            }
            break
        case 'slide': 
            swiperss[0].style.display = 'block'

            break
        case 'coverflow':
            swiperss[1].style.display = 'block'
            if (!swiper6) {
                swiper6 = new Swiper('.mySwiperCoverflow', {
                    effect: 'coverflow',
                    spaceBetween: 40,
                    coverflowEffect: {
                        rotate: 40,
                    }
                })
            }
            break
        case 'fade': 
            swiperss[2].style.display = 'block'
            if (!swiper7) {
                swiper7 = new Swiper('.mySwiperFade', {
                    pagination:{
                        el:'.swiper-pagination',
                    },

                    navigation: {
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev',
                    },
                    
                    effect:'fade',
                })
            }
            
            break
        case 'creative':
            swiperss[4].style.display = 'block'
            if (!swiper9) {
                swiper9 = new Swiper('.mySwiperCreative', {
                    effect: 'creative',
                    creativeEffect: {
                        prev: {
                            shadow: true,
                            translate:['-125%', 0, -800],
                            rotate:[0, 0, -90],
                        },

                        next: {
                            shadow: true,
                            translate:['125%', 0, -800],
                            rotate: [0, 0, 90],
                        },
                    }
                })
            }
            break
        case 'cards':
            swiperss[5].style.display = 'block'
            if (!swiper8) {
                swiper8 = new Swiper('.mySwiperCards', {
                    navigation: {
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev',
                    },
                
                    effect:'cards',
                    touchRatio: 3.5,
                })
            }
            break
        default:
            window.alert('[ERROR]')
    }

}

const swiper4 = new Swiper('.mySwiperSlide', {    
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        dynamicBullets: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    mousewheel: {
        invert: true,
    },

    grabCursor: true,
    resistanceRatio: 0,
    keyPress: true,
    spaceBetween: 30,
})

 const swiper11 = new Swiper('.mySwiperFilho', {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    grabCursor: true,
    
    watchSlidesProgress:true,
 })

 const swiper10 = new Swiper('.mySwiperPai', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    thumbs: {
        swiper: swiper11,
    },

    resistanceRatio: 0,

    spaceBetween: 10,
})

const swiper12 = new Swiper('.mySwiperMine', {
    autoplay:{
        delay:1,
    },
    resistanceRatio:0,
    freeMode: true,
    direction: 'vertical',
    speed: 55000,
    mousewheel: true,
})

const swiper13 = new Swiper('.mySwipersf', {
    scrollbar: {
        el: '.swiper-scrollbar',
    },
 
    slidesPerView: 'auto',
    direction: 'vertical',
    freeMode: true,
    mousewheel: true,
})

const swiperfinal = new Swiper('.mySwiperF', {
    parallax: true,
    speed: 600,
})