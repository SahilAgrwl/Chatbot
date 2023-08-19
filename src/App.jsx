import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from './chatbot/config'
import ActionProvider from './chatbot/ActionProvider'
import MessageParser from './chatbot/MessageParser'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
function App() {
  return (
    < div >
    <Chatbot
    config={config}
    actionProvider={ActionProvider}
    messageParser={MessageParser}
    />
    </div>
  )
} ;

export default App
