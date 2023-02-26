const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let first=document.getElementById("firstPass")
let second=document.getElementById("secondPass")

let passlength=prompt("Enter the length of the password you need (e., 8):")

function randomCharacter(){
    let randomno=Math.floor(Math.random()*characters.length)
    let randomchar=characters[randomno]
    return randomchar
}

function generatePassword(){
    let pass=""
    for(let i=0;i<passlength;i++){
        pass=pass+randomCharacter()
    }
    return pass
}

function passgenerate(){
first.textContent=generatePassword();
second.textContent=generatePassword();
}
