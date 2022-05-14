import React from 'react'
import "./PageTitle.css"


export default function PageTitle(props) {
  const {pageTitle} = props;

  return (
    <div className="page-title">
      <h1>{pageTitle}</h1>
    </div>
  )
}
