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


});


// $(document).ready(function(){
 

//       $("#first").mouseover(function(){
//         $("#first").fadeTo("slow", 0.5 )
//         // $("#first").text( "mouse over" );
        
        
//       })
  
      // $("#first").mouseout(function(){
      //   $("#first").fadeTo("slow", 0 )
      //   // $("#first").text( "mouse over" );
        
        
      // }) 
        
      


function getit(){
  var neme = document.getElementById("name").value;
  var ema = document.getElementById("email").value;
  var messag = document.getElementById("textarea").value;
  if (neme == "" || ema == "" || messag == ""){
    alert ("enter your name, email and a commment")
  }
   else alert( neme + " we have received your message. Thank you for reaching out to us. ")
}



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