pragma solidity ^0.4.17;  // specific the verison of the solidity.

contract Inbox {

    string public message;

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}