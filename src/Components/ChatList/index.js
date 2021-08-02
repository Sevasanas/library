import React from 'react';
import {List} from './index';



const ChatList = {
    chat1: {
        name: "Chat1",
        id: "chat1",
    },
    chat2: {
        name: "Chat2",
        id: "chat2",
    },
    chat3: {
        name: "Chat3",
        id: "chat3",
    },
};

function Page() {
    console.log(ChatList);

    return (
        <div className="root">
      <List  />
      
    </div>
    )
}

export default Page;
