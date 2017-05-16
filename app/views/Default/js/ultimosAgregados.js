$(document).ready(function() {
  $.ajax({
   type: "POST",
   url: "../../proyecto/Detalle/ultimosAgregados",
   success: function(response) {
     var cont = 0;
     var row = $('<div>',{'class': 'row'});
     var item = $('<div>',{'class': 'item active'});
     $('#inner').append(item);
     row = $('<div>',{'class': 'row'});
     $(item).append(row);
     response = $.parseJSON(response);
     response.forEach(function(value) {
       if(cont == 3){
         item = $('<div>',{'class': 'item'});
         $('#inner').append(item);
         row = $('<div>',{'class': 'row'});
         $(item).append(row);
         cont = 0;
       }
       var row_i = $('<div>',{'class': 'row'});
       var photo = $('<div>',{'class': 'photo'});
       var info = $('<div>',{'class': 'info'});
       var img = $('<img>',{src: "http://localhost/proyecto/app/views/Default/img/detalle1.jpg",alt: 'Detalle 1'});
       var precio = $('<div>',{'class': 'price col-md-8'});
       var separator = $('<div>',{'class': 'separator clear-left'});
       var col_item = $('<div>',{'class': 'col-item'});
       var col = $('<div>',{'class': 'col-md-4'});
       $(col).append(col_item);
       $(row).append(col);
       $(col_item).append(photo);
       $(photo).append(img);
       $(col_item).append(info);
       $(precio).append('<h5>'+value.nombre+'</h5>');
       $(precio).append('<h5 class="price-text-color">$ '+value.precio+'</h5>');
       $(row_i).append(precio);
       $(info).append(row_i);
       $(info).append(separator);
       $(separator).append('<p class="btn-add"><a href="" class="hidden-sm"><i class="material-icons">favorite</i>Comprar</a></p>');
       $(separator).append('<p class="btn-details"><a href="'+value.ver+'" class="hidden-sm"><i class="material-icons">list</i>Detalles</a></p>');
       $(info).append('<div class= "clearfix"></div>');

       cont++;
     });
   }
  });
});
