import React, { useState } from 'react'
import { useData } from "../../context/data-context"
import { CharacterCard } from "../index-components"
const LikePage = () => {
    const { state } = useData()
    const { likedData } = state
    const [likePage, setLikePage] = useState(true)
  return (
    <div className="like-page-container">
        <h3>Your Favorites</h3>
        <div className = "home-container">
            {likedData.length < 1 && <p>You haven'd liked anything yet! </p>}
            {likedData.map((item)  => {
                return <CharacterCard  item = {item} key = {item.id} likePage= {likePage}/>
            })}
        </div>
    </div>
  )
}

export default LikePage