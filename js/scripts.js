

$(document).ready(function() {
  $("#turtle").click(
    function() {
      // $("")
      $("#turtle img, #turtle p").toggle();
    }
  );

  $("#snake").click(
    function() {
      // $("")
      $("#snake img, #snake p").toggle();
    }
  );

  $("#insect").click(
    function() {
      // $("")
      $("#insect img, #insect p").toggle();
    }
  );




  // function registerProduct(button, productName) {
  //   $("#"+button).click(function(event){
  //     event.preventDefault();
  //     $("#form").show();
  //     $("#form").unbind().submit(function(event){
  //       var name = $("#name").val();
  //       var address = $("#address").val();
  //       $("#form").hide();
  //       $("#name").val("");
  //       $("#address").val("");
  //       $("#receipt").append(productName + name );
  //       event.preventDefault();
  //     });
  //   });
  // }
  // registerProduct("btn-flour","Flour");
  // registerProduct("btn-chocolate","Chocolate");
  // registerProduct("btn-tools","Tools");
});
