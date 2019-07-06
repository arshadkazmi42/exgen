const Compose = require('../lib/compose');

const API_FLAG = [ 'api' ];


describe('Verifies async features', function() {
  it('prints all help flags', function(){
    Compose(API_FLAG);
  });
});
