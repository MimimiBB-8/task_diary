let date = new Date(); /*create  instances of the object*/
let mounth = date.getMonth() + 1; /*get current mounth */
document.querySelector(".wrapper__footer__time").append(date.getDate() + "/ " + mounth + "/ " + date.getFullYear());
/* get element insert current date */
