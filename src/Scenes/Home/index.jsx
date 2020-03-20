import React from 'react';
import { Header } from "../../Components";
import { Wave, Webpage } from "../../Assets";
import heroImg from "../../Assets/hero.png";
import './index.scss';

function Home() {
  return (
    <div className="Home">
      <Header />
      <section className="Home_Section Home_Section--flex ">
        <div className="Home_Section--white Home_Section_Intro">
          <h3>LOREM IPSUM DOLOR SIT AMET?</h3>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>          
        </div>
        <div>
          <img src={heroImg} alt="working"/>
        </div>
      </section>
      <div className="Home_Svg">
        <Wave />
      </div>
      <section className="Home_Section--whitebg Home_Section--fill Home_Section_Content">
        <div>
          <h1 style={{ fontSize: "2em" }}>Lorem ipsum dolor sit amet</h1>
        </div>
        <br/>
        <div className="Home_Section--flex">
          <div>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
          </div>
          <div style={{ width: "100%" }}><Webpage /></div>
        </div>
        {[1, 2, 3, 4].map(item => <br/>)}          
      </section>        
    </div>
  );
}

export default Home;