$(function(){
    $('.industries-slider').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        rows: 1,
        arrows: true,
        infinite: true,
        draggable: true,
        dots: false,
        prevArrow: $('.industries-left-button'),
        nextArrow: $('.industries-right-button'),
        responsive: [
            {
                breakpoint: 1225,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

});