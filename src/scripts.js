var $ = require('jquery');

$('form').submit(function(event){
  var em =$('.email').val();
  console.log(em);

  event.preventDefault();
  console.log('njn');
  $.ajax({
  url:'/',
  type:'POST',
  data:{
    email:em
  },
  success:function(response){
    console.log('success');
  }
})







});
