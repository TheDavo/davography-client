import React from 'react'
import "./PageTitle.css"


export default function PageHeader(props) {
  const {pageTitle} = props;

  return (
    <div className="page-heading">
      <h1>{pageTitle}</h1>
    </div>
  )
}
