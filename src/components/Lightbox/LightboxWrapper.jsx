import React, {useState} from 'react'
import PropTypes from 'prop-types'
import LightboxPhoto from './LightboxPhoto'
import './Lightbox.css'

import {IoGridSharp} from 'react-icons/io5'
import {FaSquareFull} from 'react-icons/fa'
import {RiArrowLeftCircleLine} from 'react-icons/ri'
import {RiArrowRightCircleLine} from 'react-icons/ri'

export default function LightboxWrapper(props) {

  const {children} = props;

  // options are 'multi' or 'single' columned photographs
  const [wrapperStyle, setWrapperStyle] = useState('multi');

  const handleWrapperMulti = () => {
    setWrapperStyle("multi");
  }

  const handleWrapperSingle = () => {
    setWrapperStyle("single");
  }

  const [openLightbox,  setOpenLightbox] = useState(false);
  const [currImgSrc, setCurrSrc] = useState('');
  const [currImgAlt, setCurrAlt] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const handleToggleLightbox = (event) => {
    const selector = event.target.className === "lightbox-thumbnail" 
      || event.target.className === "lightbox-content-container";

    if(selector) {
      setOpenLightbox(!openLightbox);
    }

    if (event.target.className === "lightbox-thumbnail" ) {
      const imgIndex = children.findIndex(child => child.props.src.split("/").pop() === event.target.currentSrc.split("/").pop());
      console.log(imgIndex);
      setLightboxIndex(imgIndex)
      setCurrSrc(event.target.currentSrc);
      console.log(event.target.currentSrc);
      setCurrAlt(event.target.alt);
    }
  }

  const moveLeft = () => {
    if(lightboxIndex !== 0) {
      setLightboxIndex(lightboxIndex - 1);
      setCurrSrc(children[lightboxIndex - 1].props.src);
      setCurrAlt(children[lightboxIndex - 1].props.alt);
    }
  }

  const moveRight = () => {
    if(lightboxIndex < children.length-1) {
      setLightboxIndex(lightboxIndex + 1);
      setCurrSrc(children[lightboxIndex + 1].props.src);
      setCurrAlt(children[lightboxIndex + 1].props.alt);
    }
  }

  const lightboxKeyNav = (event) => {
    switch(event.keyCode) {
      case 37: //left arrow
        moveLeft();
        break;
      case 39: //right arrow
        moveRight();
        break;
      default:
        break;
    }
  }
  

  return (
    <div>
      <div className="lightbox-wrapper-type-container">
        <div className="lightbox-wrapper-nav">
          <IoGridSharp className="lightbox-nav-icon" id="multi-style" onClick={handleWrapperMulti} />
          <FaSquareFull  className="lightbox-nav-icon" id="single-style" onClick={handleWrapperSingle}/>
        </div>
      </div>
      <div className="lightbox-wrapper" onClick={handleToggleLightbox}>
        <div className={wrapperStyle === "multi" ? "lightbox-items-multi" : "lightbox-items-single"}>
          {children}
        </div>
      </div>

      <div className={openLightbox ? "lightbox lightbox-active" : "lightbox lightbox-hidden"}
        onClick={handleToggleLightbox}
        onKeyDown={lightboxKeyNav}
        tabIndex="1">

          <div className="lightbox-content-container">
              <h1 className="left" onClick={moveLeft} ><RiArrowLeftCircleLine /></h1>
              <img src={currImgSrc} alt={currImgAlt} />
              <h1 className="right" onClick={moveRight}><RiArrowRightCircleLine /></h1>
          </div>

      </div>
    </div>
  )
}


// LightboxWrapper.propTypes = {
//   children: PropTypes.instanceOf(LightboxPhoto),
// }