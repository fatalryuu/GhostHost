// const delay = 300;

// let slider = document.querySelector('.slider');
// slider.addEventListener('click', (event) => {
//     if (!event.target.classList.contains('icon')) return;
//     let id = event.target.getAttribute('data-id');
//     showSlider(id);
// });

// function showSlider(id) {
//     let current = slider.querySelector('[data-slide="' + id + '"]');

//     slider.querySelectorAll('.slide').forEach((slide) => setTimeout(() => slide.classList.add('hidden'), delay));

//     setTimeout(() => current.classList.remove('hidden'), delay);
// }
const delay = 500;
const current_slide = 1;
const animation_del = 3000;

let slider = document.querySelector('.slider'); //получение объекта слайдера
slider.addEventListener('click', (event) => { //событие клика на элемент
    if (!event.target.classList.contains('icon')) return; //определение клика по иконке
    
    let id = event.target.getAttribute('data-id'); // если клик по иконке, забираем атрибут
    showSliderId(id);
});

initSlider();


function showSliderId(id) {
    let current = slider.querySelector('[data-slide="'+ id + '"]'); //находим текущий слайд
    
    //скрываем другие слайды
    slider.querySelectorAll(".slide").forEach((slide) => { //массив из всех слайдов
        slide.style.opacity = 0; //скрываем
        setTimeout(() => { //скрываем визуально, не из дерева
            slide.classList.add('hidden');
        }, delay);
    });
    
    setTimeout(() => { //показываем текущий слайд
        current.classList.remove('hidden');
        current.style.opacity = 1; //показываем слайд
    }, delay)
}
