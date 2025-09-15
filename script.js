
    // Question Two: Toggle the className of an Element
function toggleClass(element, className) {
    element.classList.toggle(className);
}


    // Question Three: Toggle the className of Multiple Elements
function toggleClass(element, className) {
    element.classList.toggle(className);
}

function toggleAll() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => toggleClass(box, 'active'));
}