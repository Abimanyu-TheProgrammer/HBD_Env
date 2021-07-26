const typedTextSpan = document.querySelector(".typed-text")
const cursorSpan = document.querySelector(".cursor")
const typingdelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


var myDate = new Date();
var month = myDate.getMonth();
var daym = myDate.getDate()
var h = myDate.getHours();


    if (h > 0 && h < 12) textArray = ["Good Morning, Natasya", "Happy Birthday :)"];
    else if (h == 12) textArray = ["Good Day, Natasya", "Happy Birthday :)"];
    else if (h > 12 && h < 17) textArray = ["Good Afternoon, Natasya", "Happy Birthday :)"];
    else if (h > 17 && h < 21) textArray = ["Good Evening, Natasya", "Happy Birthday :)"];

function type() {
    if (charIndex < textArray[textArrayIndex].length){
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingdelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay)
    }
}


function erase() {
    if (charIndex > 0){
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay)
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length)
            textArrayIndex=0;
        setTimeout(type, typingdelay + 1100);
    }
    
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay + 250);
})