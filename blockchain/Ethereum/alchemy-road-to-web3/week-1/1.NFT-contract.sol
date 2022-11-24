// Allows other developers to use our code except for commercial use
// SPDX-License-Identifier: MIT
/*
    tells the compiler what version of solidity we are using,
    ^ symbol defines that any version 0.8.0 to 0.8.9 is valid to compile,
    without it, it means that only the defined version can be used to compile the code
*/
pragma solidity ^0.8.4;

/*
    imports open zeppelin libraries to be used by the program (contract)
*/
// import "@openzeppelin/contracts@4.7.3/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721Enumerable.sol";
// import "@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721URIStorage.sol";
/* needed for onlyOwner */
// import "@openzeppelin/contracts@4.7.3/access/Ownable.sol";
// import "@openzeppelin/contracts@4.7.3/utils/Counters.sol";

/* 
    contract keyword initializes a contract (similar to JS classes),
    it can inherit properties, functions and methods from objects like erc token standards (erc-20, erc-721, erc-1155, etc),
    inheritance is set with the is keyword,

*/

contract Genesis is ERC721, ERC721Enumerable, ERC721URIStorage {
    /*Ownable*/
    /* 
        using keyword is initializing the counters library to keep track of NFT IDs,
    */
    using Counters for Counters.Counter;

    /* 
        creating a counters method called counter,
        there can be private, public, external or internal properties,
        all properties marked with the private keyword can only be used by the smart contract itself

    */
    Counters.Counter private _tokenIdCounter;

    /* 
        its good practice to uppercase constant variable names,
        sets the max supply of the collection to 10,000 units
    */
    uint256 MAX_SUPPLY = 10000;

    /* 
        constructor keyword is building, creating, instantializing the smart contract,
        constructor() smart contract type("name","symbol") {}

    */
    constructor() ERC721("Genesis", "GNS") {}

    /*
        function keyword mints the NFT,
        the function associates the NFT to a(n):
            address
            tokenURI
            tokenId
        string is saved into the memory, the string in this case is the URI string,
    
        public means that this function is accessible anywhere by anyone,
        onlyOwner defines access to the safeMint function only by the owner of the contract, in this case the address that deplouys it,

    */

    function safeMint(address to, string memory uri) public {
        /*onlyOwner*/
        /* 
            the uint256 variable called tokenId stores the current tokenId that the counter is keeping track of,

        */
        uint256 tokenId = _tokenIdCounter.current();
        // increments the counter making sure the next NFT to be minted will have an incremental number
        /* 
            control logic that limits minting more NFTs after all 10,000 have been minted.
        */
        required(tokenId <= MAX_SUPPLY, "sorry, all NFTs have been minted");
        _tokenIdCounter.increment();
        // calls the function passing the address to and tokenId
        _safeMint(to, tokenId);
        // assigns a URI to the tokenId, URI contains the metadata with all the properties 
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
