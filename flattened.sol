yarn run v1.22.18
$ /home/kali/Desktop/zkSync-Started/node_modules/.bin/hardhat flatten
// Sources flattened with hardhat v2.10.0 https://hardhat.org

// File contracts/Greeter.sol

//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

contract Greeter {
    string public greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
Done in 4.83s.
