let email = document.getElementById("email");
let password = document.getElementById("password");
const isLogin = false
let userEmail = JSON.parse(localStorage.getItem("users"))
console.log(userEmail);



const login = ()=>{

    userEmail.forEach(element => {
        if(element.email == email.value && element.password == password.value){
            alert("Login Successfully")
            notLog = JSON.parse(localStorage.getItem("notLogin") || [])
            localStorage.setItem("notLogin",JSON.stringify(element))
            window.location.href = "/"
            
        }
        else{
            alert("Login unsuccessfully")
        }
        
    });
    if(email.value.trim() == ""  || password.value.trim() == ""){
        alert("invalid Crediantial")

    }
    
}