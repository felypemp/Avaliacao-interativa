const btn_submit = document.querySelector(".btn-submit");
const card1 = document.querySelector(".card1-content");
const card2 = document.querySelector(".card2-content");
const btn_rating = document.querySelectorAll(".number-rating")
let score;

btn_submit.addEventListener("click", () =>{
    card1.classList.add("hide")
    card2.classList.remove("hide")
})

btn_rating.forEach( btn => {
    btn.addEventListener('click', btnRatingClick)
});

function btnRatingClick(event) {
    btn_rating.forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');

    score = event.target.textContent;
    console.log(score);
}