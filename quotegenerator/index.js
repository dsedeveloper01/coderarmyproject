const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final; failure is not fatal.",
  "Dream big. Start small. Act now.",
  "Don’t stop until you’re proud.",
  "Everything you can imagine is real.",
  "Doubt kills more dreams than failure ever will.",
  "Make today count.",
  "Stay humble. Hustle hard.",
  "Turn your wounds into wisdom.",
  "Small steps every day.",
  "Your only limit is your mind.",
  "Great things never come from comfort zones.",
  "Push yourself, no one else will do it for you.",
  "Work hard in silence, let success make the noise.",
  "Be stronger than your excuses.",
  "Do something today that your future self will thank you for.",
  "Believe in yourself and you will be unstoppable.",
  "It always seems impossible until it’s done.",
  "Act like you’re wearing the crown you want.",
  "Focus on progress, not perfection."
];

const generatebtn=document.getElementById("generate-btn")
console.log(generatebtn)
generatebtn.addEventListener("click",()=>{
    const prevQuote=document.querySelector(".quote") //this will check if any quote class is availaible it will remove it
    if(prevQuote){
        prevQuote.remove()
    }
    const quote=document.createElement("div")
    quote.classList.add("quote")
    const randomQuoteIndex=Math.floor(Math.random()*quotes.length)
    quote.textContent=quotes[randomQuoteIndex]
   generatebtn.parentNode.insertBefore(quote,generatebtn)
   
   console.log(quotes[0])
})