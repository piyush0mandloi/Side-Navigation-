const sidebar = document.querySelector(".sidebar")
const closeBtn = document.querySelector("#btn")
let searchBtn = document.querySelector(".fa-magnifying-glass")

closeBtn.addEventListener("click", ()=>{

    sidebar.classList.toggle("open")
})

searchBtn.addEventListener("click", ()=>{

    sidebar.classList.toggle("open")
})