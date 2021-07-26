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

if ( month == 4 && daym == 16 ){
    if (h > 3 && h < 12) textArray = ["Good Morning, Natasya", "Happy Birthday :)"];
    else if (h == 12) textArray = ["Good Day, Natasya", "Happy Birthday :)"];
    else if (h > 12 && h < 17) textArray = ["Good Afternoon, Natasya", "Happy Birthday :)"];
    else if (h > 16 && h < 21) textArray = ["Good Evening, Natasya", "Happy Birthday :)"];
    else ["Good Night, Natasya", "Happy Birthday :)"];
}
else {
    if (h > 3 && h < 12) textArray = ["Good Morning, Natasya"]
    else if (h == 12) textArray = ["Good Day, Natasya"];
    else if (h > 12 && h < 17) textArray = ["Good Afternoon, Natasya"];
    else if (h > 16 && h < 21) textArray = ["Good Evening, Natasya"];
    else ["Good Night, Natasya", "Happy Birthday :)"];
}

function type() {
    if (charIndex < textArray[textArrayIndex].length){
        
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingdelay);
    }
    else {
        if (month == 3 && daym == 16)
            setTimeout(erase, newTextDelay)
    }
}


function erase() {
    if (charIndex > 0){
        
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay)
    }
    else {
       
        textArrayIndex++;
        if (textArrayIndex >= textArray.length)
            textArrayIndex=0;
        setTimeout(type, typingdelay + 1100);
    }
    
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay + 250);
})