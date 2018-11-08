import React from 'react';
import faceImg from '../../assets/homepage/home-face.png'
import faceOutline from '../../assets/homepage/home-outline.svg'

const HomeImage = props => (
    <div>
        <img className='face-img' src={faceImg}/>
        <img className='face-outline' src={faceOutline} />
    </div>
)

export default HomeImage