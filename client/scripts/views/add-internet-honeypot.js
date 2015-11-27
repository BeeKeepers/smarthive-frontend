Template.addInternetHoneypot.onRendered(function() {
  $('form').validate({
    valid: function(event, options) {
      event.preventDefault();
      console.log('form is valid!');
      console.log('submit to server!');
      console.log(event.target.hostname.value);
     //Meteor.call('createInternetHoneypot', options);
    },
    eachValidField: function() {
      $(this).closest('div').removeClass('has-error').addClass('has-success');
    },
    eachInvalidField: function() {
      $(this).closest('div').removeClass('has-error').addClass('has-error');
    }
  });
});
