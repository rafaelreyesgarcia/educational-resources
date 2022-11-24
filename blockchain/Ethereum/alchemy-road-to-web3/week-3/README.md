NFTs with on-chain metadata

    technologies covered
        hardhat
        javascript
    
    best practice to store metadata
        centralized object storage
        decentralized solutions (IPFS)

    storing big amounts of data is too expensive on-chain

    the issue is that the smart contract can't communicate with the metadata off-chain,

    L2 chains
        polygon
        starknet
        optimism
        arbitrum
        aztec
    
    l2 chains reduce gast costs

    objectives
        create fundamentals of a blockchain game
        deploy on polygon mumbai testnet
        how to store NFT metadata on-chain
        process and store on-chain SVG images and JSON objects
        modify metadata based on interactions with the NFT
    
    polygon PoS
        lower gas fees, faster transactions

        EVM-compatible scaling platform

    start a new npm project (default settings ok)
        npm init -y
            creates package.json
        npm install --save-dev hardhat
    
    initialize hardhat to create project boilerplates
        npx hardhat init
        create a javascript project
    
    install OpenZeppelin package to access ERC721 template
        npm install @openzeppelin/contracts

    cleanup and modify boilerplates
        modify hardhat.config.js to connect to polygon mumbai and polygonscan

        delete both test-deploy.js and lock.sol templates

        inside hardhat.config.js add the networks property in the module.exports object and nested inside, the network with url and accounts properties,

        add an etherscan property to module.exports

    create the contract
        start with a template
            SPDX license identifier
            pragma
            and required openzeppelin libraries
    
    create the contract
        the contract inherits from ERC721URIStorage
        initialize Strings and Counters libraries
            methods inside these libraries can be associated to solidity types
        mapping tokenIdToLevels global variable
            used to store the level of the NFT associated with the tokeId
        declare constructor function of contract
        create generateCharacter function
            creates the SVG image on-chain based on the level of the NFT
        create getLevels function
            uses the tokenIdToLevels mapping declared in the contract, and we pass the tokenId we want the level for
        create getTokenURI function
            will use the tokenId parameter to generate the image and build the name of the NFT,
        create mint function
            creates a new NFT
            initializes the level value
            sets the token URI
        create the train function
            make sure the trained NFT exists
            increment the level of the NFT to 1
            update the token URI to reflect the training
    
    deploy the smart contract
        create an .env file in the root folder
        add environmental variables 
            TESTNET_RPC=""
            PRIVATE_KEY=""
            POLYGONSCAN_API_KEY=""
    
    create a polygon mumbai application on alchemy
        copy API HTTPS URL and paste it as the value of TESTNET_RPC
        copy metamask private key as a value of PRIVATE_KEY
        copy API_KEY token from polygonscan account into POLYGONSCAN_API_KEY

    create a deploy script
        a script that tells hardhat how to deploy a smart contract based on network parameters

    install dotenv
            npm install dotenv
    
    Install @nomiclabs/hardhat-waffle
        npm install @nomiclabs/hardhat-waffle

    install @nomiclabs/hardhat-etherscan
        npm install @nomiclabs/hardhat-etherscan
        
    Compile and deploy the smart contract
        npx hardhat compile

    deploy smart contract to mumbai polygon testnet
        npx hardhat run scripts/deploy.js --network mumbai
    
    verify contract
        contract code is not readable when its not verified,
        to verify run the following code
            npx hardhat verify --network mumbai SMART_CONTRACT_ADDRESS
    
    interact with smart contract on polygonscan
        write contract
        connect a wallet
        mint function write
        train function input id 1 and write
        

        

