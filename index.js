const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById("generate-btn")
generateBtn.addEventListener("click", randomPasswordGenerator)
let passwordOne = document.getElementById("rectangle95")
let passwordTwo = document.getElementById("rectangle96")

// console.log(passwordOne)

function randomPasswordGenerator() {
    // console.log("Generating a random number")
    passwordOne.textContent = randomCharacterGenerator();
    passwordTwo.textContent = randomCharacterGenerator();
}

function randomCharacterGenerator() {
    let randomNumber
    let randomCharacters = ""
    for (let i = 0; i < 15; i++) {
        randomNumber = Math.floor(Math.random() * characters.length)
        randomCharacters += characters[randomNumber]
    }
    return randomCharacters
}
