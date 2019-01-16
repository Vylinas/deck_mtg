//////////////////////////////////////////////
// SLIDER
//////////////////////////////////////////////

let arraySlide = {
    1 : "slide_1",
    2 : "slide_2",
    3 : "slide_3",
    4 : "slide_4"
};

function slideToNext() {
    let activeClass = $(".active");
    activeClass.removeClass("active");
    let actualSlideClass = activeClass.attr("class").split(" ");
    Object.keys(arraySlide).forEach(function (key){
        if(arraySlide[key] === actualSlideClass[1]) {
            key = parseInt(key)+1;
            if(key > 4) {
                key = 1;
            }
            $(".slide_"+[key]).addClass("active");
        }
    });
};

function slideToPrevious() {
    let activeClass = $(".active");
    activeClass.removeClass("active");
    let actualSlideClass = activeClass.attr("class").split(" ");
    Object.keys(arraySlide).forEach(function (key){
        if(arraySlide[key] === actualSlideClass[1]) {
            key = parseInt(key)-1;
            if(key < 1) {
                key = 4;
            }
            $(".slide_"+[key]).addClass("active");
        }
    });
};

$(".next").click(() => slideToNext());

$(".previous").click(() => slideToPrevious());