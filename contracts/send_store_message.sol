pragma solidity >=0.4.16 <0.9.0;

contract SendStoreMessage {
    string sentMessage;
    string storedMessage;
    bool messageConfirmation;

    function sendData(string data) public {
        sentMessage = data;
    }

    function storeData(string data) public {
        storedMessage = data;
    }

    function retrieveData(string data) private {
        storedMessage = data;
        return data;
    }

    function emitStoredMessageState(string alert) public {
        messageConfirmation = alert;
    }
}