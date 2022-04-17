import './Sidebar.css'

import { Link } from 'react-router-dom'
import {useState} from 'react'

export default function SidebarButton(props) {
  const {link, shortText, hoverText} = props;

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  const hoverDiv = () => {
    return(
      <div className="hover-text center-flex">
        <p>{hoverText}</p>
      </div>
    );
  }

  return (
    <>
      <Link to={link}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}>{shortText}</Link>
      {isHovering && hoverDiv()}
    </>
  )
}
