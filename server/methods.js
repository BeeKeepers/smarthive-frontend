Meteor.methods({

  createInternetHoneypot: function(args) {
    console.log('creating....', args);
    InternetHoneypots.insert({
      _id: new Meteor.Collection.ObjectID(),
      location: args.location,
      hostname: args.hostname
    });
    args.event_type = 'honeypot_create';

    //TODO: server side validate this (Joi)
    Channel.publish(Meteor.settings.brokerExchange, 'honeypot-manager', new Buffer(JSON.stringify(args)));

    //TODO: move this to event callback
    Streamy.broadcast('new_honeypot', { data: Meteor.settings.public.coords[args.location] });
  }

});
