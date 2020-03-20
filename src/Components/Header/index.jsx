import React from "react";
import { Link } from "react-router-dom";
import { Flash } from "../../Assets";
import "./index.scss";

const BRAND = "Zaproxy Demo";
const LINKS = ["Reviews", "Login"];

class Header extends React.Component {
  render() {

    return (
      <nav className="Header">
        <div className="Header_Container">
          <Link to="/" className="Header_Brand">
            <Flash className="Header_Brand_Logo"/>
            {BRAND}      
          </Link>
          <ul className="Header_Links">
            {LINKS.map(item => 
              <li className="Header_Links_Item">
                <Link to={item}>{item}</Link>
              </li>
            )}
          </ul>
        </div>
        <hr className="Header_Border"/>
      </nav>
    )
  }
}

export default Header;