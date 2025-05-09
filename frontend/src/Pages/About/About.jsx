import React from 'react';
import './About.css';
import sneha from './sneha4.png';
import { Link } from 'react-router-dom'
import instagram_icon from './instagram_icon.png'
import pintrest_icon from './pintester_icon.png'
import whatsapp_icon from './whatsapp_icon.png'
const About = () => {
  return (

    <div className='section2'>
      <div className='container1'>
        <div className='content-section2'>
          <div className='title'>
            <h1>About Us</h1>
          </div>
          <div className='content1'>
            <h3>
              Welcome to StyleNew — where trends are born, not followed.
            </h3>
            <p>
              Our journey started in 2025, and we have been growing ever since, thanks to our loyal customers.We’re more than a fashion site; we’re a style movement. Curated for the bold, the curious, and the effortlessly cool, our collections blend runway energy with street-smart edge. Think of us as your digital closet upgrade — always fresh, always forward. At StyleNew, it’s not just what you wear, it’s how you own it.
            </p>
            <div className="button2">
              <button >Read More</button>
            </div>
          </div>
          < div className="social">
            <Link to="https://www.instagram.com/hi_itz_snehaa"><img className='social1' src={instagram_icon} alt="" /></Link>
            <img className='social1' src={pintrest_icon} alt="" />
            <Link to="https://www.whatsapp.com/8100851911"><img className='social1' src={whatsapp_icon} alt="" /></Link>
          </div>
        </div>
        <div className="image-section2">
          <img src={sneha} alt='sneha' />
        </div>
      </div>
    </div>
  );
};

export default About;
