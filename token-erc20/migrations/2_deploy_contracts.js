var ERC20MinerReward = artifacts.require("./ERC20MinerReward.sol");

module.exports = function(deployer){
    deployer.deploy(ERC20MinerReward);
}