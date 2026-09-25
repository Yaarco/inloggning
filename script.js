const logoutBtn = document.getElementById("logout-btn"),
loginForm = document.getElementById("login-form"), 
usernameInput = document.getElementById('username'),
passwordInput = document.getElementById('password'),
alertBox = document.getElementById("alert"),
username = "Kalle",
password = "qwe123"

function showSection(name, value){
    document.getElementById(name).style.display = value?"block":"none" // anger om den är synlig eller inte beroende på om value är true eller false
}

function logout(){
    showSection("dashboard", false) // dölj dashboard sektionen
    showSection("login", true) // visa login sektionen
    alertBox.innerText="" // ta bort eventuell "felaktigt lösenord" text
    localStorage.removeItem("loggedin") // ta bort att användaren är inloggad från lagring
}

function login(){
    showSection("dashboard", true) // visa dashboard sektionen
    showSection("login", false) //dölj login sektionen
    document.querySelector("span").innerText=username //sätter in namnet i Välkommen texten
    localStorage.setItem("loggedin", true) // sparar en bool istället för att lägga både lösenord och användarnamn i localstorage eftersom det bara finns ett giltigt ändå
}
if(JSON.parse(localStorage.getItem("loggedin"))){ // localstorage sparar bara strings, så vi får omvandla "true" till boolean
    login()
}



loginForm.addEventListener("submit", e=>{ //när formen submittas (via knappen) så körs följande kod
    e.preventDefault() // så att inte en post eller get request skickas
    const inputPassword = passwordInput.value
    const inputUsername = usernameInput.value
    if(username===inputUsername && password===inputPassword){ // om användarnamn och lösenord stämmer med det sparade
        login()
    }else {
        alertBox.innerText="Felaktiga inloggningsuppgifter"
    }
})

logoutBtn.addEventListener("click", ()=>{
    logout()
})
