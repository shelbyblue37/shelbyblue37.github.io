$(document).ready(function(){
  // Timer
  setInterval(function time(){
    var d = new Date();
    var hours = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    if((min + '').length == 1){
      min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
          sec = '0' + sec;
    }
    $('#countdown #hour').html(hours+' : ');
    $('#countdown #min').html(min+' : ');
    $('#countdown #sec').html(sec);
  }, 1000); 

  // Validate
  $("#form").validate();

  // Spoiler
  $(".spoiler-trigger").click(function(){
    $(this).parent().next().collapse('toggle');    
  });

});