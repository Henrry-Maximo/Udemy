const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log('Event prevent.');
  setResult('Hello world!');
});

function setResult(msg) {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  const p = document.createElement('p');
  p.classList.add('paragrafo-result')
  p.innerHTML = 'Qualquer coisa';
  
  result.appendChild(p);
}