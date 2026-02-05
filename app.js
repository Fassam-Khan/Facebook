let notLog = JSON.parse(localStorage.getItem("notLogin"))

if(notLog == null){
    localStorage.setItem("notLogin",JSON.stringify(notLog))
    window.location.href = '/login'


}
