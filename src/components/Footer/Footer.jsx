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
            Top Sports
          </div>
          <div className="footer_column_link">Autocross</div>
          <div className="footer_column_link">Drifting</div>
          <div className="footer_column_link">Drag Racing</div>
        </div>
        
        <div className="footer_column">
          <div className="footer_column_header">
            About Me
          </div>
          <div className="footer_column_link">Bio</div>
          <div className="footer_column_link">Gear</div>
        </div>

        <div className="footer_column_socials_container">
          <div className="footer_column_socials">
            <a target="_blank" rel="noreferrer" href="https://github.com/TheDavo"><FaGithub/></a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCCP4eNATdG9DEm8j3Fb_B7Q"><FaYoutube/></a>
          </div>
        </div>

      </div>
    </div>
  )
}
