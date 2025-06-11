// fetch('./JSON/pessoas.json')
//   .then((res) => res.json())
//   .then((json) => loadElementsPage(json))

axios('./JSON/pessoas.json')
  .then((res) => loadElementsPage(res.data));

function loadElementsPage(json) {
  const table = document.createElement('table');

  for (let person of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = person.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = person.email;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = person.salario;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = person.empresa;
    tr.appendChild(td);

    table.appendChild(tr);

    // console.log(person.nome);
  }

  const result = document.querySelector('.result');
  result.appendChild(table);
}