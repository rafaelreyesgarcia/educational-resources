const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const { toHex } = require("ethereum-cryptography/utils");

const publicKeys = [
  '04761021e44b5f3b3d90f2a0d16b9b539cfd47c879bf9886ae6d8ebf1c5621c27fc7c3a034f8b102172b7b705a14cb0d6e6d2a6276ab443c5544613ba4b43c93dc',
  '04df38c628c0c6ebb3d01c360fca040d9b47ccecf7912e7a747bbfe540212a362258d0cb5bfd0a89bc512f8f16497039253cf4ff5dd279b04430fe1aa20b64fa80',
  '04543d0e7b6e57e124b4073d665bfa5f25efada3eadcfa4b8946216bfbf28bffc282b6a498549eff2b0b8d234f3fa9391baf688169cd3722958ce6ffe8dce5586d'
];

const bytes = utf8ToBytes(publicKeys[0]);

console.log(bytes);

const keccak = keccak256(bytes);

console.log(keccak);

const last20Bytes = keccak.slice(-20);

console.log(last20Bytes);

const hex = toHex(last20Bytes);

console.log(hex);

let publicAddresses = publicKeys.map((pubkey) => {
  return toHex(keccak256(utf8ToBytes(pubkey)).slice(-20));
});

console.log(publicAddresses);