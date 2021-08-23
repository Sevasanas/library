import React, { useCallback, useEffect, useState } from 'react';
import firebase from 'firebase';
import './home.css';
import { Form } from '../../Components/Form';
import { MessageField } from '../../Components/MessageField';
import { useParams } from 'react-router-dom';
import { MyList } from '../../Components/MyList';
import { useSelector } from 'react-redux';
import { selectName } from '../../store/profile/selectors';


export function Chats() {
  
  const { chatId } = useParams();

  const [chats, setChats] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const db = firebase.database();
    db.ref("chats").on("value", (snapshot) => {
      let newChats = {};
      snapshot.forEach((snap) => {
        const currentChat = snap.val();
        newChats[currentChat.id] = currentChat;
      });

      setChats(newChats);
    });
  }, []);

  useEffect(() => {
    const db = firebase.database();
    db.ref("messages").on("value", (snapshot) => {
      let newMessages = {};
      if (!snapshot) {
        return;
      }
      snapshot.forEach((snap) => {
        const currentMsgs = snap.val();
        if (newMessages[snap.key]) {
          newMessages[snap.key].concat(Object.values(currentMsgs));
        } else {
          newMessages[snap.key] = Object.values(currentMsgs);
        }
      });

      setMessages(newMessages);
    });

    return db.ref("messages").off;
  }, []);

  const addChat = (id, name) => {
    const db = firebase.database();
    db.ref("chats").child(id).set({
      name,
      id,
    });
  };

  const removeChat = (id) => {
    const db = firebase.database();
    db.ref("chats").child(id).remove();
  };

  const name = useSelector(selectName);

  const handleSendMessage = useCallback(
    (newMessage) => {
      const db = firebase.database();
      db.ref("messages")
        .child(chatId)
        .push({
          ...newMessage,
          author: name,
          id: `${chatId}-${Date.now()}`,
          chatId,
        });
    },
    [chatId, name]
  );
  
  
  return (
    <div>
      <div className='ChatList'>
        <div>
         <MyList 
         chats={chats} 
         onDeleteChat={removeChat}
         onAddChat={addChat}
         />
       </div>
       {!!chatId && (
         <div>
         <MessageField messages={[chatId] || []} />
         <Form onSendMessage={handleSendMessage} />
       </div>
       )}
       
     </div>
      
    </div>
   );
}


