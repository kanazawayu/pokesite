$(function() {
  function buildHTML(comment){
    var html = `<div class = "box">
                  <div class = "box__name">
                    <a href=/users/${comment.user_id}>${comment.user_name}</a>
                  </div>
                  <div class = "box__text">
                    ${comment.text}
                  </div>
                </div>`
    return html;
  }
  $(".new").on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.show__comments').append(html);
      $('.new__text').val('');
      $('.new__buttan').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
});