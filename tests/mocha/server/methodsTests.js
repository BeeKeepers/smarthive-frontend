if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe('Meteor methods', function() {
      describe('Create Internet Honeypot', function() {
        it('should be defined', function() {
          chai.expect(Meteor.methods).not.to.be.undefined;
        });
      });
    });
  });
}
