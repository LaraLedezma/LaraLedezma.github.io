function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You made me smile!';
    document.body.appendChild(para);
  }

const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}