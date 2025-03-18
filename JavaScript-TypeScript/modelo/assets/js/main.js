const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // get value / can use form too
  const inputWeight = e.target.querySelector('#weight');
  const inputHeight = e.target.querySelector('#height');

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult('Weight invalid.', false);
    return;
  }
  
  if (!height) {
    setResult('Height invalid.', false);
    return;
  }

  const imc = getImc(weight, height);
  const nivelImc = getNivelImc(imc);

  const msg = `You IMC is: ${imc} (${nivelImc})`
  setResult(msg, true);

  // console.log('Event prevent.');
  // setResult('Hello world!');
});

function getNivelImc (imc) {
  const nivel = ['Below weight', 'Weight natural', 'Overweight', 'Degree Obesity 1', 'Degree Obesity 2','Degree Obesity 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (weight, height) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

function createParagraph() {
  const p = document.createElement('p');
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  const p = createParagraph();

  if (isValid) {
    p.classList.add('paragraph-result');
  } else {
    p.classList.add('bad');
  }


  // const p = document.createElement('p');
  // p.classList.add('paragrafo-result')
  p.innerHTML = msg;
  result.appendChild(p);
}