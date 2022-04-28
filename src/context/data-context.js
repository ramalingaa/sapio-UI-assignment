import axios from "axios"
import { createContext, useContext, useReducer, useEffect} from "react"
import { reducer } from "./reducer-function"
const DataContext = createContext()
const useData = ()  => useContext(DataContext)
const DataProvider = ({children}) => {
    const [state, dispatch]  = useReducer(reducer, {data:[], likedData:[], serverData:[]})
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/character")
                dispatch({type:"SET_SERVER_DATA", payload:response.data.results})

            }catch(e){
                console.log(e)
            }
        })()
    },[])
    return (
        <DataContext.Provider value = {{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}
export { DataProvider, useData}