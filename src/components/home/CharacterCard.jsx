import React, { useState, useEffect } from 'react'
import { useData } from "../../context/data-context"
const CharacterCard = ({item, likePage = ""}) => {
    const [rotateCard, setRotateCard] = useState(false)
    const { dispatch, state } = useData()
    const { likedData } = state
    const [isLiked, setIsLiked] = useState(false)
    const rotateHandler = ()  => {
        setRotateCard((prev) => !prev)
    }
    useEffect(() =>{
        const likeItem = likedData.find((likeItem) => likeItem.id === item.id)
        if(likeItem){
            setIsLiked(() => true)
        }
        else {
            setIsLiked(() => false)
        }
    },[])
    const likeHandler = ()  => {
        if(isLiked){
            const likeFilteredData = likedData.filter((likeItem) => likeItem.id !== item.id)
            dispatch({type:"SET_LIKE_DATA", payload:likeFilteredData})
            setIsLiked(() => false)

        }
        else {
            const newLikedData = [...likedData, item]
            dispatch({type:"SET_LIKE_DATA", payload:newLikedData})
            setIsLiked(() => true)
        }
        
    }
    
  return (
    <div className="character-container">
        <div className={`character-card ${rotateCard && "is-flipped"}`} onClick = {rotateHandler}>
            <div className="character-card-front">
                <img src = {item.image} alt = "profile badge" className="res-img"/>
            </div>
            <div className="character-card-back">
                <p><strong>Name: </strong>{item.name}</p>
                <p><strong>Status: </strong>{item.status}</p>
                <p><strong>Gender: </strong>{item.gender}</p>
                <p><strong>Species: </strong>{item.species}</p>
            </div>
        </div>
        <button className = {`btn ${isLiked && "active-link"}`} onClick = {likeHandler}>{likePage ? "Delete" :(<div><i className="fa-regular fa-thumbs-up"></i><span> {isLiked ? "Liked" : "Like"}</span></div>)}</button>
    </div>
  )
}

export default CharacterCard