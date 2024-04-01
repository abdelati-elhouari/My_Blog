import React from 'react';
import './style/Home.css'
import Postes from './Postes';
import blogPosts from './data/Postes.json'



const Home = () => {
  return (
    <div>
        <div className='title'>
            <h2>MY BLOG</h2>
        </div>
        
        <Postes  blogPosts={blogPosts}/>
    </div>
  );
}

export default Home;