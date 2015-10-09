
var listas;
var canciones;
// al cargar la página
$(document).ready($.getJSON("test.json", function(json){
	listas = $.map(json, function(el){return el;});
	console.log(listas);
}));

  
  


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
