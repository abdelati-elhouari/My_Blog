import React from 'react';
import "./style/Postes.css"
import { Link } from 'react-router-dom';

const Postes = ({blogPosts}) => {
    return (
        <div >  
        {blogPosts.map(post => (
            <div className="article" >
                <div className='article-child'>
                    <img className="post-card-image" src={require(`./Images/${post.image}`)}/>
                </div>
                <div className="article-child">
                    <header className="post-card-header">
                        <h2 className="post-card-title">{post.title}</h2>
                    </header>
                    <hr className='hr'/>
                    <section className="post-card-content">
                            <p>{post.content}</p>
                    </section>
                    <div className='btn'>
                    <Link to={ `/post/${post.id}`} className='link'>Read more 🡺</Link>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
};

export default Postes;
