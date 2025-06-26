const swiper = new Swiper('.swiper1', {

    direction: 'horizontal',// coloca o scroll na linha do horizonte
    loop: false,// tira o loop
    slidesPerView: 1,// coloca 3 slides visivel por bola
    spaceBetween: 40,// coloca 20 pixels de espaço entre os slides
    allowTouchMove: true,
    allowSlideNext: true,
   
    pagination: {// contadores de paginas
        el: '.swiper-pagination',
        clickable: true,
    },

   
    navigation: {// as setas da esquerda e direita
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },    

    centeredSlides: true,// centralliza os slides 
    centeredSlidesBounds: true,// centraliza os slides sem espaços antes ou depois
    
 
    
    
   
    
    breakpoints: {
        1000: {
            slidesPerView:3,
            spaceBetween: 20
        },
    },

    // effec: 'cards',
    
    // cardsEffec: {
        
    // },
});
