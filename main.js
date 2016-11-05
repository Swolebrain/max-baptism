$(".form-container span").click(function(){
  $("#overlay").fadeOut();
})
$("#btn1").click(function(){
  $("#overlay").fadeIn();
})
$("#btn2").click(function(){
  var name = $("#name").val();
  var guests = $("#numguests").val();
  if (!name || !guests){
    return alert("Please fill out all fields.");
  }
  $("#btn2").hide();
  $("#status").html("Sending..")
  $.ajax({
    url: "http://fvi-grad.com:4004/email",
    success:function(res){
      console.log(res);
      $("#status").html(res);
    },
    method: "POST",
    data:{
      dest_email: "marizelle.rodriguez@gmail.com",
      subject: "Reservation for Max's baptism",
      message: "Reservation by: "+ name + "\nNum guests: " + guests,
      email: "blah@blah.com",
      full_name: $("#name").val(),
      ddate: "November 27, 2016",
      hora: "3:00pm"
    }
  })
})
