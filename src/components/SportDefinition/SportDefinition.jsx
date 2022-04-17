import { Link } from 'react-router-dom'
import './SportDefinition.css'

export default function SportDefinition(props) {
  const {category, link, pronunciation, definition} = props;
  
  return (
    <div className="sport-definition">
      <div className="heading-container">
        <h1 className="category">{category}</h1>
        <Link to={link} className="gallery-link">Go to Gallery</Link>
      </div>
      <div>
        <p>{pronunciation}</p>
        <p>{definition}</p>
      </div>

    </div>
  );
}