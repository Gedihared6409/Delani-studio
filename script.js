

$(document).ready(function (){
$(".clickable2").click(function(){
    $(".development-hidden").toggle()
   $(".development-showing").toggle()
});

$(document).ready(function() {
    $(".clickable1").click(function() {
        $(".design-hidden").toggle();
        $(".design-showing").toggle();
    });
  });


  $(document).ready(function() {
    $(".clickable3").click(function() {
        $(".product-hidden").toggle();
        $(".product-showing").toggle();
    });
  });
  $('form').submit(function(){
    var name = $('#name').val()
    var email = $('#email').val()
    var message = $('#message').val()

  if (name == ""|| message == "" || email == ""){
    alert ("fill all the form");
  }
   else alert( name +  "  we have received your message. Thank you fro reaching out to us. ") ;
  })
});


$(document).ready(function(){
  $("img#po1").mouseover(function(){
      $(".por1").show();
  }).mouseout(function(){
      $(".por1").hide();
  });
  $("img#po2").mouseover(function(){
    $(".por2").show();
}).mouseout(function(){
    $(".por2").hide();
});
$("img#po3").mouseover(function(){
  $(".por3").show();
}).mouseout(function(){
  $(".por3").hide();
});
$("img#po4").mouseover(function(){
  $(".por4").show();
}).mouseout(function(){
  $(".por4").hide();
});
$("img#po5").mouseover(function(){
  $(".por5").show();
}).mouseout(function(){
  $(".por5").hide();
});
$("img#po6").mouseover(function(){
  $(".por6").show();
}).mouseout(function(){
  $(".por6").hide();
});
$("img#po7").mouseover(function(){
  $(".por7").show();
}).mouseout(function(){
  $(".por7").hide();
});
$("img#po8").mouseover(function(){
  $(".por8").show();
}).mouseout(function(){
  $(".por8").hide();
});

});