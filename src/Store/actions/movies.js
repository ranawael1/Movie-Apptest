 
import { AxiosInstance } from "../../Network/AxiosInstance"

export const addMovies = (page) => (dispatch)=>{
   return AxiosInstance.get(`/movie/popular?&page=${page}`)
    .then((res) => {
        dispatch({
            type: "GET_MOVIES",
            payload: res.data.results
        })
    })
    .catch((err) => console.log(err))
}