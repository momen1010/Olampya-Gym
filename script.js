// Scroll Reveal
window.addEventListener("scroll", function(){
    document.querySelectorAll(".reveal").forEach(el=>{
        let top = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if(top < windowHeight - 100){
            el.classList.add("active");
        }
    });
});

// Stats Counter
let counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    let update = () => {
        let target = +counter.getAttribute("data-target");
        let count = +counter.innerText;
        let inc = target / 200;
        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            requestAnimationFrame(update);
        }else{
            counter.innerText = target;
        }
    };
    update();
});

// BMI Calculator
function calcBMI(){
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value / 100;
    let bmi = w / (h*h);
    let res = document.getElementById("result");
    if(bmi < 18.5) res.innerText = "Underweight";
    else if(bmi < 25) res.innerText = "Normal";
    else if(bmi < 30) res.innerText = "Overweight";
    else res.innerText = "Obese";
}

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
