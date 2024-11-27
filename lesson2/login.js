
let Btn = document.getElementById("btnLogin");
let Pass = document.getElementById("password");
let Uname = document.getElementById("username");
let errorMessage = document.getElementById("error-message");

Btn.addEventListener("click", () => {
    if (Uname.value == "Admin" && Pass.value == "Pass") {
        alert("Login Successfully");
        window.location.href ="../lesson3/index.html";
    } else { errorMessage.textContent = "Invalid username or password. Please try again.";
    }
});
