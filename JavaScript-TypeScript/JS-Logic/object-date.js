// object of time
// 60 seconds * 60 seconds * 3 * 1000;
const threeHours = 60 * 60 * 3 * 1000;
const aDay = 60 * 60 * 24 * 1000;
console.log(threeHours, aDay);
// const date = new Date (0 + threeHours + aDay); // 01/01/1970 Timestamp unix or era unix 
const date = new Date (0 + threeHours - aDay);
// const date = new Date (); // creating a new date
console.log(date.toString());

// const data = new Date(); // current moment
// const data = new Date(2019, 3, 20, 15, 14, 27, 500); // a, m, d, h, M, s, ms
// console.log(data.toString());

// const data = new Date('2019-04-20 20:20:59');
const data = new Date('2019-04-20T20:20:59.100');
console.log('Dia', data.getDate()); // number day
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());