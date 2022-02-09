document.addEventListener("DOMContentLoaded", function () {
let d = new Date();
let mounth = d.getMonth() + 1
document.querySelector('.wrapper__footer__time').append(
    d.getDate() +
    ". " +
    mounth +
    ". " +
    d.getFullYear()
);

})