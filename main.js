// Número de estrellas que deseas generar
const numberOfStars = 300;

// Función para crear estrellas
function createStars() {
    const body = document.body;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Posicionar la estrella aleatoriamente
        const size = Math.random() * 5 + 2; // Tamaño entre 2px y 7px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 810}vh`; // Altura aleatoria
        star.style.left = `${Math.random() * 100}vw`; // Ancho aleatorio

        body.appendChild(star);
    }
}

// Llamar a la función para crear las estrellas
createStars();

const text = "I Lava U"; // Cambia esto por el texto que deseas mostrar
const typingTitle = document.getElementById("typing-title");
let index = 0;

function type() {
    if (index < text.length) {
        typingTitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150 + Math.random() * 100); // Cambia el número para ajustar la velocidad de escritura
    } else {
        document.getElementById("cursor").style.display = "none"; // Oculta el cursor al final
    }
}

type();

$( document ).ready(function() {
    
  var envelope = $('#envelope');
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  
  envelope.click( function() {
      open();
  });
  btn_open.click( function() {
      open();
  });
  btn_reset.click( function() {
      close();
  });

  function open() {
      envelope.addClass("open")
         .removeClass("close");
  }
  function close() {
      envelope.addClass("close")
         .removeClass("open");
  }
 
});



document.getElementById('open').addEventListener('click', function() {
  const envelope = document.getElementById('envelope');
  const hearts = document.querySelectorAll('.heart');
  const modal = document.getElementById('modal');

  // Abre el sobre
  envelope.classList.add('open');

  // Muestra los corazones y comienza la animación
  hearts.forEach((heart, index) => {
      heart.style.opacity = 1; // Hacerlos visibles
      heart.style.animation = `rise 5s forwards`; // Añadir la animación
  });

  // Mostrar el modal después de 30 segundos
  setTimeout(() => {
      modal.style.display = 'block'; // Mostrar el modal
  }, 4000); // 6s = 30 segundos
});

// Cerrar el modal
document.getElementById('closeModal').addEventListener('click', function() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none'; // Ocultar el modal
});

// Reiniciar el estado
document.getElementById('reset').addEventListener('click', function() {
  const envelope = document.getElementById('envelope');
  const hearts = document.querySelectorAll('.heart');
  const modal = document.getElementById('modal');

  // Reiniciar el sobre
  envelope.classList.remove('open');

  // Ocultar los corazones
  hearts.forEach((heart) => {
      heart.style.opacity = 0; // Ocultar los corazones
      heart.style.animation = ''; // Reiniciar la animación
  });

  // Ocultar el modal
  modal.style.display = 'none'; // Ocultar el modal
});

function zoomImage(imgElement) {
  // Alternar la clase 'zoom' en la imagen clickeada
  imgElement.classList.toggle('zoom');
}

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});