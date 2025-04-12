const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const searchInput = document.getElementById('searchInput');
const darkModeBtn = document.getElementById('darkModeBtn');

let currentIndex = 0;

// Open Modal
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.textContent = img.alt;
    currentIndex = index;
  });
});

// Close Modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Navigation
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateModal();
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateModal();
};

function updateModal() {
  modalImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt;
}

// Search Filter
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  images.forEach(img => {
    img.style.display = img.alt.toLowerCase().includes(query) ? 'block' : 'none';
  });
});

// Dark Mode Toggle
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
