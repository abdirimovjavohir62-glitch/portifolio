// Typing effect
const textList = ["Frontend Developer", "Backend Developer", "Full-Stack Dasturchi"];
let i = 0, j = 0;

function typing() {
    let text = textList[i];
    document.querySelector(".typing").textContent = text.slice(0, j);

    j++;
    if (j > text.length) {
        j = 0;
        i = (i + 1) % textList.length;
    }
    setTimeout(typing, 150);
}
typing();

// Reveal on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 120) {
            el.classList.add("active");
        }
    });
});

// Form
document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("message").textContent = "Xabar yuborildi ✔️";
});
