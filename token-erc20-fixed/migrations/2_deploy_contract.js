var ERC20FixedSupply = artifacts.require("./ERC20FixedSupply.sol");

module.exports = function(deployer){
    deployer.deploy(ERC20FixedSupply);
}