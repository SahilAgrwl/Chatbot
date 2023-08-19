// in MessageParser.jsx
import React from 'react';
import ActionProvider from './ActionProvider';

class MessageParser{
  constructor(actionProvider){
    this.actionProvider = actionProvider ;
  }

  parse (message) {
    console.log(message) ;

    if(message.includes("Gowtham")){
      this.actionProvider.Age();
    }
    if(message.includes("27")){
      this.actionProvider.Exit() ;
      this.actionProvider.ok();
    }
  }
};

export default MessageParser;