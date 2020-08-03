const select = document.getElementById('select-estados');

let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for (let i in estados) {
  const option = document.createElement('option');
  option.innerHTML = estados[i];
  option.value = estados[i];
  select.appendChild(option);
}