document.getElementById('form-reservacion').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Reservación enviada con éxito!');
    this.reset();
  });
  