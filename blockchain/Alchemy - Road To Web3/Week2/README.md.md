buy me a coffee
    landing page where anyone can send money as a gift/thank you

    you can send money with 
        bank account
        credit card
    
    decentralized applications can be accessed by anyone with a wallet, thus removing the entry barrier of requiring a bank account or credit card,

    technologies required for the challenge
        alchemy
        hardhat
            generates project template
            test out smart contract code
            deploy to goerli testnet
        ether.js
        goerli testnet
    
    objectives of the challenge
        use the hardhat development environment to
            build
            test
            deploy
        
        connect metamask to goerli tesnet

        goerlifaucet

        ether.js to interact with deployed smart contract,

        build front end for dapp with Replit

    Steps
        open terminal to create a new directory in desired location,
            mkdir BuyMeACoffee-contracts
        access the directory
            cd BuyMeACoffee-contracts
        inside the directory, start a new npm project (default settings ok)
            npm init -y
            npm install --save-dev hardhat
            this creates a package.json
        create a sample project
            npx hardhat
            create a javascript object
            this can help reinstall dependencies
                npm install --save-dev hardhat@^2.9.3 @nomiclabs/hardhat-waffle@^2.0.0 ethereum-waffle@^3.0.0 chai@^4.2.0 @nomiclabs/hardhat-ethers@^2.0.0 ethers@^5.0.0
        important files in the project
            contracts
                folder for smart contracts for BuyMeACoffee logic
            scripts
                deploy logic 
                buy-coffee 
                withdraw logic 
            hardhat.config.js
        
        create smartcontract.sol

        create a buy-coffee.js to test the .sol contract

        run the .js file
            npx hardhat run scripts/buy-coffe.js
        
        create a deploy.js file to deploy the .sol contract

        run the deploy.js to verify its deploying in the local machine
            npx hardhat run scripts/deploy.js
        
        modified hardhat.config.js

        install dotenv
            npm install dotenv
        
        install a touch client 
            npm install touch-cli -g

        create a .env file
        touch .env

        populate the .env file with the variables we need
            Alchemy HTTPS URL
            Alchemy API key
            Metamask private key

        get goerli ETH 
            https://goerlifaucet.com/
        
        run the deploy script with the goerli flag
            npx hardhat run scripts/deploy.js --network goerli

        create a withdraw.js script

        fork front end
            https://replit.com/@thatguyintech/BuyMeACoffee-Solidity-DeFi-Tipping-app
        
        update contractAddress in pages/index.js 
        to the contract address we deployed

        update the name strings to match your own name

        ensure the contract ABI matches the contract in
        utils/BuyMeACoffee.json
            contract ABI is found under artifacts/contracts/contractName.json
            
            The ABI is generated everytime the smart contract is compiled,
        


        
        
