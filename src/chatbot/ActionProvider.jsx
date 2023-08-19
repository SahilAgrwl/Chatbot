import React from 'react';
import Option2 from '../Options/Option2';
import config from './config';


class ActionProvider{
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage ;
    this.setState = setStateFunc ;
  }

  Enroll = () => {
    const message = this.createChatBotMessage("Hello, Welcome to student info system!", 
    {widget: "option2"}
    ) 
   this.addMessageToState(message);
};

Name = () => {
  const message = this.createChatBotMessage("Enter your Name")
 this.addMessageToState(message);
};
Age = () => {
  const message = this.createChatBotMessage("Enter your Age")
 this.addMessageToState(message);
};
Exit = () => {
  const message = this.createChatBotMessage("Thank you. In 5 seconds, bot will exit")
 this.addMessageToState(message);
};
ok = () => {
  setTimeout(() => {
    const message = this.createChatBotMessage("Your name Gowtham aged 27 has been added to student system. You may now exit.")
   this.addMessageToState(message);
  }, 5000) ;
};

addMessageToState = (message) => {
  this.setState((prevState) => ({
    ...prevState,
    messages: [...prevState.messages, message],
  }));
}
};

export default ActionProvider;