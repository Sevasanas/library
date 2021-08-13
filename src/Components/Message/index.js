import React from 'react';
import { useSelector } from 'react-redux';
import { selectName } from '../../store/profile/selectors';



export const Message = (props) => {
    const {
        text,
        author,
      } = props;
      const name = useSelector(selectName)
    
      return (
        <div>
            {author === "Me" ? name : author} : {text}
        </div>
      );
}
   

