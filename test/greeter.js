var greeter = artifacts.require('greeter');

contract('greeter', function() {
  it('should return a greeting', function() {
    return greeter.deployed().then(function(instance) {
      return instance.greet.call();
    }).then(function(greeting) {
      assert.equal(greeting, 'Hello, this is a greeting');
    });
  });
});
