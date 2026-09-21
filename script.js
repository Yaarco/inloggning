const loginBtn = document.getElementById("login-btn")
const logoutBtn = document.getElementById("logout-btn")
const loginForm = document.getElementById("login-form")
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const dashboardBox = document.getElementById("dashboard")
const loginBox = document.getElementById("login")

const alertBox = document.getElementById("alert")

const username = "Kalle"
const password = "qwe123"

function showSection(name, value){
    return document.getElementById(name).style.display = value?"block":"none"
}

function logout(){
    showSection("dashboard", false)
    showSection("login", true)
    alertBox.innerText=""
    localStorage.removeItem("loggedin")
}

function login(){
    showSection("dashboard", true)
    showSection("login", false)
    document.querySelector("span").innerText=username
    localStorage.setItem("loggedin", true)
}

document.addEventListener("DOMContentLoaded", ()=>{
    if(Boolean(localStorage.getItem("loggedin"))===true){
        login()
    }
})


loginForm.addEventListener("submit", e=>{
    e.preventDefault() // så att inte en post eller get req skickas
    const inputPassword = passwordInput.value
    const inputUsername = usernameInput.value
    if(username===inputUsername && password===inputPassword){
        login()
    }else {
        alertBox.innerText="Felaktiga inloggningsuppgifter"
    }
})

logoutBtn.addEventListener("click", ()=>{
    logout()
})
