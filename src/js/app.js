var contenedorAnimacion = document.getElementById('miAnimacion');
var avatarAnimacion = document.getElementById('avatarAnimacion');

  // Configura las opciones de la animación (puedes ajustar según tus necesidades)
  var opcionesAnimacion = {
    container: contenedorAnimacion,
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: 'public/build/animations/animation6.json' // Ajusta la ruta a tu archivo JSON
  };

  var opcionesAnimacionAvatar = {
    container: avatarAnimacion,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'public/build/animations/animation2.json' // Ajusta la ruta a tu archivo JSON
  };

  // Carga y reproduce la animación
  var animacion = lottie.loadAnimation(opcionesAnimacion);
  var animacionAvatar = lottie.loadAnimation(opcionesAnimacionAvatar);