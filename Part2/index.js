const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}

function resetCards() {
    const cards = document.getElementsByTagName("section");
    console.log(cards[0]);
    for (let i=0; i<cards.length; i++) {
        cards[i].style.color = "grey";
    }
}