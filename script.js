$(document).ready(function() {
  


    $("#formulario").on('submit',function(event){

      
        var text=$("#texto").val()
         event.preventDefault();
          $("#publicacion").append(
              '<div class="row  contenedor2">'+
              '<div class="col-md-1"> <img src="https://secure.gravatar.com/avatar/5d4ca7634142bab6c8ff8786cf1d6ea8?s=50&r=g" alt="" class="perfil"></div>'+
              '<div class="col-md-10">'+
              '<p><strong>Nombre de usuario</strong></p>'+
              '<p>'+text+'</p>'+
              '<img src="https://1jtg13694cr1w2yl1fs2ew4n-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/medsailors-sailing-croatia-holiday-greece-turkey-1716.jpg" alt="foto1" class="img-responsive">'+
              '<i class="fas fa-heart"></i></div>'+
              '<div class="col-md-1 cerrar"><button type="button"> X </button></div></div></div>'
              )

              $("#texto").val('');
              $("#texto").focus();
          });


});



$('#publicacion').on('click','.cerrar', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(900);
});

$('#publicacion').on('click','.tweets', function(){
    $(this).toggleClass('strike');
});

$('#publicacion').on('click','i', function(){
    $(this).toggleClass('linkear');

   var numero= $(this).text()
   numero=parseFloat(numero)+1
   $(this).html('<p><i class="fas fa-heart linkear"></i> '+numero+'</p>')
});


