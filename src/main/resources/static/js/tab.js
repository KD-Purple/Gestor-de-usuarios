$(document).ready(function() {
    // Manejar clic en los enlaces de la barra lateral
    $('.nav-link').click(function() {
        // Quitar la clase 'active' de todos los enlaces
        $('.nav-link').removeClass('active');
        
        // Agregar la clase 'active' al enlace seleccionado
        $(this).addClass('active');
    });

    // Manejar clic en los enlaces con subnavegación
    $('.has-subnav').click(function() {
        // Quitar la clase 'active' de todos los enlaces
        $('.has-subnav').removeClass('active');
        // Agregar la clase 'active' al enlace seleccionado
        $(this).addClass('active');
    });
});