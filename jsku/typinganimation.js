const judul = document.querySelector(".judul");
const textArray = ["SELAMAT DATANG", "WELCOME TO MY WEBSITE","SILAKAN LOGIN DULU KAK"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
// let dmk = textArray[textArrayIndex].charAt(0);

// console.log(dmk);
function type(){
if(charIndex < textArray[textArrayIndex].length){
    judul.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
} else{
    //erase
    setTimeout(erase, newTextDelay);

}
}
function erase(){
if (charIndex > 0){
    judul.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
}else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex=0
    setTimeout(type, typingDelay + 1100);
}
}
document.addEventListener("DOMContentLoaded",function(){
setTimeout(type, newTextDelay + 250);
});