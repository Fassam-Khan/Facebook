const loginData = [
    {
        'email': 'muhammadfassam@gmail.com',
        'password': '123'
    }
]

localStorage.setItem(loginData)

let data = JSON.parse(localStorage.getItem("user"))

if(data == null){
    window.location.href = "/login"
}