const cards = document.querySelectorAll('.card');

const handleFlip = (event) => {
  event.target.parentElement.classList.toggle('flip');
};

cards.forEach((card) => {
  card.addEventListener('click', handleFlip);
});