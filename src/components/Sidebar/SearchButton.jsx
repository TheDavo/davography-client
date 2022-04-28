import {useState} from 'react'
import SearchForm from '../SearchForm/SearchForm'
import './Sidebar.css'
import {FaSearch} from "react-icons/fa"


export default function SearchButton() {
  return (
    <div>
      <button onClick={showSearchForm}>
        <FaSearch></FaSearch>
      </button>
    </div>
  )
}
