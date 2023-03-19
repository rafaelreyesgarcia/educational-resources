const ethers = require('ethers')
/**
 * GETTER
 * Find the `value` stored in the contract
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @return {promise} a promise which resolves with the `value`
 */
async function getValue(contract) {
  return await contract.value()
}

/**
 * Modify the `value` stored in the contract
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @return {promise} a promise of transaction
 */
function setValue(contract) {
    return contract.modify(3)
}

async function callAdder(contract) {
  const sum = await contract.add(1, 4);
  console.log(sum);
}

/**
 * Transfer funds on the contract from the current signer 
 * to the friends address
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @param {string} friend - a string containing a hexadecimal ethereum address
 * @return {promise} a promise of the transfer transaction
 */
function transfer(contract, friend) {
    return contract.transfer(friend, 50);
}

/**
 * Set the message on the contract using the signer passed in
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @param {ethers.types.Signer} signer - ethers.js signer instance
 * @return {promise} a promise of transaction modifying the `message`
 */
function setMessage(contract, signer) {
    return contract.connect(signer).modify('hello');
}

// createUsers.js

async function createUsers(contract, signers) {
  for (let i = 0; i < signers.length; i++) {
    await contract.connect(signers[i]).createUser()
  }
}

async function donate(contract, charityId) {
  await contract.donate(charityId, {
    value: ethers.utils.parseEther('5')
  })
}

/**
 * Deposit at least 1 ether into the contract 
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @return {promise} a promise of the deposit transaction 
 */
function deposit(contract) {
  return contract.deposit({
    value: ethers.utils.parseEther('1')
  })
}