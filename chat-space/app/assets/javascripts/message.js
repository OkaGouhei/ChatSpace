$(function(){
  function buildHTML(comment){
    var html ='<div class="main__body__messages__message">
                     <div class="main__body__messages__message__username">
                       ${json.user_name}
                     </div>
                     <div class="main__body__messages__message__date">
                       ${json.created_at}
                     </div>
                     <div class="main__body__messages__message__content">
                       ${json.content}
                     </div>
               </div>'
    return html;
  }
  $('#new_message').on('submit', function(e){
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
  })
