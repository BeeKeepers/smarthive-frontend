var open = Meteor.npmRequire('amqplib').connect('amqp://' + Meteor.settings.brokerHost);
Fiber = Npm.require('fibers');

/**
 * Open connection with AMQP Broker and subscribe to events.
 */
open
.then(function(conn) {
  return conn.createChannel();
})
.then(function(ch) {
  Channel = ch;
  return ch.assertExchange(Meteor.settings.brokerExchange, 'direct', {durable: false});
})
.then(function() {
  Channel.assertQueue('', {exclusive: true})
  .then(function(qok) {
    Meteor.settings.subscriptions.forEach(function(sub) {
      Channel.bindQueue(qok.queue, Meteor.settings.brokerExchange, sub);
    });
    Channel.consume(qok.queue, callback, {noAck: true});
  });
});


/**
 * Event subscription callback.
 * TODO: this should be a dispatcher for support many events.
 */
function callback(msg) {
  // { fields:
  //   { consumerTag: 'amq.ctag-1M11kkj9ijPJ7ZvAta7kAQ',
  //     deliveryTag: 2,
  //     redelivered: false,
  //     exchange: 'hive',
  //     routingKey: 'attacks' },
  //  properties: {},
  // content: <Buffer 68 6f 6c 61 61 61 61 61> }
  console.log('AMQP message! ', msg.content.toString('utf8'));
  var hp;
  try { // TODO: move to real dispatch
    event = JSON.parse(msg.content.toString('utf8'));
    if (event.event_type === 'trend_attack') {
      Streamy.broadcast('attacks', { data: event.event_payload });
    } else if (event.event_type === 'honeypot_ready') {
      Fiber(function() {
        var hp = InternetHoneypots.findOne({hostname: event.event_payload.hostname});
        InternetHoneypots.update({_id: hp._id}, {$set:{ip: event.event_payload.ip}});
      }).run();
    }
  } catch (err) {
    console.log(err);
    console.log('Bad msg');
  }
}
