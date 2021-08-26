import React, { useCallback, useEffect, } from 'react';
import './home.css';
import { Form } from '../../Components/Form';
import { MessageField } from '../../Components/MessageField';
import { useParams } from 'react-router-dom';
import { MyList } from '../../Components/MyList';
import { useDispatch, useSelector } from 'react-redux';
import { selectName } from '../../store/profile/selectors';
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import {
  connectChatsToFB,
} from "../../store/chats/actions";
import {
  connectMessagesToFB,
  sendMessageWithFB,
} from "../../store/messages/actions";

export function Chats() {
  const { chatId } = useParams();

  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);
  const name = useSelector(selectName);

  useEffect(() => {
    dispatch(connectChatsToFB());
    dispatch(connectMessagesToFB());
  }, []);

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithFB(chatId, { ...newMessage, author: name }));
    },
    [chatId, name, dispatch]
  );
  return (
    <div>
      <div className='ChatList'>
        <div>
         <MyList 
          chats={chats}
         />
       </div>
       {!!chatId && (
         <div>
         <MessageField messages={messages[chatId] || []} />
         <Form onSendMessage={handleSendMessage} />
       </div>
       )}
       
     </div>
      
    </div>
   );
}


