let clickCount = 0;

document.getElementById('btnClick').addEventListener('click', () => {
  clickCount += 1;
  document.getElementById('numbers').value = clickCount;
});

