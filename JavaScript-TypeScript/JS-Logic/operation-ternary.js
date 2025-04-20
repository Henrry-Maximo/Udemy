// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
// ? :
const scoreUser = 999;

if (scoreUser >= 1000) {
  console.log('Usuário VIP.');
} else {
  console.log('Usuário normal');
}

const levelUser = scoreUser >= 1000  ? 'Usuário VIP.' : 'Usuário normal';
// scoreUser = scoreUser >= 1000 ? console.log(`Usuário VIP`) : console.log('Usuário normal');

const corUser = null;
const corDefault = corUser || 'Black';