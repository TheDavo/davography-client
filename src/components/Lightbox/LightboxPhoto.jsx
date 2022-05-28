import React, {useState} from 'react'

export default function LightboxPhoto(props) {
  const {srcSmall, srcOriginal, alt} = props;

  const [openLightbox,  setOpenLightbox] = useState(false);

  const handleToggleLightbox = (event) => {
    const selector = event.target.className === "lightbox-thumbnail" 
      || event.target.className === "lightbox-content-container";

    if(selector) {
      setOpenLightbox(!openLightbox);
    }
  }
  
  return (
    <>
      <img className="lightbox-thumbnail"
        src={srcSmall} 
        alt={alt}
        onClick={handleToggleLightbox}/>

      <div className={openLightbox ? "lightbox lightbox-active" : "lightbox lightbox-hidden"}
        onClick={handleToggleLightbox}>

        <div className="lightbox-content-container">
            <img src={srcOriginal} alt={alt} />
        </div>

      </div>
    </>
  )
}

