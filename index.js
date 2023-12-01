// 1.

const galleryEl = document.querySelectorAll('.image');
const containerImg = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
console.dir(galleryEl);
let currentIndex = 0;
galleryEl.forEach((img, index) => {
    console.log(img);
    img.addEventListener("click", () => {
        console.log(index);
        currentIndex = index;
        fullScreenImg(currentIndex);
    });
});

function fullScreenImg(index) {
    fullImage.src = galleryEl[index].src;
    containerImg.style.display = "block";
};

function closeFullScreen() {
    containerImg.style.display = "none";
};

function handleRight() {
    currentIndex = (currentIndex + 1) % galleryEl.length;
    console.log(currentIndex, "right")
    fullScreenImg(currentIndex);
};

function handleLeft() {
    currentIndex = (currentIndex - 1 + galleryEl.length) % galleryEl.length;
    console.log(currentIndex, "left")
    fullScreenImg(currentIndex);
};

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeFullScreen();
    } else if (event.key === "ArrowRight") {
        handleRight();
    } else if (event.key === "ArrowLeft") {
        handleLeft();
    };
});

// 2.

function createBoxes() {
    const amount = document.getElementById('inputNumber').value;
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = getRandomColor();
        boxesContainer.appendChild(box);
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
    };
};
function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
};
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};