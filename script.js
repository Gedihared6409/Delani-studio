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
// getit(){
//   var ali = getElementById("name").value
//   alert 

// }
function getit(){
  neme = document.getElementById("name").value;
  alert( neme + " we have received your message. Thank you for reaching out to us. ")
}
