import React from 'react'
import './css/AboutMe.css'
import PageHeader from '../components/PageHeader/PageHeader'
export default function AboutMe() {
  return (
    <>
      <PageHeader pageTitle="About Me" />
      
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
