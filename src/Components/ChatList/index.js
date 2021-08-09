import React from 'react';
import { MyList } from '../MyList'



export function ChatList() {
    const chats = [
      {
          name: "Chat1",
          id: "chat1",
      },
      {
          name: "Chat2",
          id: "chat2",
      },
      {
          name: "Chat3",
          id: "chat3",
      },
  ];
  
    
  
      return (
          <div className="root">
        <MyList chats={chats}  />
      </div>
      );
  }