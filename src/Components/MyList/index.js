import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { AddChat } from './AddChat'
import { ChatItem } from './ChatItem'


export const MyList = ({ chats, onDeleteChat, onAddChat }) => {
  return (
    <>
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
            <AddChat onAddChat={onAddChat} />
          </ListItem>
      </List>
    </>
  );
};