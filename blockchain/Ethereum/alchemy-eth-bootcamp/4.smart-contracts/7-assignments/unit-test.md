# unit test in hardhat

https://www.chaijs.com/

https://www.chaijs.com/api/bdd/

https://www.chaijs.com/api/assert/

https://mochajs.org/#hooks

https://ethereum-waffle.readthedocs.io/en/latest/matchers.html

# project structure setup

- npm init -y
- npm install --save-dev hardhat
- npx hardhat
- create a javascript project
- YES to all options
- create a faucet.sol contract

good testing cases
- owner being set correctly in the constructor
- require clause should work in the `withdraw` function
- `destroyFaucet` should only be called by the owner.

