Template.addInternetHoneypot.onRendered(function() {
  $('form').validate({
    valid: function(event, options) {
      var options = {
        hostname: event.target.hostname.value,
        location: event.target.location.value
      };
      event.preventDefault();
      console.log(event.target.hostname.value);
      Meteor.call('createInternetHoneypot', options);
      sAlert.success('Honeypot creation started');
    },
    invalid:function(event, options) {
      sAlert.error('Form invalid. Please check fields');
    },
    eachValidField: function() {
      $(this).closest('div').removeClass('has-error').addClass('has-success');
    },
    eachInvalidField: function() {
      $(this).closest('div').removeClass('has-error').addClass('has-error');
    }
  });
});
