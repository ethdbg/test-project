var Migrations = artifacts.require('./Migrations.sol');
var ConvertLib = artifacts.require('./ConvertLib.sol');
var MetaCoin = artifacts.require('./MetaCoin.sol');
var greeter = artifacts.require('./greeter.sol');

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(greeter);
}
