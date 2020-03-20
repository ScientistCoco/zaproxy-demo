import React from 'react';
import { Header } from "../../Components";
import './index.scss';

const AccountDetails = () => (
  <div className="AccountDetails">
    <Header/>
    <div className="emoticon">
      <h1>Admin page</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="151" height="110" viewBox="0 0 151 110">
        <g id="Page-1" fill="none" fill-rule="evenodd">
          <circle id="face" cx="75" cy="55" r="50" fill="#FFEB97"/>
          <g id="face-components">
            <path id="wk-l-eye" stroke="#000" stroke-width="3" d="M55 59.12C55 54.7 51.418 51 47 51s-8 3.7-8 8.12" stroke-linecap="round"/>
            <path id="wk-r-eye" stroke="#000" stroke-width="3" d="M110 59c0-4.418-3.582-8.12-8-8.12s-8 3.702-8 8.12" stroke-linecap="round"/>
            <path id="sm-mouth-3" stroke="#000" stroke-width="3" d="M47.34 72.117s6.627 11.526 26.77 11.526 28.482-12.926 28.482-12.926" stroke-linecap="round"/>
          </g>
        </g>
      </svg>
    </div>
  </div>
)

export default AccountDetails;