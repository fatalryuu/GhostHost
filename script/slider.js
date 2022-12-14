const delay = 300;

let slider = document.querySelector('.slider');
slider.addEventListener('click', (event) => {
    if (!event.target.classList.contains('icon')) return;
    let id = event.target.getAttribute('data-id');
    showSlider(id);
});

function showSlider(id) {
    let current = slider.querySelector('[data-slide="' + id + '"]');

    slider.querySelectorAll('.slide').forEach((slide) => setTimeout(() => slide.classList.add('hidden'), delay));

    setTimeout(() => current.classList.remove('hidden'), delay);
}
