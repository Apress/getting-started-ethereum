const PriceConsumer = artifacts.require("PriceConsumer");

module.exports = function(deployer){
    deployer.deploy(PriceConsumer);
};