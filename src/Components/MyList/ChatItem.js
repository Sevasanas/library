import React from 'react';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './myList.css'

export const ChatItem = ({
   id, 
   name, 
   onDelete
   }) => {
  const handleDelete = () => {
    onDelete(id);
  }
  return (
    <ListItem>
      <Link to={`/chats/${id}`}>{name}</Link>
      <button className="button" onClick={handleDelete}>DELETE</button>
    </ListItem>
  );
}