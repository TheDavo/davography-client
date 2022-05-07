import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'
import SportDefinition from '../components/SportDefinition/SportDefinition'
import SearchForm from "../components/SearchForm/SearchForm"
import infiniti from './img/autocross_infiniti.jpg'
import drifting_nissan from './img/drifting_nissan.jpg'
import porsche_canaan from './img/porsche_canaan.jpg'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-info">
          <h1 className="hero-heading octarine-bold" id="davography">davography</h1>
          <p className="hero-subtitle">[ˈdævɒɡræfi]</p>
          <p className="hero-subtitle">capturing the best in sports, especially those involving motors </p>
        </div>
        <div className="hero-links">
          <Link className="hero-link" to="/galleries">Galleries</Link>
          <Link className="hero-link" to="/about-me">About Me</Link>
        </div>
      </section>
    </>
  )
}



export default Home