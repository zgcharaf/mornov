var $ = require('jquery');

$('form').submit(function(event) {
  var em = $('.email').val();
  console.log(em);

  event.preventDefault();
  console.log('njn');

  $.ajax({
    url: '/',
    type: 'POST',
    data: {
      email: em
    },
    success: function() {
      if (em === "") {
        let message = '<div id="flash-error" class="flash-message flash-error"><span>Please enter a valid email address.</span></div>';

        $('#flash-notification').html(message);
      } else {
        let message = '<div id="flash-success" class="flash-message flash-success"><span>Your email has been successfully registered! We will be contacting you very soon! Meanwhile, feel free to follow us on our social media platforms.</span></div>';

        $('#flash-notification').html(message);
      }
    }
  });
});

// Remove error or success message when clicking anywhere on the page, except the messages themselves
$(document).on('click', function(event) {
  if (!$(event.target).closest('.flash-message').length) {
    $('.flash-message').remove();
  }
});
