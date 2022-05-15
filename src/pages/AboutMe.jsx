import React from 'react'
import './css/AboutMe.css'
import PageTitle from '../components/PageTitle/PageTitle'


export default function AboutMe() {
  return (
    <>
      <PageTitle pageTitle="About Me" />
      
      <div className="about-me-content">
        <section className="bio">
          <h2 className="section-header"  id="about-me">
            About Davo
          </h2>
          <div className="greeting">
            <p>
              Hey there, I'm Davo! I am a {((new Date()).getFullYear()) - 1995} years old electrical engineer in the semiconductor industry.
            </p>
          </div>
        </section>
        <section className="gear">
          <h2 className="section-header"  id="gear">
            Gear
          </h2>

          <div>
            <p>This is all the gear currently used to take photos and videos:</p>
          </div>

          <div className="table-container">
            <table className="bodies-table">
              <caption>Camera Bodies</caption>
              <thead>
                <tr>
                  <th scope="col">Make</th>
                  <th scope="col">Body</th>
                  <th scope="col">Sensor Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Fujifilm</th>
                  <td>X-T4</td>
                  <td>APS-C</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <table className="lens-table">
              <caption>Lenses</caption>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Focal Length</th>
                  <th scope="col">Max Aperture Range</th>
                  <th scope="col">Filter Size</th>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <th scope="row">FUJIFILM XF 16-80mm f/4 R OIS WR</th>
                  <td>Zoom</td>
                  <td>16 - 80 mm</td>
                  <td>f/4</td>
                  <td>72 mm</td>
                </tr>
                <tr>
                  <th scope="row">FUJIFILM XF 70-300mm f/4-5.6 R LM OIS WR</th>
                  <td>Zoom</td>
                  <td>70 - 300 mm</td>
                  <td>f/4-5.6</td>
                  <td>67 mm</td>
                </tr>
                <tr>
                  <th scope="row">Fujinon XF50mmF1.0 R WR</th>
                  <td>Prime</td>
                  <td>50 mm</td>
                  <td>f/1</td>
                  <td>77</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}
