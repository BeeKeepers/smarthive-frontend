Meteor.methods({

  createInternetHoneypot: function(args) {
    var options = {};
    console.log('creating....', args);
    InternetHoneypots.insert({
      _id: new Meteor.Collection.ObjectID(),
      location: args.location,
      hostname: args.hostname
    });

    //Channel.publish(Meteor.settings.brokerExchange, 'honeypot_create', new Buffer(JSON.stringify(options)));
  }

});
