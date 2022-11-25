import React, { useState } from 'react';
import './App.css';
import GroomAndBride from './img/bride-groom.jpg';

const info = [
  {
    title: 'Where',
    content: '03 Kathmandu, Banasthali Kharibot',
  },
  {
    title: 'When',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Dress Code',
    content: 'Black and White',
  },
  {
    title: 'Message From Us',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

function App() {
  const [isInfoOPen, setIsInfoOpen] = useState(false);
  return (
    <div className='app'>
      {isInfoOPen ? <Info /> : <Cover setIsInfoOpen={setIsInfoOpen} />}
    </div>
  );
}

export default App;

const Cover = ({ setIsInfoOpen }: any) => {
  return (
    <div className='container'>
      {/* upper */}
      <div className='upper'>
        <div className='text'>
          <p>PLease join us celebration of our wedding</p>
        </div>
        <div className='line'></div>
        <div className='link'>
          <p onClick={() => setIsInfoOpen(true)}> click here for information</p>
        </div>
      </div>

      {/* middle section */}
      <div className='middle'>
        <h1>22</h1>
        <h1>12</h1>
        <h1>03</h1>
      </div>

      {/* bottom section */}
      <div className='bottom'>
        <div className='text test1'>
          <p>Nitisha Bhattarai</p>
        </div>
        <div className='line'></div>
        <div className='text test2'>
          <p> Pankaj Adhikari </p>
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='names'>
          <div className='bride'>
            <p>Nitisha Bhattarai</p>
          </div>
          <div className='middle-line'>
            <div className='small-dot'></div>
          </div>
          <div className='groom'>
            <p> Pankaj Adhikari </p>
          </div>
        </div>
        <div className='title'>
          <h2>Info</h2>
        </div>
      </div>
      <div className='main'>
        <div className='main-wrapper'>
          {info.map((item) => {
            return (
              <div className='main-contianer'>
                <h2 className='main-title'>{item.title}</h2>
                <h3>{item.content}</h3>
              </div>
            );
          })}
        </div>
        <div className='main-img'>
          <img src={GroomAndBride} alt='' />
        </div>
      </div>
      <div className='footer'>
        <div className='line'></div>
        <div className='footer-text'>
          <h3>22</h3>
          <h3>12</h3>
          <h3>03</h3>
        </div>
      </div>
    </div>
  );
};
