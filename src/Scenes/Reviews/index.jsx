import React, { useState, useEffect } from "react";
import { get, post } from '../../utilities';
import { Wave } from "../../Assets";
import { Button, Comment, Header, TextArea, TextInput } from "../../Components";
import './index.scss';

const Reviews = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState();
  const [comment, setComment] = useState();
  const [contactLink, setContactLink] = useState();
  const [errors, setErrors] = useState({ name: false, comment: false });

  const fetchComments = async () => {
    const res = (await (await get('/reviews')).json()).data;

    setComments(res);
  }

  const addComment = async (name, comment, contactLink) => {
    await post('/reviews', { name, comment, contactLink });
  }

  const submitReview = async (e) => {
    e.preventDefault();

    setErrors({
      name: !!!name,
      comment: !!!comment
    });

    if (!!name && !!comment) {
      await addComment(name, comment, contactLink);
      await fetchComments();
      setName('');
      setComment('');
      setContactLink('');
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="Reviews">
      <Header />
      <section className="Reviews_UserInput">
        <h2>Add a review</h2>
        <br/>
        <form className="Reviews_Form">
          <TextInput label="Name" onChange={(e) => setName(e.target.value)} value={name}/>
          {errors.name && <span className="Reviews_Form_Error">Name is required</span>}
          <br/>
          <br/>
          <TextArea label="Comment" onChange={(e) => setComment(e.target.value)} value={comment}/>    
          {errors.comment && <span className="Reviews_Form_Error">Comment is required</span>}
          <br/>
          <br/>
          <TextInput label="Contact Link" onChange={(e) => setContactLink(e.target.value)} value={contactLink}/>   
          <br/>       
          <Button onClick={submitReview}>Submit</Button>    
        </form>
      </section>
      <div className="Reviews_Svg">
        <Wave />
      </div>
      <section className="Reviews_Overview">
        <h2>Reviews</h2>
        <br/>
        {!!comments.length && comments.map(item => 
          <Comment name={item.name} comment={item.comment} contactLink={item.contactLink}/>
        )}
      </section>
    </div>
  )
}

export default Reviews;
