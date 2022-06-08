import React , {useEffect, useState} from 'react'
import LightboxPhoto from '../components/Lightbox/LightboxPhoto'


import LightboxWrapper from '../components/Lightbox/LightboxWrapper'
import PageTitle from '../components/PageTitle/PageTitle'
export default function Autocross() {
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
              <LightboxPhoto key={photo.photoID}
                srcSmall={photo.photoSource.small}
                srcOriginal={photo.photoSource.original} alt="" />
            )
          })
        }
      </LightboxWrapper>
    </>
  )
}
