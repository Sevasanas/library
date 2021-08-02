import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



export const MyList = ({ chats }) => {
  
    return (
      <List>
          {Object.values(chats).map((c) => (
            <ListItem key={c.id} />
          ))}
      </List>
    );
  };

 