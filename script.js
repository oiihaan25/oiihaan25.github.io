$(document).ready(function () {

  //Typed
  var typed = new Typed('.typed', {
    strings: [
      '<i>Full Stack Developer</i>',
      '<i>Mobile Developer</i>',
      '<i>Telecommunications Technician</i>'
    ],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    contentType: 'html',
    fadeOut: true,
  });

  // Función para inicializar Scrollify
  function inicializarScrollify() {
    if ($(window).width() >= 800) {
      $.scrollify({
        section: ".scroll",
        sectionName: "section",
        standardScrollElements: "",
        easing: "easeInOutCubic",
        scrollSpeed: 1500,
        offset: 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll: true,
      });
    } else {
      $.scrollify.destroy();
    }
  }

  // Inicializar Scrollify al cargar la página
  inicializarScrollify();

  // Actualizar Scrollify al redimensionar la ventana
  $(window).resize(function () {
    inicializarScrollify();
  });

  window.sr = ScrollReveal();

  // Animaciones iniciales de ScrollReveal para cada sección
  sr.reveal(".titulo_primera_pag", {
    duration: 2000,
    origin: "top",
    distance: "50px",
    reset: true,
  });

  sr.reveal(".titulo_segunda_pag", {
    duration: 2000,
    origin: "left",
    distance: "50px",
    reset: true,
  });

  sr.reveal(".sobre_mi_info", {
    duration: 2000,
    origin: "bottom",
    distance: "50px",
    reset: true,
  });

  sr.reveal(".encabezado_tercera_pag", {
    duration: 2000,
    origin: "top",
    distance: "50px",
    reset: true,
  });

  sr.reveal(".titulo_tercera_pag", {
    duration: 2000,
    origin: "left",
    distance: "50px",
    reset: true,
  });

  sr.reveal(".subtitulo_tercera_pag", {
    duration: 2000,
    origin: "bottom",
    distance: "50px",
    reset: true,
  });

  sr.reveal(".skills > div", {
    duration: 2000,
    origin: "bottom",
    distance: "50px",
    reset: true,
  });

  sr.reveal(".avatar", {
    duration: 2000,
    origin: "left",
    distance: "50px",
    reset: true,
  });

  sr.reveal(".descripcion_contacto", {
    duration: 2000,
    origin: "bottom",
    distance: "50px",
    reset: true,
  });

  // Variable para almacenar el índice del elemento de la barra de navegación actualmente activo
  var indiceActualNav = 0;

  // Asocia secciones con los elementos de la barra de navegación
  var secciones = $("section");
  var elementosNav = $("#barra_numeros li");
  var linea = $(".linea");

  // Variable para controlar si la animación está en curso
  var animacionEnCurso = false;

  // Variable para controlar si el ratón está sobre un elemento de navegación
  var mouseOverNav = false;

  // Función para mover la línea a la posición de la sección visible actual
  function actualizarPosicionLinea() {
    if (!mouseOverNav && !animacionEnCurso) {
      var posicionSuperior = $(elementosNav[indiceActualNav]).position().top;
      linea.css("top", posicionSuperior + "px");
    }
  }

  // Evento para manejar el desplazamiento
  $(window).on("scroll", function () {
    if (animacionEnCurso) {
      return; // Salir si la animación está en curso
    }

    var desplazamientoActual = $(this).scrollTop();

    // Recorre cada sección para verificar cuál está en la vista
    secciones.each(function (indice) {
      var parteSuperiorSeccion = $(this).offset().top - 100; // Ajuste para la sensibilidad del scroll
      var parteInferiorSeccion = parteSuperiorSeccion + $(this).outerHeight();

      if (
        desplazamientoActual >= parteSuperiorSeccion &&
        desplazamientoActual < parteInferiorSeccion
      ) {
        // Actualiza el índice del elemento de navegación actual
        indiceActualNav = indice;
        actualizarPosicionLinea();
      }
    });
  });

  // Evento para manejar el mouseover en los elementos de navegación
  $("nav ul li").mouseenter(function () {
    mouseOverNav = true;
    var posicionSuperior = $(this).position().top;
    linea.css("top", posicionSuperior + "px");
  });

  // Evento para manejar el mouseleave en los elementos de navegación
  $("nav ul li").mouseleave(function () {
    mouseOverNav = false;
    actualizarPosicionLinea();
  });

  // Evento para manejar el click en los elementos de navegación
  elementosNav.on("click", function () {
    var indice = $(this).index();
    var posicionSeccion = $(secciones[indice]).offset().top;

    animacionEnCurso = true;

    // Desplaza la pantalla a la sección correspondiente
    $("html, body").animate(
      {
        scrollTop: posicionSeccion,
      },
      1000,
      function () {
        // Actualiza el índice del elemento de navegación actual
        indiceActualNav = indice;
        actualizarPosicionLinea();
        animacionEnCurso = false; // Finaliza la animación
      }
    );

    return false; // Evita el comportamiento por defecto del enlace
  });

  // Inicializa la posición de la línea al cargar la página
  actualizarPosicionLinea();

  // Evento para manejar el click en el enlace "about me"
  $("#about_me_link").on("click", function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    var posicionSeccion = $("#pagDos").offset().top;

    animacionEnCurso = true;

    // Desplaza la pantalla a la sección correspondiente
    $("html, body").animate(
      {
        scrollTop: posicionSeccion,
      },
      1000,
      function () {
        // Actualiza el índice del elemento de navegación actual
        indiceActualNav = 1; // Actualiza el índice a la segunda sección (índice 1)
        actualizarPosicionLinea();
        animacionEnCurso = false; // Finaliza la animación
      }
    );
  });

  // Evento para manejar el click en el botón "contacto"
  $(".btn_contacto").on("click", function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    var posicionSeccion = $("#pagCuatro").offset().top;

    animacionEnCurso = true;

    // Desplaza la pantalla a la sección correspondiente
    $("html, body").animate(
      {
        scrollTop: posicionSeccion,
      },
      1000,
      function () {
        // Actualiza el índice del elemento de navegación actual
        indiceActualNav = 3; // Actualiza el índice a la cuarta sección (índice 3)
        actualizarPosicionLinea();
        animacionEnCurso = false; // Finaliza la animación
      }
    );
  });

  // back to top----scrollear hacia arriba del todo
  $("#subir_arriba").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  //clicar el logo, recargar
 
  $(".divLogo").click(function () {
    $(window).scrollTop(0);
  });
  

    $(window).on("unload", function () {
    window.scrollTo(0, 0);
  });
});
