let userNameElement = document.getElementById("userName");
let userPasswordElement = document.getElementById("userPassword");
let usernameErrorMsg = document.getElementById("username-errorMsg");
let passwordErrorMsg = document.getElementById("password-errorMsg");
let myFormEl = document.getElementById("myForm");

userNameElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        usernameErrorMsg.textContent = "*Required";
        usernameErrorMsg.style.color = "green";
    } else {
        usernameErrorMsg.textContent = "";
    }
});

userPasswordElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrorMsg.textContent = "*Required";
        passwordErrorMsg.style.color = "red";
    } else {
        passwordErrorMsg.textContent = "";
    }
});

function onSubmit(Link) {
    let userNameElementValue = userNameElement.value;
    let userPasswordElementValue = userPasswordElement.value;
    if (userNameElementValue === "Elizabeth" && userPasswordElementValue === "12345") {
        window.open(Link.value);
        alert("Login Successful");
    } else {
        alert("Invalid");
        return;
    }
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
})