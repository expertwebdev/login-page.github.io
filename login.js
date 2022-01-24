window.addEventListener('load', () => {
    let registerNew = document.getElementById("load-signup");
    let loginNow = document.getElementById("load-login");
    let signupForm = document.querySelector('.form-signup');
    let loginForm = document.querySelector('.form-login');
    let forgetPassword = document.getElementById("forgetPassword");
    let errormessage = document.getElementById("errorMessage");
    errormessage.innerText = "";

    loginNow.addEventListener('click', () => {
        signupForm.classList.remove('form--hidden');
        loginForm.classList.add('form--hidden');
    })

    registerNew.addEventListener('click', () => {
        signupForm.classList.add('form--hidden');
        loginForm.classList.remove('form--hidden');
    })

    forgetPassword.addEventListener('click', () => {
        errormessage.innerText = "not available right now";
    }) 

    
})