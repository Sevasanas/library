import React, { useCallback } from 'react';
import './home.css';
import { Form } from '../../Components/Form';
import { MessageField } from '../../Components/MessageField';
import { useParams } from 'react-router-dom';
import { MyList } from '../../Components/MyList';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChat, sendMessageWithReply } from '../../store/chats/actions';


export function Chats() {
  
  const { chatId } = useParams();

  /*const [messages, setMessages] = useState([
    { text: "Hi", author: "Me", id: 1 },
  ]);*/

  const chats = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback((newMessage) => {
      dispatch(sendMessageWithReply(chatId, newMessage));
  },
    [chatId]
  );

  const handleDeleteChat = useCallback((id) => {
    dispatch(deleteChat(id));
  }, []);
  
  
  return (
    <div>
      <div className='ChatList'>
        <div>
         <MyList 
         chats={chats} 
         onDeleteChat={handleDeleteChat}
         />
       </div>
       {!!chatId && (
         <div>
         <MessageField messages={chats[chatId]?.messages} />
         <Form onSendMessage={handleSendMessage} />
       </div>
       )}
       
     </div>
      
    </div>
   );
}


