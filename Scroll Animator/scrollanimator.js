function reveal(classNames, elementVisible) {
    var elements = document.querySelectorAll(classNames.join(','));

    for (var i = 0; i < elements.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = elements[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            elements[i].classList.add("active");
        } else {
            elements[i].classList.remove("active");
        }
    }
}
// Add event listener to trigger reveal function on scroll
window.addEventListener("scroll", function () {
    reveal([".sa", ".sa-zoom", ".sa-flip", ".sa-right"], 250);
});



