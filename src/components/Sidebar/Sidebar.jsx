import {useState} from 'react'
import { Link } from 'react-router-dom'

import logo from "./logo_small.png"
import items from "./sidebar-items"
import {FaSearch} from "react-icons/fa"
import './Sidebar.css'

function Sidebar() {

  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);


  return (
  <>
    <nav>
      <div className={sidebar ? 'sidebar-wrapper active' : 'sidebar-wrapper'}>
        <div className="menu-btn center-flex" onClick={showSidebar}>
          <img src={logo} alt="Davography Logo"/>
        </div>
        <div className={sidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
          <Link to="#" className="nav-link center-flex"><FaSearch /></Link>
          <div className="nav-links">
            <ul>
              {items.map((item) => {
                return (
                  <li key = {item.hoverText} className={item.className}>
                    <Link to={item.link}>{item.shortText}</Link>
                  </li>
                )
              })}
            </ul>
            <Link to="/about-me" className="nav-link center-flex">DK</Link>
          </div>
        </div>
      </div>
    </nav>
  </>
  );
}


export default Sidebar