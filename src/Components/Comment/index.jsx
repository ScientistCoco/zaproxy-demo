import React from 'react';
import { User } from "../../Assets";
import './index.scss';

const Comment = (props) => {
  const { name, comment, contactLink } = props;

  const renderName = () => (
    <p className="Comment_User"> 
      {contactLink ? (<a href={contactLink}>{name} :</a>) : 
        `${name} : `
      }
    </p>        
  )

  return (
    <div className="Comment">
      <span className="Comment_Avatar"><User/></span>
      <div className="Comment_Content">
        {renderName()}
        <p className="Comment_Text">{comment}</p>
      </div>
    </div>
  )
}

export default Comment;