import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { MessageField } from './Components/MessageField';
import { ChatList } from './Components/ChatList';


function App() {
  const [messages, setMessages] = useState([
    { text: "Hi", author: "Me", id: 1 },
  ]);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages([...messages, newMessage]);
  }, [messages]);

  useEffect(() => {
    if(messages.length && messages[messages.length - 1].author !== "Bot") {
      const timeout = setTimeout(() => {
            const newMessage = {text: "Hello, I am Bot!", author: "Bot", id: Date.now(),};
            setMessages([...messages, newMessage]);
          }, 1000);
          return () => clearTimeout(timeout);
      }
    
  }, [messages]);
  
  return (
   <div>
     <div className='ChatList'>
       <div>
        <ChatList />
      </div>
      <div>
        <MessageField messages={messages} />
        <Form onSendMessage={handleSendMessage} />
      </div>
    </div>
     
   </div>
  );
}

export default App;
