$( document ).ready(function() {
    console.log( "ready!" );
    $("#formulario").on('submit'), function(event){
      var text= $("#texto").val()
      event.preventDefault();
      $("#publicacion").append(
          '<div class="tweets">'+
          '<div class="cerrar">  </div>'+
          '<p>'+text+'</p>'+
          '</div>'
          )
          $("#texto").val('');
          $("#texto").focus();
    });

    $("#formulario").on('submit',function(event){
        var text=     $("#texto").val()
          event.preventDefault();
          $("#publicacion").append(
            '<div class="row">'+
              '<div class="col-md-1"> <img src="https://secure.gravatar.com/avatar/5d4ca7634142bab6c8ff8786cf1d6ea8?s=50&r=g" alt="" class="perfil"></div>'+
              '<div class="col-md-10">'+
              '<p><strong>Nombre de usuario</strong></p>'+
              '<p>'+text+'</p>'+
              '<img src="https://1jtg13694cr1w2yl1fs2ew4n-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/medsailors-sailing-croatia-holiday-greece-turkey-1716.jpg" alt="foto1" class="img-responsive">'+
              '<i class="fas fa-heart"></i></div>'+
              '<div class="col-md-1"><button type="button"> X </button></div></div></div>'
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

$('#publicacion').on('click','p', function(){
    $(this).children("i").toggleClass('linkear');

   var numero= $(this).text()
   numero=parseFloat(numero)+1
   $(this).html('<p><i class="fas fa-heart linkear"></i> '+numero+'</p>')
});

})
