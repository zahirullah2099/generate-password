 
        // window.onload().passwordBox.value="";
        const passwordBox = document.getElementById("password");
        const upperCase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const symbols = "@#$%&*+-_(){}/?~][|=!";
        const number = "0123456789";

        const lenght = 12;
        const allChars = upperCase + lowerCase + symbols + number; 
        const copy = document.getElementById("copy")
function generatePassword(){ 
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += number[Math.floor(Math.random() * number.length)];
    // console.log(password)
    // passwordBox.innerText=password;
    while(lenght > password.length){ 
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
      passwordBox.value=password;
}
 copy.addEventListener("click",()=>{
    passwordBox.select();
    document.execCommand("copy")
 })

 document.addEventListener("DOMContentLoaded",  ()=> { 
    passwordBox.value="";
        });


    