import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { MessageField } from './Components/MessageField';


function App() {
  const [messages, setMessages] = useState([
    { text: "Hi", author: "Me", id: 1 },
  ]);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages([...messages, newMessage]);
  }, [messages]);

  useEffect(() => {
    if(!messages.length || messages[messages.length - 1].author === "Bot") {
      return;
    }
    const timeout = setTimeout(() => {
      const newMessage = {text: "Hello, I am Bot!", author: "Bot", id: Date.now(),};
      setMessages([...messages, newMessage]);
    }, 1000);

    return () => clearTimeout(timeout);
    
  }, [messages]);
  
  return (
   <div>
     <MessageField messages={messages} />
     <Form onSendMessage={handleSendMessage} />
   </div>
  );
}

export default App;
