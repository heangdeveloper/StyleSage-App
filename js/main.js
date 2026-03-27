

document.getElementById("year").textContent = new Date().getFullYear();

const tabLinks = document.querySelectorAll(".tab a");
const tabItems = document.querySelectorAll(".tab li");
const tabContents = document.querySelectorAll(".tab__content");

tabItems[0].classList.add("on")
tabContents[0].classList.add("on")

tabLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        tabItems.forEach(li => li.classList.remove("on"));
        tabContents.forEach(content => content.classList.remove("on"));
        this.parentElement.classList.add("on");
        const target = this.getAttribute("href");
        document.querySelector(target).classList.add("on");
    });
});

window.onload = function () {
    slideMin();
    slideMax();
};

const minVal = document.querySelector(".min__val");
const maxVal = document.querySelector(".max__val");
const range = document.querySelector(".slider__track");
const minTooltip = document.querySelector(".min__tooltip");
const maxTooltip = document.querySelector(".max__tooltip");

const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);
const minGap = 0;

window.addEventListener("DOMContentLoaded", () => {
    slideMin();
    slideMax();
});

function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        minVal.value = parseInt(maxVal.value) - minGap;
    }
    minTooltip.innerHTML = "$" + minVal.value;
    setArea();
}

function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        maxVal.value = parseInt(minVal.value) + minGap;
    }
    maxTooltip.innerHTML = "$" + maxVal.value;
    setArea();
}

function setArea() {
    range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
    range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";

    minTooltip.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
    maxTooltip.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
}


// filter__popup
const openBtn = document.querySelector(".btn__open");
const closeBtn = document.querySelector(".btn__close");
const popup = document.querySelector(".product__filters");

if (openBtn && closeBtn && popup) {
    openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = "none";
        document.body.style.overflow = "";
    });

    document.addEventListener("click", function (e) {
        if (!popup.contains(e.target) && !openBtn.contains(e.target)) {
            popup.style.display = "none";
            document.body.style.overflow = "";
        }
    });
}

