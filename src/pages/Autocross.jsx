import React , {useEffect, useState} from 'react'
import LightboxPhoto from '../components/Lightbox/LightboxPhoto'


import LightboxWrapper from '../components/Lightbox/LightboxWrapper'
import PageTitle from '../components/PageTitle/PageTitle'

import infiniti from './img/autocross_infiniti.jpg'
import drifting_nissan from './img/drifting_nissan.jpg'
import porsche_canaan from './img/porsche_canaan.jpg'
export default function Autocross() {
  const [autocrossPhotos, setAutocrossPhotos] = useState([]);

  useEffect(() => {
    // try{
    //   await fetchPhotos()
    // } catch (error) {
    //   console.error(error);
    // }
    const fetchPhotos = async () => {
      const response = await fetch("/query-photograph?eventGenre=autocross");
      const thing = await response.json();
      if (response.ok) {
        console.log(thing);
        setAutocrossPhotos(thing.photoSources);
      }
    }
    
    fetchPhotos();
  }, [])

  return (
    <>
      <PageTitle pageTitle="Autocross" />
      <LightboxWrapper>
        {/* <LightboxPhoto src={porsche_canaan} alt="porsche doing autocross" />
        <LightboxPhoto src={drifting_nissan} alt="cool z" />
        <LightboxPhoto src={infiniti} alt="g35 hecking fast" /> */}
        {
          autocrossPhotos.map((photo) => {
            return(
              <LightboxPhoto key={photo.photoID} src={photo.photoSource} alt="" />
            )
          })
        }
      </LightboxWrapper>
    </>
  )
}
