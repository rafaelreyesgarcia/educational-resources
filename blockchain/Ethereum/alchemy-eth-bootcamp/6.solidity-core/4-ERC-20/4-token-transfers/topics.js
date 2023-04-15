const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// first topic is indexed field used to filter logs by specific events
// the eth_getLogs method can retrieve all logs that match defined event
function firstTopic() {
  const eventSignature = "Transfer(address,address,uint256)"; // event signature of the event to listen to
  const bytes = utf8ToBytes(eventSignature); // converts event signature into a bytes array
  const digest = keccak256(bytes); // compute the hash of the bytes array
  return toHex(digest); // hash is converted to a hex string, this is the first topic
}

function secondTopic() {
  const address = '28c6c06298d514db089934071355e5743bf21d60';
  return '0'.repeat(24) + address; // address is concatenated with 24 leading zeros to create a 32-byte hex string
  // represent sthe address to be used as a topic in an event filter 32 bytes long is a requirement to be a topic
}

module.exports = { firstTopic, secondTopic }