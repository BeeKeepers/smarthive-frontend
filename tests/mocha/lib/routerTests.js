if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe('Router', function(){
      it('should be defined', function(){
        chai.expect(Router).not.to.be.undefined;
      });
    });
  });
}
