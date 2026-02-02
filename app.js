localStorage.setItem("notLogin",JSON.stringify(""))

let notLog = JSON.parse(localStorage.getItem("notLogin"))

if(notLog == ""){
    window.location.href = '/login'
}