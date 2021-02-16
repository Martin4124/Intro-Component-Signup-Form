const form = document.getElementById("form");
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password")

const ErrorFirstName = document.getElementById("ErrorFirstName")
const ErrorLastName = document.getElementById("ErrorLastName")
const ErrorEmail = document.getElementById("ErrorEmail")
const ErrorPassword = document.getElementById("ErrorPassword")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs()

});
function checkInputs(){
    const FirstNameValue = FirstName.value.trim()
    const LastNameValue = LastName.value.trim()
    const EmailValue = Email.value.trim()
    const PasswordValue = Password.value.trim()

    if (FirstNameValue === ""){
        setErrorFor(FirstName ,ErrorFirstName, "First Name cannot be empty", "")
    }
    else{
        setSuccesFor(FirstName, ErrorFirstName, "", "First Name")
    }
    if (LastNameValue === ""){
        setErrorFor(LastName ,ErrorLastName, "Last Name cannot be empty", "")
    }
    else{
        setSuccesFor(LastName, ErrorLastName, "", "Last Name")
    }
    if (EmailValue === ""){
        setErrorFor(Email ,ErrorEmail, "Email Address cannot be empty", "email@example/com")
    } else if (!isEmail(EmailValue)){
        setErrorFor(Email ,ErrorEmail, "Looks like this is not an email", "email@example/com")
        document.getElementById("Email").value = ""
    } else{
        setSuccesFor(Email, ErrorEmail, "", "Email Address")
    }

    if (PasswordValue === ""){
        setErrorFor(Password ,ErrorPassword, "Password cannot be empty", "")
    }
    else{
        setSuccesFor(Password, ErrorPassword, "", "Password")
    }
}

function setErrorFor(input, div, message, placeholder){
    div.innerText = message
    input.classList.add("form__error-input")
    input.classList.remove("form__succes-input")
    input.placeholder = placeholder
}
function setSuccesFor(input, div, message, placeholder){
    div.innerText = message
    input.classList.remove("form__error-input")
    input.classList.add("form__succes-input")
    input.placeholder = placeholder
}

function isEmail(Email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
}
