import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';



export const MyList = (props) => {
  const {
    chats,
  } = props;


    return (
      <List>
          {chats.map((item, index) => (
              <ListItem key={`${item.id}${index}`}>
                <ListItemText primary={`${item.name}`} />
              </ListItem>
          ))}
      </List>
    );
  };