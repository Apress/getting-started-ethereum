const erc20FixedSupply = artifacts.require("erc20FixedSupply");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("erc20FixedSupply", function (accounts) {
  it("should assert true", async function () {
    await erc20FixedSupply.deployed();
    return assert.isTrue(true);
  });

  it("should return total supply of 1000", async function(){
    const instance = await erc20FixedSupply.deployed();
    const totalSupply = await instance.totalSupply();

    assert.equal(totalSupply, 1000);
  });

  it("should transfer 150 FIX", async function(){
    const instance = await erc20FixedSupply.deployed();
    await instance.transfer(accounts[1], 150);

    const balanceAccount0 = await instance.balanceOf(accounts[0]);
    const balanceAccount1 = await instance.balanceOf(accounts[1]);

    assert.equal(balanceAccount0.toNumber(), 850);
    assert.equal(balanceAccount1.toNumber(), 150);
  })
});
