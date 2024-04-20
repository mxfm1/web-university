const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const message = document.getElementById("login-message")

// Limpiar mensajes
const clearErrorMessage = () => {
    message.innerHTML=""
}

const clearMessages = () => {
    setTimeout(clearErrorMessage,4000)
}

form.addEventListener('submit',e => {
    e.preventDefault();
    errorMessage=""
    activeError = false
    message.innerHTML=""
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]+$/

    if(!regEx.test(email.value)){
        errorMessage+= `El email no es válido <br>`
        activeError = true
    }
    if(!regPass.test(password.value)){
        errorMessage+=`La contraseña debe tener 1 mayúscula, minúscula  carácter especial<br>`
        activeError = true
    }
    if(password.value.length = 0){
        errorMessage+=``
        activeError=true
    }else if(password.value.length!=0 && password.value.length < 5 || password.value.length > 8){
        errorMessage+=`La contraseña debe contener de 5 a 8 caracteres`
        activeError=true
    }
    if(activeError){
        message.innerHTML = errorMessage
    }
    clearMessages();
});