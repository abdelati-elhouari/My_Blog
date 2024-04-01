import React, { useState, useEffect } from 'react';
import data from './data/Postes.json';
import { useParams } from 'react-router-dom';
import './style/Post.css';

const Post = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedPost = data.find(item => item.id === parseInt(id));
    setPost(selectedPost);
  }, [id]);

  if (!post) {
    return <div className='post'> </div>; 
  }

  return (
    <div className='post'>
      <div className='post-title'> 
        <h1> {post.title} </h1>
      </div>
      <div className='post-imag'>
        <img className="image" src={require(`./Images/${post.image}`)} alt={post.title} />
      </div>
      <div className='post-content'>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
