
let voidFun = (e) => e.preventDefault();

document.querySelector('form').submit = voidFun;
document.querySelector('.login > a').onclick = voidFun;
document.querySelector('form  button').onclick = voidFun;