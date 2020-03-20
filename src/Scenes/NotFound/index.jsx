import React from 'react';
import { Header } from "../../Components";
import './index.scss';

const NotFound = () => (
  <div className="NotFound">
    <Header/>
    <div className="box__ghost">
      <div className="symbol"></div>
      <div className="symbol"></div>
      <div className="symbol"></div>
      <div className="symbol"></div>
      <div className="symbol"></div>
      <div className="symbol"></div>
      
      <div className="box__ghost-container">
        <div className="box__ghost-eyes">
          <div className="box__eye-left"></div>
          <div className="box__eye-right"></div>
        </div>
        <div className="box__ghost-bottom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div className="NotFound_Content">
      <h1>Page not found</h1>
    </div>
  </div>
)

export default NotFound;