const textElements=document.getElementsByClassName("typed-text");
const textElement=textElements[0];
textElement.style.fontSize="100px";
const texts=["Welcome to Cakenation!!!"];



const typingSpeed=300;
const erasingSpeed=300;
const delayBetweenTexts=1000;

let textIndex=0;
let charIndex=0;
let isTyping=true;

function animateText(){
    const currentText=texts[textIndex];
    
    if(isTyping){
        textElement.textContent=currentText.substring(0,charIndex+1);
        charIndex++;

        if (charIndex<=currentText.length){
            setTimeout(animateText,typingSpeed);
        }
        else{
            setTimeout(animateText,delayBetweenTexts);
            isTyping=false;
        }
    }

    else{
        textElement.textContent=currentText.substring(0,charIndex-1);
        charIndex--;

        if(charIndex>=0){
            setTimeout(animateText,erasingSpeed);
        }
        else{
            textIndex=0;
            isTyping=true;
            setTimeout(animateText,typingSpeed);
        }
    }
}

animateText();




document.addEventListener('DOMContentLoaded',()=>{
    const floatingText=document.getElementsByClassName("floating-text")[0];
    setTimeout(()=>{
        floatingText.style.opacity="1";
        floatingText.style.transform="translateY(0)";
    },1000);
});
