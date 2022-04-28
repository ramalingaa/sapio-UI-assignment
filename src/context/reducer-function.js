const reducer = (state, action) => {
    switch(action.type) {
        case "SET_SERVER_DATA": {
        return {...state, data:action.payload, serverData:action.payload}
        }
        case "SET_LIKE_DATA": {
            return {...state, likedData: action.payload}
        }
        case "SET_SEARCH_DATA": {
            return {...state, data:action.payload}
        }
        default: {
            return state
        }
    }
}
export { reducer }