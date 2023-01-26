// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@klaytn/contracts/KIP/token/KIP7/KIP7.sol";

contract MyToken is KIP7 {
    constructor() KIP7("TEST", "TEST") {
        _mint(msg.sender, 10000000000 * 10 ** decimals());
    }
}