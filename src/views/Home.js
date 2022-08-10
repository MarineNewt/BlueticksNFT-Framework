import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Informative from '../components/sections/Informative';
import Testimonial from '../components/sections/Testimonial';
import bkgrd from './../assets/images/background.png'
import mobilebkgrd from './../assets/images/mobile.png';


const Home = () => {
  const imageUrl = window.innerWidth >= 900 ? bkgrd : mobilebkgrd;
  return (
    <>
      <Hero className="illustration-section-01" style={{backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'cover', backgroundPosition: 'center center'}}/>
      <hr className='divider dividerblue'></hr>
      <FeaturesTiles style={{backgroundImage: `url( ${imageUrl} )`,
      backgroundSize: 'cover', backgroundPosition: 'center center'}} />
      <hr className='divider dividerblue'></hr>
      <Informative style={{backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'cover', backgroundPosition: 'center center'}} />
      <hr className='divider dividerblue'></hr>
      <Testimonial topDivider style={{backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'cover', backgroundPosition: 'center center'}} />
    </>
  );
}

export default Home;