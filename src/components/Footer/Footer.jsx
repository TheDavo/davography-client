import './Footer.css'
import {FaGithub, FaYoutube} from "react-icons/fa"


// The footer will be a two row system
// The first row will contain links within the website
// The second row will be social media link icons 
export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_grid">

        <div className="footer_column">
          <div className="footer_column_header">
            About Me
          </div>
          <div className="footer_column_link">Bio</div>
          <div className="footer_column_link">Gear</div>
        </div>

        <div className="footer_column">
          <div className="footer_column_header">
            Top Sports
          </div>
          <div className="footer_column_link">Autocross</div>
          <div className="footer_column_link">Drifting</div>
          <div className="footer_column_link">Drag Racing</div>
        </div>

        <div className="footer_column_socials_container">
          <div className="footer_column_socials">
            <a href="#"><FaGithub/></a>
            <a href="#"><FaYoutube/></a>
          </div>
        </div>

      </div>
    </div>
  )
}
