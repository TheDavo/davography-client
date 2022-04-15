import React from 'react'
import './css/Home.css'
import SportDefinition from '../components/SportDefinition/SportDefinition'
import infiniti from './img/infiniti_956_1_21-08-30.jpg'

function Home() {
  return (
    <div className="bg">
      <div className="container">
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
      
      <div className="container">
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
      
      <div className="container">
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
    </div>

  )
}

export default Home