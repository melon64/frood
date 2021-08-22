import React from 'react';
import '../../App.css';
import { Button } from '../Navigation/Button/Button';
import './styles.css';

function Home() {
  return (
    <div className='hero-container'>
      <video src='/videos/video2.mp4' autoPlay loop muted />
      <h1 className='fade'>RECIPES FROM YOUR INGREDIENTS</h1>
      <p className='fade'>Never have trouble with meal prep again.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          JOIN NOW
        </Button>
      </div>
    </div>
  );
}

export default Home;