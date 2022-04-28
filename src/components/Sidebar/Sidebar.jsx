import {useState} from 'react'
import { Link } from 'react-router-dom'

import logo from "./logo_small.png"
import items from "./sidebar-items"
import {FaSearch} from "react-icons/fa"
import './Sidebar.css'
import SidebarButton from './SidebarButton'

function Sidebar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
  <>
    <nav>
      <div className={sidebar ? 'sidebar-wrapper active' : 'sidebar-wrapper'}>
        <div className="menu-btn center-flex" onClick={showSidebar}>
          <img src={logo} alt="Davography Logo"/>
        </div>
        <div className={sidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
          <button className="nav-link center-flex"><FaSearch /></button>
          <div className="nav-links">
            <ul>
              {items.map((item) => {
                return (
                  <li key = {item.hoverText} className={item.className}>
                    <SidebarButton
                      link = {item.link}
                      shortText = {item.shortText}
                      hoverText = {item.hoverText}
                    />
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