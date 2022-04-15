import { Link } from 'react-router-dom'
import './SportDefinition.css'

export default function SportDefinition(props) {
  const {category, link, pronunciation, definition} = props;
  
  return (
    <>
      <div className="heading-container">
        <h1 className="category">{category}</h1>
        <Link to={link}>Go to Gallery</Link>
      </div>
      <p>{pronunciation}</p>
      <p>{definition}</p>
    </>
  );
}