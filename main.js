$(".form-container span").click(function(){
  $("#overlay").fadeOut();
})
$("#btn1").click(function(){
  $("#overlay").fadeIn();
})
$("#btn2").click(function(){
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
      message: "Reservation by: "+$("#name").val()+ "\nNum guests: " +$("#numguests").val(),
      email: "blah@blah.com",
      full_name: $("#name").val(),
      ddate: "November 27, 2016",
      hora: "3:00pm"
    }
  })
})
