const cards = document.querySelectorAll('.card');

function handleFlip(){
    this.classList.toggle('flip');
}

//const handleFlip = (event) => {
//  event.target.parentElement.classList.toggle('flip');
//};

cards.forEach((card) => {
  card.addEventListener('click', handleFlip);
});