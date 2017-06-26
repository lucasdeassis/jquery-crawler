$(document).ready(function () {
  var url = 'http://go.olx.com.br/grande-goiania-e-anapolis/grande-goiania/imoveis/aluguel/apartamentos?pe=500&ps=100&ret=1040&roe=3&ros=2';

  /**
   * Construct page based on properties that are around goiania, apartments or houses,
   * minimum R$ 100 maximum R$ 500,
   * minimum 2 rooms maximum 3 rooms
   */
  $.get(url).done(function (data) {
    pageAsJquery = $('<div/>').html(data).contents();


    pageAsJquery.find('#main-ad-list').children().children().each(function (index) {
      var photo = $(this).find('.OLXad-list-image-box') || '';
      var title = $(this).find('.OLXad-list-title').html() || '';
      var region = $(this).find('.detail-region').html() || '';
      var category = $(this).find('.detail-category').html() || '';
      var price = $(this).find('.OLXad-list-price').html() || '';
      var date = $(this).find('.col-4 .text').eq(0).html() || '';
      var time = $(this).find('.col-4 .text').eq(1).html() || '';

      // remove lazy load
      if (photo !== '') {
        photo.find('.image').attr('class', 'image');
        photo.find('.image').attr('src', photo.find('.image').attr('data-original'));
      }

      // not an property ad, jumps to next iteration
      if (!photo.html()) {
        return true;
      }
      content = "<tr> <td>" + photo.html() + " </td> ";
      content += " <td>" + title + " </td> ";
      content += " <td>" + region + " </td>";
      content += "<td>" + category + " </td> ";
      content += " <td>" + price + " </td> ";

      content += " <td>" + date + " " + time + " </td> </tr>";

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

