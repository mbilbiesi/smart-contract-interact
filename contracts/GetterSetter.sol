// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract GetterSetter {
    uint private value;

    function setValue(uint _value) public {
        value = _value;
    }

    function getValue() public view returns (uint) {
        return value;
    }
}
