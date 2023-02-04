const btn_submit = document.querySelector(".btn-submit");
const card1 = document.querySelector(".card1-content");
const card2 = document.querySelector(".card2-content");

btn_submit.addEventListener("click", () =>{
    card1.classList.add("hide")
    card2.classList.remove("hide")
})
