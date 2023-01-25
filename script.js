
let voidFun = (e) => e.preventDefault();

document.querySelector('form').submit = voidFun;
document.querySelector('.login > a').onclick = voidFun;
document.querySelector('form  button').onclick = voidFun;

let pass = document.querySelector('#pass');
let confirmPass = document.querySelector('#confirmPass');


function input(e){

    if(confirmPass.value === "") return;

    console.log(pass.value === confirmPass.value);
    console.log(pass.value)
    console.log(confirmPass.value)

    if(pass.value === confirmPass.value ){
        pass.classList.remove('error');
        confirmPass.classList.remove('error');

        pass.classList.add('valid-pass');
        confirmPass.classList.add('valid-pass');
    }else{
        
        pass.classList.add('error');
        confirmPass.classList.add('error');


        pass.classList.remove('valid-pass');
        confirmPass.classList.remove('valid-pass');

    }

}

pass.addEventListener('input',input);
confirmPass.addEventListener('input',input);



