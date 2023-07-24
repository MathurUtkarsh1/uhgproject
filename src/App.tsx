import React from 'react';
import './App.css';
import Banner from './Component/Body/Banner';
import Banner2 from './Component/Body/Banner2';
import EmptyBanner from './Component/Body/EmptyBanner';
import Innerbody from './Component/Body/Innerbody';
import { Footers } from './Component/Footer/Footers';
import Header1 from './Component/Header/Header1';
import Header2 from './Component/Header/Header2';
import { Navbar } from './Component/Header/Navbar';

function App() {
  var x= 1;
  return (
    <div>
      {/* <Header1></Header1> */}
      {/* <Navbar></Navbar> */}
      {x==1?<Navbar></Navbar>:<Header1></Header1>}
    <EmptyBanner></EmptyBanner>
    <Banner></Banner>
    <Innerbody></Innerbody>
    <Banner2></Banner2>
    <Footers/>
    </div>        
  );
}

export default App;
