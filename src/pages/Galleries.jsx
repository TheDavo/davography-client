import React from 'react'

import infiniti from './img/autocross_infiniti.jpg'
import drifting_nissan from './img/drifting_nissan.jpg'
import porsche_canaan from './img/porsche_canaan.jpg'

import SportDefinition from '../components/SportDefinition/SportDefinition'
import PageTitle from '../components/PageTitle/PageTitle'
import './css/Galleries.css'

export default function Galleries() {
  return (
    <>
      <PageTitle pageTitle="Galleries" />
      <div className="gallery-list bg">
        <div className="gallery-container">
          <div className="column-left">
            <img src={infiniti} alt="Autocross car" />
          </div>
          <div className="column-right">
            <SportDefinition 
              category="Autocross"
              link="/autocross"
              pronunciation="[ˈôˌtōˌkrôs]"
              definition="a form of competition in which cars are driven around an obstacle course, typically marked out by cones."
            />
          </div>
        </div>
        <div className="gallery-container">
          <div className="column-left">
            <img src={drifting_nissan} alt="Drifting car" />
          </div>
          <div className="column-right">
            <SportDefinition 
              category="Drifting"
              link="/drifting"
              pronunciation="[ˈdriftiNG]"
              definition="the act or activity of steering an automobile so that it makes a controlled skid sideways through a turn with the front wheels pointed in a direction opposite to that of the turn"/>
          </div>
        </div>
        <div className="gallery-container">
          <div className="column-left">
            <img src={porsche_canaan} alt="Autocross car" />
          </div>
          <div className="column-right">
            <SportDefinition 
              category="Rallycross"
              link="/rallycross"
              pronunciation="[ˈrælɪˌkrɒs]"
              definition="a form of motor sport in which cars race over a one-mile circuit of rough grass with some hard-surfaced sections"
            />
          </div>
        </div>
      </div>
    </>
  )
}
