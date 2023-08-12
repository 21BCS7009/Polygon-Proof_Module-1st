// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Project1 is ERC721URIStorage, Ownable {
    constructor() ERC721("NFTPOOLHUB", "NPH") {}

    function mint( address _to,uint256 _tokenId, string calldata _uri) external onlyOwner {
        _mint(_to, _tokenId);
        _setTokenURI(_tokenId, _uri);
    }
    
}
