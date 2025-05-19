const persons = [
  {
    id: 1,
    name: 'Henrry'
  },
  {
    id: 2,
    name: 'Henrry'
  },
  {
    id: 3,
    name: 'Henrry'
  },
];

// const newPersons = {};

// for (const { id, name} of persons) {
//   console.log(id, name)
// }

// for (const person of persons) {
//   const { id } = person;
//   newPersons[id] = { ...person };
// };

const newPersons = new Map();
for (const person of persons) {
  const { id } = person;
  newPersons.set(id, { ...person });
};

console.log(newPersons);
console.log(newPersons.get(2));

for (const person of newPersons) {
  console.log(person);
};

for (const [identifier, { id, name }] of newPersons) {
  console.log(identifier, id, name);
};

newPersons.delete(2);
console.log(newPersons);