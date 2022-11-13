import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import '../App.css';
import Home from '../components/home';
import Header from '../components/header';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';
import Questions from '../components/questions';
import Footer from '../components/footer';


const content = [
  {
    title:'Enjoy on your TV.',
    description:'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    image_url:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
    video_url:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
  },
  {
    title:'Download your shows to watch offline.',
    description:'Save your favorites easily and always have something to watch.',
    image_url:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
    video_url:null
  },
  {
    title:'Watch everywhere.',
    description:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
    image_url:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png',
    video_url:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
  },
  {
    title:'Create profiles for kids.',
    description:'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    image_url:'https://occ-0-358-3934.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f',
    video_url:null
  },
]

function Homepage() {
  return (
    <>
      <Header />
      <Home />
      <Section1 content={content[0]}/> 
      <Section2 content={content[1]}/> 
      <Section3 content={content[2]}/> 
      <Section4 content={content[3]}/> 
      <Questions/>
      <Footer />
    </>   
  );
}

export default Homepage;
