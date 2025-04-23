// const date = new Date('1987-04-20 00:00:00');
const date = new Date();
const dayWeek = date.getDay();

// let dayWeekText;

const dayWeekText = getDayWeekText(dayWeek);
console.log(dayWeekText);

function getDayWeekText(dayWeek) {
  let dayWeekText;

  switch (dayWeek) {
    case 0:
      dayWeekText = 'Domingo';
      return dayWeekText;
    case 1:
      dayWeekText = 'Segunda';
      return dayWeekText;
    case 2:
      dayWeekText = 'Terça';
      return dayWeekText;
    case 3:
      dayWeekText = 'Quarta';
      return dayWeekText;
    case 4:
      dayWeekText = 'Quinta';
      return dayWeekText;
    case 5:
      dayWeekText = 'Sexta';
      return dayWeekText;
    case 6:
      dayWeekText = 'Sábado';
      return dayWeekText;
    default:
      dayWeekText = '';
      return dayWeekText;
  }
  
  // return dayWeekText;
}

// switch (dayWeek) {
//   case 0:
//     dayWeekText = 'Domingo';
//     break;
//   case 1:
//     dayWeekText = 'Segunda';
//     break;
//   case 2:
//     dayWeekText = 'Terça';
//     break;
//   case 3:
//     dayWeekText = 'Quarta';
//     break;
//   case 4:
//     dayWeekText = 'Quinta';
//     break;
//   case 5:
//     dayWeekText = 'Sexta';
//     break;
//   case 6:
//     dayWeekText = 'Sábado';
//     break;
//   default:
//     dayWeekText = '';
// }

// if (dayWeek === 0) {
//   dayWeekText = 'Domingo';
// } else if (dayWeek === 1) {
//   dayWeekText = 'Segunda';
// } else if (dayWeek === 2) {
//   dayWeekText = 'Terça';
// } else if (dayWeek === 3) {
//   dayWeekText = 'Quarta';
// } else if (dayWeek === 4) {
//   dayWeekText = 'Quinta';
// } else if (dayWeek === 5) {
//   dayWeekText = 'Sexta';
// } else if (dayWeek === 6) {
//   dayWeekText = 'Sábado';
// } else {
//   dayWeekText = '';
// }

// console.log(dayWeek);
// console.log(dayWeekText);
