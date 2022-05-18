import {useState} from 'react'

import logo from "./logo_small.png"
import items from "./sidebar-items"
import {FaSearch} from "react-icons/fa"
import './Sidebar.css'
import SidebarButton from './SidebarButton'
import SearchForm from '../SearchForm/SearchForm'

function Sidebar() {

  const [sidebar, setSidebar] = useState(false);



  const [showForm, setShowForm] = useState(false);

  const showSearchForm = () => {
    setShowForm(!showForm);
  }

  const showSidebar = () => {
    setSidebar(!sidebar);
    if(!sidebar === false) {
      setShowForm(false);
    }
  }
  return (
  <>
    <nav>
      <div className={sidebar ? 'sidebar-wrapper active' : 'sidebar-wrapper'}>
        <div className="menu-btn center-flex" onClick={showSidebar}>
          <img src={logo} alt="Davography Logo"/>
        </div>
        <div className={sidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
          <button className="nav-link center-flex" onClick={showSearchForm}><FaSearch /></button>
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
            <div className ="nav-link center-flex">
              <SidebarButton link="/about-me" shortText="DK" hoverText="About Me" /> 
            </div>
          </div>
        </div>
      </div>
      <div className={showForm ? "sidebar-searchform" : "sidebar-searchform hidden"}>
        <SearchForm/>
      </div>
    </nav>
  </>
  );
}


export default Sidebar