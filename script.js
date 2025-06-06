const imageContainer = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

const imageSources = [
  "https://via.placeholder.com/100?text=A",
  "https://via.placeholder.com/100?text=B",
  "https://via.placeholder.com/100?text=C",
  "https://via.placeholder.com/100?text=D",
  "https://via.placeholder.com/100?text=E"
];

let tiles = [];
let selectedImages = [];

// Utility: Shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generate tiles
function createTiles() {
  selectedImages = [];
  para.textContent = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";

  // Copy 5 unique images
  const images = [...imageSources];

  // Pick one to duplicate
  const duplicate = images[Math.floor(Math.random() * images.length)];
  const allImages = [...images, duplicate];

  shuffle(allImages);
  imageContainer.innerHTML = "";

  tiles = allImages.map((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.dataset.index = index;
    img.addEventListener("click", () => onImageClick(img));
    imageContainer.appendChild(img);
    return img;
  });
}

function onImageClick(img) {
  if (img.classList.contains("selected")) return;

  if (selectedImages.length < 2) {
    img.classList.add("selected");
    selectedImages.push(img);

    resetBtn.style.display = "inline-block";
    if (selectedImages.length === 2) {
      verifyBtn.style.display = "inline-block";
    }
  }
}

resetBtn.addEventListener("click", () => {
  selectedImages.forEach(img => img.classList.remove("selected"));
  selectedImages = [];
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  para.textContent = "";
});

verifyBtn.addEventListener("click", () => {
  if (selectedImages.length === 2) {
    if (selectedImages[0].src === selectedImages[1].src) {
      para.textContent = "You are a human. Congratulations!";
    } else {
      para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    }
    verifyBtn.style.display = "none";
  }
});

// Init on page load
createTiles();
