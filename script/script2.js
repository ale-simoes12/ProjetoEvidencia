document.addEventListener('mousemove', function(e) {

    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    
    const bola1 = document.querySelector('.bola1');
    bola1.style.left = `${mouseX}px`;
    bola1.style.top = `${mouseY}px`;
  
    const bola2 = document.querySelector('.bola2');
    setTimeout(() => {
      bola2.style.left = `${mouseX}px`;
      bola2.style.top = `${mouseY}px`;
    }, 150);
  });