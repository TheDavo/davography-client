import React , {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import LightboxPhoto from '../components/Lightbox/LightboxPhoto'

import galleries from './galleries_generator/gallery_list.js'
import LightboxWrapper from '../components/Lightbox/LightboxWrapper'
import PageTitle from '../components/PageTitle/PageTitle'
export default function Autocross(props) {
  const [autocrossPhotos, setAutocrossPhotos] = useState([]);

  // useEffect(() => {
  //   // try{
  //   //   await fetchPhotos()
  //   // } catch (error) {
  //   //   console.error(error);
  //   // }
  //   const fetchPhotos = async () => {
  //     const response = await fetch("/query-photograph?eventGenre=autocross&limit=15");
  //     const thing = await response.json();
  //     if (response.ok) {
  //       console.log(thing);
  //       setAutocrossPhotos(thing.photoSources);
  //     }
  //   }
    
  //   fetchPhotos();
  // }, [])

  const {galleryGenre} = useParams();
  const galleryInfo = galleries.find(element => element.galleryGenre === galleryGenre);
  
  if (galleryInfo) {
    return (
      <>
        <PageTitle pageTitle={galleryInfo.galleryName} />
        <div className="galleryDef">
          <h2>{galleryInfo.galleryPronunciation}</h2>
          <h2>{galleryInfo.galleryDefinition}</h2>
        </div>
        <LightboxWrapper>
          {/* <LightboxPhoto src={porsche_canaan} alt="porsche doing autocross" />
          <LightboxPhoto src={drifting_nissan} alt="cool z" />
          <LightboxPhoto src={infiniti} alt="g35 hecking fast" /> */}
          {
            autocrossPhotos.map((photo) => {
              return(
                <LightboxPhoto key={photo.photoID}
                  srcSmall={photo.photoSource.small}
                  srcOriginal={photo.photoSource.original} alt="" />
              )
            })
          }
        </LightboxWrapper>
      </>
    )
  } else {
    return (
      <>
        <PageTitle pageTitle="Gallery Does Not Exist" />
        <div className="hero-links">
          <Link className="hero-link" to="/home">Home</Link>
          <Link className="hero-link" to="/galleries">Galleries</Link>
          <Link className="hero-link" to="/about-me">About Me</Link>
        </div>
      </>
    )
  }
}
