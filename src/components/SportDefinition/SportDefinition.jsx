import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './SportDefinition.css'

function SportDefinition(props) {
  const {category, link, pronunciation, definition} = props;
  
  return (
    <div className="sport-definition">
      <div className="heading-container">
        <h1 className="category octarine-bold">{category}</h1>
        <Link to={link} className="gallery-link">Go To Gallery</Link>
      </div>
      <div className="definition">
        <p>{pronunciation}</p>
        <p>{definition}</p>
      </div>

    </div>
  );
}

SportDefinition.propTypes = {
  category: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  pronunciation: PropTypes.string.isRequired
}

export default SportDefinition