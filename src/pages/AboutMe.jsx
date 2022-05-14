import React from 'react'
import './css/AboutMe.css'
import PageTitle from '../components/PageTitle/PageTitle'
export default function AboutMe() {
  return (
    <>
      <PageTitle pageTitle="About Me" />
      
      <div className="about-me-content">
        <section className="bio">

        </section>
        <section className="gear">
          <table className="gear-table">
            <caption>Camera Bodies</caption>
            <tr>
              <th scope="col">Make</th>
              <th scope="col">Body</th>
            </tr>
            <tr>
              <td>Fujifilm</td>
              <td>X-T4</td>
            </tr>
          </table>
        </section>
      </div>
    </>
  )
}
