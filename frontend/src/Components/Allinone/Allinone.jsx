import React from 'react';
import Indianware from "./Indianware.png"
import Westernwear from "./Westernwear.png"
import Footwear from "./Footwear.png"
import Lingerie from "./Lingerie.png"
import './Allinone.css';
import { Link } from 'react-router-dom'
const Allinone = () => {
    return (
        <div className='allinone'>
            <div className="section4">
                <div className='box1'><Link to="../Indianware"><img src={Indianware} alt='indianware' className='lipstick' /></Link></div>
                <div className='box1'><img src={Westernwear} alt='westernwear' className='lipsticshade' /></div>

                <div className='box1'><img src={Footwear} alt='footwear' className='lipstickgirl' /></div>
                <div className='box1'><img src={Lingerie} alt='lingerie' className='lipsticvit' /></div>

            </div>

        </div>
    );
};

export default Allinone;
