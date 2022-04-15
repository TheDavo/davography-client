import './Sidebar.css'

import { Link } from 'react-router-dom'

export default function SidebarButton(props) {
  const {className, link, shortText, key} = props;
  return (
    <>
      <li key = {key} className={className}>
        <Link to={link}>{shortText}</Link>
      </li>
    </>
  )
}
