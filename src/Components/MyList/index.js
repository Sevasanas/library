import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';



export const MyList = (props) => {
  const {
    chats,
  } = props;


    return (
      <List>
          {chats.map((item, index) => (
              <ListItem key={`${item.id}${index}`}>
                <Link to={`/home/${item.id}`}>
                <ListItemText primary={`${item.name}`} />
                </Link>
                
              </ListItem>
          ))}
      </List>
    );
  };