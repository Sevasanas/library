import React from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

import { Link } from 'react-router-dom';


export const MyList = ({ chats }) => {
  return (
    <List>
      {Object.values(chats).map((c) => (
        <ListItem key={c.id}>
          <Link to={`/chats/${c.id}`}>{c.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};