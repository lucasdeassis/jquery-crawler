$(document).ready(function () {
  var url = 'https://www.kabum.com.br/';

  /**
   * Precos do site da Kabum, ofertas da pagina principal
   */
  $.get(url).done(function (data) {
    pageAsJquery = $('<div/>').html(data).contents();


    pageAsJquery.find('#BlocoConteudo div div div div').each(function (index) {
      var photo = $(this).find('.H-img') || '';
      var title = $(this).find('.H-titulo').html() || '';
      var description = $(this).find('.H-subtitulo').html() || '';
      var price = $(this).find('.H-preco').html() || '';
      var price12x =   $(this).find('.H-preco12x').html() || '';

      // not an property ad, jumps to next iteration
      if (!photo.html()) {
        return true;
      }
      content = "<tr> <td>" + photo.html() + " </td> ";
      content += " <td>" + title + " </td> ";
      content += " <td>" + description + " </td>";
      content += "<td>" + price + " </td>";
      content += "<td>" + price12x + "</td> </tr>";
      $('#records').append(content);

    });


  })
    .fail(function () {
      alert("error");
    })
    .always(function () {
      //alert( "finished" );
    });

});
