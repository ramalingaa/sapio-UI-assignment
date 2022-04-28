import React from 'react'
import { useData } from "../../context/data-context"
import { CharacterCard } from "../index-components"
const Home = () => {
    const { state } = useData()
    const { data } = state
  return (
    <div className = "home-container">
        {data.map((item) => {
            return (
                <CharacterCard item = {item} key = {item.id}/>
            )
        })}
    </div>
  )
}

export default Home