const container=document.querySelector(".main-container")
container.addEventListener("click",(e)=>{
    console.log(e.target)
    const ids=e.target;
    container.style.backgroundColor=ids.id
})