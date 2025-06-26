const swiper = new Swiper('.swiper', {
    
    pagination: {// contadores de paginas
        el: '.swiper-pagination',// elemento que conta a paginação
        clickable: true,// permiti clicar nas bolinhas
        type: 'fraction',// tipo de paginação
    },


    navigation: {// setas de navegação
        nextEl: '.swiper-button-next',// seta da direita
        prevEl: '.swiper-button-prev',// seta esquerda
    },

    scrollbar: {// barra lateral
        el: 'swiper-scrollbar',// elemento da abarra no html
        draggable: true,
    },

    direction: 'horizontal',// direção do deslizamento
    
    loop: false,// loop
    
    slidesPerView: 2,// slides visiveis por paginas
    
    spaceBetween: 30,// espaço entre cada slide
    
    centeredSlides: false,// centraliza o slide
    
    centeredSlidesBounds: false,// centraliza sem adicionar espaços no inicio ou fim
    
    grabCursor: true,// cursor de mão pegar
    
    speed: 5000,// tempo de duração da transição de slides
    
    threshold: 0,// se a distancia do toque deslizar for menor que esse valor o deslizador não se movera
    
    touchEventsTarget: 'wrapper',// onde vai acontecer os eventos de toque?(deslizamento) A: wrapper B: container
    
    touchRatio: 1,// proporção do toque
    
    slidesPerGroup: 2, //defini quantos slides rolar por vez
    
    
    // breakpoints: { media query
    //     1000: {
        //         slidesPerView: 6,
        //     }
        // }
        
        
    // watchSlidesProgress: true,// quando habilitado calcula o progresso de slides visto

    //slideToClickedSlide: true, // se true ao clicar em qualquer slide, ira transitar para ele

    // simulateTouch: false, permiti o arrast e o click com o mouse se true
    
    // shortSwipes: false, desabilita movimentos curtos
    
    // roundLengths : true, arrendonda valores de altura e largura dos slides (boa pratica)
    
    // rewind: true, quando tenta avançar nas estremidades vai para extremidade oposta
    
    // resistanceRatio: .20, é a resistencia quando não tem mais slide
    
    //oneWayMovement: true,  desliza os slides apenas para frente independente da direção do deslizamento
    
    //  mousewheel: {// permiti a navegação com a roda do mouse
    //      invert: true,
    //  },
    
     //loop: true,

     //loopPreventsSliding: true, o botão next e prev não farão nada se o carrosel estiver em loop, (ou seja se movendo em loop)
   
    //  keyboard: {// pemiti navegar pelo carrosel com o teclado
    //      enabled: true,
    //      onlyInViewport: false,
    //  }

    //  grid: { numeros de colunas do slide
    //      rows: 2,
    //  }
});

