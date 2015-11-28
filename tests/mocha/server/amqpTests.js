if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe('AMQP', function() {
      describe('A channel', function() {
        it('should be defined', function() {
          chai.expect(Channel).not.to.be.undefined;
        });
        it('should declare an exchange', function() {
          chai.expect(Channel.exchange).to.be.eql('smarthive');
        });
      });
    });
  });
}
