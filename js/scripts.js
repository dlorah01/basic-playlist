
var listas = [];
// al cargar la página
$(document).ready(function(){
  
  
  // asigna un manejador al evento "onClick"
  // del boton de cargar JSON
  $( "#btn_load_json").click(
    function () {
      
      // cargar el JSON con datos
      $.getJSON( 
        "books.json", 
        function( data ) {
          // asigna los datos del JSON al arreglo libros
          listas = data;
          console.log( data );
          
          // mostrar JSON de libros
          $("#json_libros").val( JSON.stringify(data), null, '\t' );
          
          // muestra los libros en la lista
          mostrarListas( listas );
        }
      );      
    }
  );


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
