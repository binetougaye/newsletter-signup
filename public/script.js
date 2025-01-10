// 
const email = document.getElementById("exampleInputEmail")
const button = document.getElementById("submit")
const errorEmail = document.getElementById("errorMail")
const form = document.querySelector("form")
const container = document.getElementById("container")
const success = document.querySelector(".success")
const emailAdress = document.getElementById("email-adress")
success.style.display = "none"
let validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmail(e) {
    let isValid = true
    e.preventDefault()
    if (email.value.trim() === "") {
        errorEmail.textContent = "This field is required"
        email.style.border = "1px solid red"
        email.style.backgroundColor = "#fcd1e0"
        errorEmail.classList.add("error")
        isValid = false

    }
    if (!(email.value.match(validEmailRegex))) {
        errorEmail.textContent = "Valid email required"
        isValid = false
    }
    if (isValid) {
        container.style.display = "none"
        success.style.display = "block"
        emailAdress.textContent = email.value

    }

}

form.addEventListener("submit", validateEmail)