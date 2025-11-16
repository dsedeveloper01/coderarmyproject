const yourName=document.getElementById("your-name")
const friendName=document.getElementById("friend-name")

const btn=document.querySelector("#check-btn")
console.log(btn)
console.log(yourName)
console.log(friendName)
btn.addEventListener("click",()=>{
    let count =0;
    const a=new Set(yourName.value.toLowerCase());
    const b=new Set(friendName.value.toLowerCase());
a.forEach((char)=>
{
    if(b.has(char)){
        count++
    }
})
     console.log("Total matched characters:", count);
     if(count>=10){
    count=    Math.floor(count/10)+count%10

     }
const container = document.getElementById("result");
    container.textContent = `Your score is: ${count*10}%`;
})