const area = document.getElementById('area-bola');
const bola = document.getElementById('bola-azul');
const bola1 = document.querySelector('.bola1');
const bola2 = document.querySelector('.bola2');
bola.style.display = 'none';  

area.addEventListener('mouseenter', () => {
  bola.style.display = 'block';  
  bola1.style.display = 'none';   
  bola2.style.display = 'none';    
});

area.addEventListener('mouseleave', () => {
  bola.style.display = 'none';    
  bola1.style.display = 'block';  
  bola2.style.display = 'block';   
});

area.addEventListener('mousemove', (e) => {
  const rect = area.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  bola.style.left = `${x}px`;
  bola.style.top = `${y}px`;
});
