Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.render('home');
});

Router.route('/internet', function() {
  this.render('internetHoneypots');
});

Router.route('/intranet', function() {
  this.render('intranetHoneypots');
});

Router.route('/analytics', function() {
  this.render('analytics');
});


Router.route('/internet/add', function() {
  this.render('addInternetHoneypot');
});

Router.route('/intranet/add', function() {
  this.render('addIntranetHoneypot');
});
