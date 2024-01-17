ymaps.ready(init);

function init() {

    let myMap = new ymaps.Map("contacts__map", {
        center: [55.75737108255844, 37.6065004470633],
        zoom: 13,
        controls: []
    });





    let myPlacemark = new ymaps.Placemark([55.76965489933984, 37.639601341308556], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/placemark.png',
        iconImageSize: [12, 12],
        iconImageOffset: [-6, -6]
    })
    myMap.geoObjects.add(myPlacemark)
}



let burgerOpen = document.querySelector('.header__burger');
let menu = document.querySelector('.header__list');
let burgerClose = document.querySelector('.header__list-btn');
burgerOpen.addEventListener('click', function() {
    menu.classList.add('header__active');
});
burgerClose.addEventListener('click', function() {
    menu.classList.remove('header__active');
});

let searchBtn = document.querySelector('.header__search');
let searchInput = document.querySelector('.header__search-content');
let searchInput1 = document.querySelector('.header__search-close')

searchBtn.addEventListener('click', function() {
    searchInput.classList.toggle('header__search-active');
})