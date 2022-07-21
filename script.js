ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 1900,
});

ScrollReveal().reveal('.homeLetter h1, .box1 h3, .registerTitle, .redJoinNow', { origin: "left" });
ScrollReveal().reveal('.homeLetter h3, .aboutTitle p', { origin: "left", delay: 300 });
ScrollReveal().reveal('.homeLetter p', { origin: "left", delay: 500 });
ScrollReveal().reveal('.homeLetter button, .bigReview button', { distance: "0px", delay: 600 });
ScrollReveal().reveal('.bigWolf', { origin: "right" });
ScrollReveal().reveal('.computer-card-active, .course-cards', { origin: "bottom" });
ScrollReveal().reveal('.bigReview button, .registerCon button', { distance: "0px", delay: 100 });


const line7 = document.querySelector(".line7");
const line8 = document.querySelector(".line8");
const line9 = document.querySelector(".line9");

line8.addEventListener("click", () => {
    if (line7.classList.contains("bg-danger") || line9.classList.contains("bg-danger")) {
        line8.classList.add("bg-danger");
        line7.classList.remove("bg-danger");
        line9.classList.remove("bg-danger");
    }
})

line7.addEventListener("click", () => {
    if (line8.classList.contains("bg-danger") || line9.classList.contains("bg-danger")) {
        line7.classList.add("bg-danger");
        line8.classList.remove("bg-danger");
        line9.classList.remove("bg-danger");
    }
})

line9.addEventListener("click", () => {
    if (line7.classList.contains("bg-danger") || line8.classList.contains("bg-danger")) {
        line9.classList.add("bg-danger");
        line7.classList.remove("bg-danger");
        line8.classList.remove("bg-danger");
    }
})

const toggle = document.querySelector("#toggle");
const menu = document.querySelector("#navBarRe");

document.addEventListener("click", (e) => {
    if (e.target.id !== "toggle" && e.target.id !== "navBarRe") {
        menu.classList.remove("show");
    }
})

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const body = document.querySelector("body");
let aLink = document.querySelectorAll("a");
let btnSpan = document.querySelectorAll(".jN3 span")
let btn = document.querySelectorAll(".btn");
const jN = document.querySelector(".jN");
let jNSpan = document.querySelectorAll(".jN span");
let jNSpanArrow = document.querySelectorAll(".jN .arrow");
const send = document.querySelector(".send");
const mouse = document.querySelector(".mouse");

const toLight = () => {
    document.documentElement.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");
    moon.classList.add("d-none");
    body.style.backgroundColor = "#f1f5f9";
    body.style.color = "#1E1F28";
    aLink.forEach(e => {
        e.style.color = "#1E1F28";
    })

    btnSpan.forEach(e => {
        e.style.color = "#f80834";
    })

    btn.forEach(e => {
        e.style.borderColor = "#f80834";
    })

    mouse.style.fill = "#1E1F28";

    jN.style.color = "#1E1F28";
    jNSpan.forEach(e => {
        e.style.color = "#1E1F28";
        if (e === jNSpan.length) {
            e.style.color = "#f1f5f9";
        }
    })

    jNSpanArrow.forEach(e => {
        e.style.fill = "#1E1F28";
    })

    send.style.color = "#f1f5f9";
}

const toDark = () => {
    document.documentElement.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
    sun.classList.add("d-none");
    body.style.backgroundColor = "#1E1F28";
    body.style.color = "#f1f5f9";
    aLink.forEach(e => {
        e.style.color = "#f1f5f9";
    })

    btnSpan.forEach(e => {
        e.style.color = "#f80834";
    })

    btn.forEach(e => {
        e.style.borderColor = "#f1f5f9";
    })

    mouse.style.fill = "#f1f5f9";

    jN.style.color = "#f1f5f9";
    jNSpan.forEach(e => {
        e.style.color = "#f1f5f9";
    })

    jNSpanArrow.forEach(e => {
        e.style.fill = "#f1f5f9";
    })
}

sun.addEventListener("click", () => {
    moon.classList.remove("d-none");
    // sun.classList.add("d-none");

    const color = localStorage.getItem("theme");
    if (color === "light") {
        toDark();
    }
})

moon.addEventListener("click", () => {
    sun.classList.remove("d-none");
    // moon.classList.add("d-none");

    const color = localStorage.getItem("theme");
    if (color === "dark") {
        toLight();
    }
})

const color = localStorage.getItem("theme");
if (color === "light") {
    toLight();
}else{
    toDark();
}

const line3 = document.querySelector(".line3");
const arrow1 = document.querySelector(".arrow1");
window.addEventListener("load", () => {
    line3.style.width = "170px";
})

setInterval(() => {
    arrow1.style.transform = `translateY(15px)`;
    setTimeout(() => {
        arrow1.style.transform = `translateY(0px)`;
    }, 500);
}, 1500);