
$(document).ready(function(){$('[data-toggle=offcanvas]').click(function() {
  $('.row-offcanvas').toggleClass('active');
});

$('.btn-toggle').click(function() {
  $(this).find('.btn').toggleClass('active').toggleClass('btn-default').toggleClass('btn-primary');
});

});

var listas = [];

function mostrarListas( listas ) {
  
  var fuentePlantilla =  $("#template_playlists").html();
  var plantilla = Handlebars.compile( fuentePlantilla );
  var html = plantilla( listas );
  $( "#playlists" ).html( html );
  $(".list-group a").click(function () {
    
    console.log("Selected Option:"+$(this).text());
    
    // obtiene la lista usando el nombre en el dropdown
    var lista = obtenerLista( $(this).text() );
    // muestra la lista
    mostrarCancionesLista( lista );
  });
}

function obtenerLista( nombreLista ) {
  
  for ( var i = 0; i < listas.length; i ++ ) {
    if ( listas[i].list_name === nombreLista ) {
      return listas[i];
    } 
  }
}

function mostrarCancionesLista( lista ) {
  
  var fuentePlantilla =  $("#template_songs").html();
  var plantilla = Handlebars.compile( fuentePlantilla );
  var html = plantilla( lista );
  $( "#songs" ).html( html );
  
}

// cargar el JSON con datos
  $.getJSON( 
    "test.json", 
    function( data ) {
      // asigna los datos del JSON al arreglo libros
      listas = data;
      console.log( data );
      // muestra los libros en la lista
      mostrarListas( listas );
    }
  ); 
