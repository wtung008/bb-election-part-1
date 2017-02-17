$(document).ready(function() {
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    data: {},
    dataType: 'json'
  }).done(function(responseData){
      console.log(responseData);
      $.each(responseData.candidates, function(key, value) {
        $('<li>').html(value.name + ": Number of Votes: " + value.votes).appendTo('#voters');
        console.log(value.name)
      });
  });
});
