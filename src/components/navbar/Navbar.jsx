import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useData } from "../../context/data-context"
const Navbar = () => {
  const { state, dispatch } = useData()
  const { serverData } = state
  const changeHandler = (e) => {
    const searchText = e.target.value
    if(searchText){
      const filteredData = serverData.filter((item) => {
        if(item.name.toLowerCase().includes(searchText.toLowerCase())){
          return true
        }
        if(item.status.toLowerCase() === searchText.toLowerCase()){
          return true
        }
        if(item.gender.toLowerCase()=== searchText.toLowerCase()){
          return true
        }
        if(item.species.toLowerCase() === searchText.toLowerCase()){
          return true
        }

      })
      dispatch({type:"SET_SEARCH_DATA", payload:filteredData})
    }
    else {
      dispatch({type:"SET_SEARCH_DATA", payload:serverData})
    }
  }
  const debounceFunction = (changeHandler, delay)=> {
    let timer;
    return function (e){
      if(timer){
        clearTimeout(timer);
      }
      timer = setTimeout(()  => {changeHandler(e)}, delay)
    }
  }
  const debounce = debounceFunction(changeHandler, 500)
  return (
    <div className="navbar">
        <div>
            <input type = "text" onChange = {debounce}  placeholder="Search by name, status, gender, species" className="search-input"/>
        </div>
        <div>
          <NavLink to = "/" className="navbar-link">Home</NavLink>
          <NavLink to = "/liked" className="navbar-link">Like</NavLink>
        </div>
    </div>
  )
}

export default Navbar