import { axiosinstance } from "../../axiosInstance/axiosInstance"


export const getTrendsAll = () => (dispatch) => {
    return  axiosinstance.get(`all/day?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=> 
        dispatch({
            type: "GET_TRENDS_LIST",
            payload: res.data.results

        })
    )
    .catch((err) => console.log(err))
   

}

export const getTrendsTV = () => (dispatch) => {
    return  axiosinstance.get(`tv/day?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=> 
        dispatch({
            type: "GET_TRENDS_TV",
            payload: res.data.results

        })
    )
    .catch((err) => console.log(err))
   

}


export const getTrendsMovie = () => (dispatch) => {
    return  axiosinstance.get(`movie/day?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=> 
        dispatch({
            type: "GET_TRENDS_MOVIE",
            payload: res.data.results

        })
    )
    .catch((err) => console.log(err))
   

}
