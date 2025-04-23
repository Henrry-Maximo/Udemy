// object of time
// 60 seconds * 60 seconds * 3 * 1000;
// const threeHours = 60 * 60 * 3 * 1000;
// const aDay = 60 * 60 * 24 * 1000;
// console.log(threeHours, aDay);
// const date = new Date (0 + threeHours + aDay); // 01/01/1970 Timestamp unix or era unix 
// const date = new Date (0 + threeHours - aDay);
// const date = new Date (); // creating a new date
// console.log(date.toString());

// const data = new Date(); // current moment
// const data = new Date(2019, 3, 20, 15, 14, 27, 500); // a, m, d, h, M, s, ms
// console.log(data.toString());

// const data = new Date('2019-04-20 20:20:59');
// const data = new Date(1745430637195);
// console.log('Dia', data.getDate()); // number day
// console.log('Mês', data.getMonth() + 1); // month begin in zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // which day of 7 days (0-Domingo, 6-Sábado)
// console.log(data.toString());

// console.log(Date.now()); // format ms

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
  console.log(date);

  const day = zeroLeft(date.getDate());
  const month = zeroLeft(date.getMonth() + 1);
  const year = zeroLeft(date.getFullYear());
  const hour = zeroLeft(date.getHours());
  const min = zeroLeft(date.getMinutes());
  const seg = zeroLeft(date.getSeconds());

  return `${day}/${month}/${year} ${hour}:${min}:${seg}`;
}

const date = new Date();
const dateFromBrazil = formatDate(date);
console.log(dateFromBrazil);