    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce((acumulador, atual) => {
    return acumulador += (atual.toLowerCase().split('').reduce((acc, string) => (string === 'a')? acc += 1 : acc ,0))},0)
}

assert.deepEqual(containsA(), 20);