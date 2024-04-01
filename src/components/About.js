// About.js
import React from 'react';
import './style/About.css'
import pic3 from "./Images/pic3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <>
    <div className='about'>
      <h1 className="ATitel">My Blog</h1>
      <p>Thank you for taking the time to visit MY Blog . I'm excited to embark on this journey with you and help you unlock the full potential of programming languages. Together, let's code the future!</p>
    </div>
      <div className="container">          
        <div className="container-child" >
          <div className="about-img ">
              <img className="about-img Aimg" src={pic3}/>
          </div>
        </div>
        <div className="container-child" >
          <h1 className="containerTitel"> Why You Should Follow Us </h1>
          <p className="">Our blog is your one-stop destination for all things related to programming languages. From beginner-friendly tutorials to in-depth articles on advanced topics.</p>
          <p> <FontAwesomeIcon icon={faCheck}  style={{color: "#11e493",}} /> Comprehensive Learning Resource</p>
          <p> <FontAwesomeIcon icon={faCheck}  style={{color: "#11e493",}} /> Practical Insights and Tips</p>
          <p> <FontAwesomeIcon icon={faCheck}  style={{color: "#11e493",}} /> Diverse Content</p>
          <p> <FontAwesomeIcon icon={faCheck}  style={{color: "#11e493",}} /> Engaging Community</p>
          <p> <FontAwesomeIcon icon={faCheck}  style={{color: "#11e493",}} /> Stay Updated</p>
          <p> <FontAwesomeIcon icon={faCheck}  style={{color: "#11e493",}} /> Responsive Author Interaction</p>
        </div>       
      </div>
    </>
  );
}

export default About;
