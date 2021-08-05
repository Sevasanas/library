import React, { useCallback, useEffect, useState } from 'react';
import './home.css';
import { Form } from '../Form';
import { MessageField } from '../MessageField';
import { ChatList } from '../ChatList';
import { useParams } from 'react-router-dom';

const initialChats = {
    chat1: {
        messages: [{ text: "Hi", author: "Me", id:"chat1-1"}],
        name: "Chat1",
        id: "chat1",
    },
    chat2: {messages: [], name: "Chat2", id: "chat2"},
    
    chat3: {messages: [], name: "Chat3", id: "chat3"},
};


function Home() {
  const { chatId } = useParams();
  /*const [messages, setMessages] = useState([
    { text: "Hi", author: "Me", id: 1 },
  ]);*/

  const [chats, setChats] = useState(initialChats);

  const handleSendMessage = useCallback((newMessage) => {

    setChats({
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messages: [...chats[chatId].messages, newMessage],
        },
      });
    },
    [chats, chatId]
  );
    /*setMessages([...messages, newMessage]);
  }, [messages]);*/



  useEffect(() => {
    if (
      !chatId ||
      !chats[chatId]?.messages.length ||
      chats[chatId].messages[chats[chatId].messages.length - 1].author ===
        "Bot"
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "I am a robot",
        author: "Bot",
        id: Date.now(),
      };

      handleSendMessage(newMessage);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [chats]);

  return (
   <div>
     <div className='ChatList'>
       <div>
        <ChatList chats={chats}/>
      </div>
      {!!chatId && (
        <div>
        <MessageField messages={chats[chatId].messages} />
        <Form onSendMessage={handleSendMessage} />
      </div>
      )}
      
    </div>
     
   </div>
  );
}

export default Home;
