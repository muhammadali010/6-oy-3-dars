import React, { useState } from 'react';
import '../Selector/index.css'

const Post = ({ content }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="post">
      <p>{content}</p>
      <div className="buttons">
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleDislike}>Dislike ({dislikes})</button>
      </div>
    </div>
  );
};

export default Post;
