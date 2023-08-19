import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../Options/Options.jsx';
import Option2 from '../Options/Option2.jsx';

const config = {
  botName : "LearningBot" ,
  initialMessages: [
    createChatBotMessage('Enter into Student Info System', {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName : "options" ,
      widgetFunc : (props) => <Options {...props} />
    },
    {
      widgetName : "option2" ,
      widgetFunc : (props) => <Option2 {...props} />
    }
  ],
};


export default config;