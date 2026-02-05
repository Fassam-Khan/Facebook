let email = document.getElementById("email");
let password = document.getElementById("password");
const isLogin = false

const login = ()=>{
    if(email.value.trim() == ""  || password.value.trim() == ""){
        alert("invalid Crediantial")

    }
    else{
        alert("Login Successfully")
        notLog = JSON.parse(localStorage.getItem("notLogin") || [])
        localStorage.setItem("notLogin",JSON.stringify(email.value))
        window.location.href = "/"
    }
}