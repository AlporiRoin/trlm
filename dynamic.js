const slides = document.querySelectorAll( '.slide' );

const leftButton = document.querySelector( '.slider_arrow_left' );
const rightButton = document.querySelector( '.slider_arrow_right' );

let currentSlide = 0;

function ChangingTheSlide( newSlide ) {

    if ( newSlide === currentSlide ) {

        slides[ currentSlide ].classList.add('appearance'  );

    } else {

        currentSlide = newSlide;

        slides[ currentSlide ].classList.add( 'disappearance' );
        slides[ currentSlide ].classList.remove( 'appearance', 'disappearance' );
        slides[ newSlide ].classList.add( 'appearance' );

    }

}

leftButton.addEventListener( 'click', ( ) => {

    console.log( currentSlide );

    if ( currentSlide === 0 ) {

        ChangingTheSlide( slides.length - 1 )

    } else {

        ChangingTheSlide( currentSlide - 1 )

    }

    
});

rightButton.addEventListener( 'click', ( event ) => {
    
    if ( currentSlide === 2 ) {

        ChangingTheSlide( 0 )

    } else {

        ChangingTheSlide( currentSlide - 1 )

    }
    
});