// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC721 is ERC721Enumerable, Ownable {
    string private _promptDescription;

    constructor(string memory name, string memory symbol, string memory baseURI) ERC721(name, symbol) {
        _setBaseURI(baseURI);
    }

    function promptDescription() public view returns (string memory) {
        return _promptDescription;
    }

    function setPromptDescription(string memory prompt) external onlyOwner {
        _promptDescription = prompt;
    }

    function _baseURI() internal view override returns (string memory) {
        return "https://ipfs.io/ipfs/"; // Update this with the base URI where your images are stored on IPFS
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }
}
