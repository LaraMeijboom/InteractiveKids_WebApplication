document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('.parallax-layer').forEach(layer => {
    const speed = parseFloat(layer.dataset.speed);

    let transformX = 0;
    let transformY = 0;

    if (layer.classList.contains('piedra') || layer.classList.contains('arbol')) {
      transformX = layer.classList.contains('izquierda') ? scrollY * -speed : scrollY * speed;
    } else if (layer.classList.contains('personaje')) {
      transformY = scrollY * -speed;
    }

    // Asegurar que siempre hay scale(1)
    layer.style.transform = `translate(${transformX}px, ${transformY}px) `;
  });
});
