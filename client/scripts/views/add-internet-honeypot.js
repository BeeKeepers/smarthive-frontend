Template.addInternetHoneypot.onRendered(function() {
  $('form').validate({
    valid: function(event, options) {
      //TODO: get from settings
      event.preventDefault();
      var honeys = [
        'amun',
        'cowrie',
        'telnet',
        'tom'
      ];
      var options = {
        hostname: event.target.hostname.value,
        location: event.target.location.value,
        sshkey: event.target.sshkey.value,
        honeys: [],
      };
      honeys.forEach(function(hn) {
        if (event.target['honey-'+hn].checked) {
          options.honeys.push(hn);
        }
      });
      Meteor.call('createInternetHoneypot', options);
      sAlert.success('Honeypot creation started');
      Router.go('/internet');
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
