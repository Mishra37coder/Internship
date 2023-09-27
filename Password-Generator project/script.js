let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let category = document.getElementById("passwordCategory");

// Showing input slider value 
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    let value = generatePassword();
    let strength = checkPasswordStrength(value);
    passBox.value = value;
    category.style.color = getColor(strength);
    category.innerHTML = strength;
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

// Function to generate Password
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars  += lowercase.checked ? lowerChars : "";
    allChars  += uppercase.checked ? upperChars : "";
    allChars  += numbers.checked ? allNumbers : "";
    allChars  += symbols.checked ? allSymbols : "";


    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }
    

    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

function checkPasswordStrength(password) {
    // Check password length
    if (password.length < 6) {
      return "Very Weak";
    } else if (password.length < 8) {
      return "Weak";
    }
  
    // Check for character types
    let hasLowerCase = /[a-z]/.test(password);
    let hasUpperCase = /[A-Z]/.test(password);
    let hasNumbers = /\d/.test(password);
    let hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
  
    // Evaluate password strength
    if (hasLowerCase && hasUpperCase && hasNumbers && hasSymbols) {
      return "Very Strong";
    } else if (hasLowerCase && hasUpperCase && hasNumbers) {
      return "Strong";
    } else if (hasLowerCase && (hasUpperCase || hasNumbers)) {
      return "Medium";
    } else {
      return "Weak";
    }
  }

 function getColor(strength) {
    if (strength == "Very Weak") return "Red";
    else if (strength == "Weak") return "Orange";
    else if (strength == "Medium") return "Yellow";
    else if (strength == "Strong") return "Green";
    else if (strength == "Very Strong") return "Blue";
    else return "Black";
 }