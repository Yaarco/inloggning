const loginBtn = document.getElementById("login-btn")
const logoutBtn = document.getElementById("logout-btn")
const loginForm = document.getElementById("login-form")

const alertBox = document.getElementById("alert")
const statusBox = document.getElementById("status")

loginForm.addEventListener("submit", e=>{
    e.preventDefault() // så att inte en post eller get req skickas
    console.log(e)
})
