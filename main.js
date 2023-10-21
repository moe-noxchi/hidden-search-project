const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")


btn.addEventListener('click', () => {
    search.classList.toggle("active")
    // adds and removes a class 
    input.focus()
    // focus makes u focus on the inside of search
})