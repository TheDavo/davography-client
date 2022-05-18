import React from 'react'

export default function LightboxPhoto(props) {
  const {src, alt} = props;

  
  return (
    <>
      <img className="lightbox-thumbnail"
        src={src} 
        alt={alt}/>
    </>
  )
}

