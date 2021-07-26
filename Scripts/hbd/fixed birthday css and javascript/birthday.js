const typedTextSpan = document.querySelector(".typed-text")
const cursorSpan = document.querySelector(".cursor")

let textArray = ["Good Morning, Natasya","Good Day, Natasya","Good Afternoon, Natasya","Good Evening, Natasya","Good Night, Natasya"]
const typingdelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0
let charIndex = 0;

var myDate = new Date();
var month = myDate.getMonth();
var daym = myDate.getDate()
var h = myDate.getHours();

if ( month == 3 && daym == 16) {
    

    function type() {
        if (h > 0 && h < 12) {

            let newTextArray = ["Good Morning, Natasya", "Happy Birthday :)"]

            if (charIndex < newTextArray[textArrayIndex].length){
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += newTextArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingdelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }

            function erase() {
                if (charIndex > 0){
                    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                    typedTextSpan.textContent = newTextArray[textArrayIndex].substring(0,charIndex-1);
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
        }

        else if (h == 12) {

            let newTextArray = ["Good Day, Natasya", "Happy Birthday :)"]

            if (charIndex < newTextArray[textArrayIndex].length){
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += newTextArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingdelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay)
            }

            function erase() {
                if (charIndex > 0){
                    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                    typedTextSpan.textContent = newTextArray[textArrayIndex].substring(0,charIndex-1);
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
        }

        else if (h > 12 && h < 17) {

            let newTextArray = ["Good Afternoon, Natasya", "Happy Birthday :)"]

            if (charIndex < newTextArray[textArrayIndex].length){
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += newTextArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingdelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay)
            }

            function erase() {
                if (charIndex > 0){
                    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                    typedTextSpan.textContent = newTextArray[textArrayIndex].substring(0,charIndex-1);
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
        }

        else if (h > 16 && h < 21) {

            let newTextArray = ["Good Evening, Natasya", "Happy Birthday :)"]

            if (charIndex < newTextArray[textArrayIndex].length){
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += newTextArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingdelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay)
            }

            function erase() {
                if (charIndex > 0){
                    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                    typedTextSpan.textContent = newTextArray[textArrayIndex].substring(0,charIndex-1);
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
        }

        else {

            let newTextArray = ["Good Night, Natasya", "Happy Birthday :)"]

            if (charIndex < newTextArray[textArrayIndex].length){
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += newTextArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingdelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay)
            }

            function erase() {
                if (charIndex > 0){
                    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                    typedTextSpan.textContent = newTextArray[textArrayIndex].substring(0,charIndex-1);
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
        }

    }
    
       
        
    document.addEventListener("DOMContentLoaded", function(){
        setTimeout(type, newTextDelay + 250);
    })

}

else {

    function type() {
        if (h > 0 && h < 12) {

            if (charIndex < textArray[0].length){
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[0].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingdelay);
            }
            else {
                cursorSpan.classList.remove("typing");
            }

        }

        else if (h == 12) {

            if (charIndex < textArray[1].length){
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[1].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingdelay);
            }
            else {
                cursorSpan.classList.remove("typing");
            }
        }

        else if (h > 12 && h < 17) {

            if (charIndex < textArray[2].length){
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[2].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingdelay);
            }
            else {
                cursorSpan.classList.remove("typing");
            }
        }

        else if (h > 16 && h < 21) {

            if (charIndex < textArray[3].length){
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[3].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingdelay);
            }
            else {
                cursorSpan.classList.remove("typing");
            }
        }

        else {

            if (charIndex < textArray[4].length){
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[4].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingdelay);
            }
            else {
                cursorSpan.classList.remove("typing");
            }
        }

    }

    document.addEventListener("DOMContentLoaded", function(){
        setTimeout(type, newTextDelay + 250);
    })

}
