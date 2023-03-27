const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');
// not needed as ethers is available in the global scope
const { ethers } = require('hardhat');

describe('token contract', function() {
  // avoid duplications, improve test performance with a fixture
  // setup function run only the first time is invoked
  // subsequent calls hardhat will reset state of network to right after the fixture was initially called.
  async function deployTokenFixture() {
    // only keeps the first account connected to the hardhat network
    const [owner, addr1, addr2] = await ethers.getSigners();
    // factory used to deploy new instances of a smart contract.
    const Token = await ethers.getContractFactory('Token');
    // starts the deployment and returns a promise that resolves to a contract.
    // this object will have all the methods (functions) for a smart contract
    const solidityToken = await Token.deploy();
    // the deployed() method happens when the transaction is mined
    await solidityToken.deployed();

    return {Token, solidityToken, owner, addr1, addr2};
  }
  it('deployment should assign total supply of tokens to owner', async function() {
    const { solidityToken, owner} = await loadFixture(deployTokenFixture);
    // calls the balanceOf method to retrieve the owner's balance
    const ownerBalance = await solidityToken.balanceOf(owner.address);
    expect(await solidityToken.totalSupply()).to.equal(ownerBalance);
  });

  it('should transfer tokens between accounts', async function() {
    const { solidityToken, addr1, addr2} = await loadFixture(deployTokenFixture);

    await solidityToken.transfer(addr1.address, 50);
    expect(await solidityToken.balanceOf(addr1.address)).to.equal(50);

    await solidityToken.connect(addr1).transfer(addr2.address, 25);
    expect(await solidityToken.balanceOf(addr2.address)).to.equal(25);
  })
});