import React from 'react';



export const Message = (props) => {
    const {
        text,
        author,
      } = props;
    
      return (
        <div>
            {author} : {text}
        </div>
      );
}
   

