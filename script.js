
function toggleClass(element, className) {
    element.classList.toggle(className);
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}

function toggleAll() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => toggleClass(box, 'active'));
}