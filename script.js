// العداد (Stats Counter)
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounter = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Scroll Reveal & Trigger Counter
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            reveal.classList.add('active');
        }
    });

    // تشغيل العداد عند الوصول إليه
    const statsSection = document.querySelector('.stats');
    const sectionPos = statsSection.getBoundingClientRect().top;
    if (sectionPos < window.innerHeight) {
        startCounter();
    }
});

// BMI Calculator
function calcBMI() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value / 100;
    const resultDiv = document.getElementById('result');

    if (w > 0 && h > 0) {
        const bmi = (w / (h * h)).toFixed(1);
        let category = "";
        let color = "";

        if (bmi < 18.5) { category = "نحافة"; color = "#ffcb00"; }
        else if (bmi < 25) { category = "وزن مثالي"; color = "#2ecc71"; }
        else if (bmi < 30) { category = "وزن زائد"; color = "#e67e22"; }
        else { category = "سمنة"; color = "#e74c3c"; }

        resultDiv.style.color = color;
        resultDiv.innerHTML = `مؤشر كتلة جسمك هو: ${bmi} <br> التصنيف: ${category}`;
    } else {
        resultDiv.innerHTML = "يرجى إدخال قيم صحيحة";
    }
}

