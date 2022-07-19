const UniqueAsset = artifacts.require("UniqueAsset");

module.exports = function (deployer) {
    deployer.deploy(UniqueAsset);
}