import React, { useCallback, useEffect, useState } from 'react';
import './home.css';
import { Form } from '../../Components/Form';
import { MessageField } from '../../Components/MessageField';
import { useParams } from 'react-router-dom';
import { MyList } from '../../Components/MyList';

const initialChats = {
    chat1: {
        messages: [{ text: "Hi", author: "Me", id:"chat1-1"}],
        name: "Chat 1",
        id: "chat1",
    },
    chat2: {messages: [], name: "Chat 2", id: "chat2"},
    
    chat3: {messages: [], name: "Chat 3", id: "chat3"},
};


export function Chats() {
  
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
  
  useEffect(() => {
    const activeChat = chats[chatId];
    const activeMessageLength = activeChat?.messages?.length;
    let timeoutChat;

    if (
      activeMessageLength &&
      activeChat.messages[activeMessageLength - 1].author !== "Bot"
    ) {
      timeoutChat = setTimeout(() => {
        const newMessage = {
          text: "I am a robot",
          author: "Bot",
          id: Date.now(),
        };

        handleSendMessage(newMessage);
      }, 1000);
    }

    return () => {clearTimeout(timeoutChat)};
  }, [chats]);
  

  return (
   <div>
     <div className='ChatList'>
       <div>
        <MyList chats={chats}/>
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


