import React from 'react';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteChatWithFB } from '../../store/chats/actions';
import './myList.css';

export const ChatItem = ({
   id, 
   name, 
   onDelete
   }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteChatWithFB(id));
  };

  return (
    <ListItem>
      <Link to={`/chats/${id}`}>{name}</Link>
      <button className="button" onClick={handleDelete}>DELETE</button>
    </ListItem>
  );
}