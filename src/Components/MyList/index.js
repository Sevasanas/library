import React from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { AddChat } from './AddChat'
import { ChatItem } from './ChatItem'


export const MyList = ({ chats, onDeleteChat }) => {
  return (
    <List>
        {Object.values(chats).map((c) => (
          <ChatItem
            name={c.name}
            key={c.id}
            id={c.id}
            onDelete={onDeleteChat}
          />
        ))}
        <ListItem>
          <AddChat />
        </ListItem>
    </List>
  );
};