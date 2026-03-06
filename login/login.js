let email = document.getElementById("email");
let password = document.getElementById("password");
const isLogin = false
let userEmail = JSON.parse(localStorage.getItem("users"))
let loginBtn = document.getElementById("login");

const login = () => {
    if (userEmail) {
        userEmail?.forEach(element => {
            if (element.email == email.value && element.password == password.value) {
                alert("Login Successfully")
                localStorage.setItem("notLogin", JSON.stringify(element))
                window.location.href = "/"
                notLog = JSON.parse(localStorage.getItem("notLogin") || [])
                localStorage.setItem("notLogin", JSON.stringify(element))
            }
            else {
                alert("Login unsuccessfully")
            }
        });

    }
    if(userEmail == null || userEmail == undefined){
        alert("Please Register First ")
    }
    if (email.value.trim() == "" || password.value.trim() == "") {
        alert("Please Enter Email and Password")

    }
  



}


loginBtn.addEventListener("click", login);
