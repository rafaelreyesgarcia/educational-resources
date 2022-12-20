const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const { keccak256 } = require("ethereum-cryptography/keccak")

app.use(cors());
app.use(express.json());

const privateKeys = [
  '3194a24e6587dcdaf50db239031791b073766cb299c1c35b6f606e72f08046d1',
  'a64b8dece8e834016103ba392c882ce687c5243ffc2192fe4821dd0c958afb58',
  '924a736fb50f4366492c32e556623b764a7615fb8de9c2def60b61a4ee8e2e4a'
];

const publicKeys = [
  '04761021e44b5f3b3d90f2a0d16b9b539cfd47c879bf9886ae6d8ebf1c5621c27fc7c3a034f8b102172b7b705a14cb0d6e6d2a6276ab443c5544613ba4b43c93dc',
  '04df38c628c0c6ebb3d01c360fca040d9b47ccecf7912e7a747bbfe540212a362258d0cb5bfd0a89bc512f8f16497039253cf4ff5dd279b04430fe1aa20b64fa80',
  '04543d0e7b6e57e124b4073d665bfa5f25efada3eadcfa4b8946216bfbf28bffc282b6a498549eff2b0b8d234f3fa9391baf688169cd3722958ce6ffe8dce5586d'
];

const publicAddresses = [
  'e24390ae4a8b8ad802bd0ee4793f560e9782f277',
  'e45a899d89711a52cf1fd3dce5d5fc11d60d1077',
  'b28ce79d008f688259d080d64be3b4f0ff96eb7a'
];

const balances = {
  "e24390ae4a8b8ad802bd0ee4793f560e9782f277": 100,
  "e45a899d89711a52cf1fd3dce5d5fc11d60d1077": 50,
  "b28ce79d008f688259d080d64be3b4f0ff96eb7a": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  // TODO: get a signature from client side 
  // recover public key from signature
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
