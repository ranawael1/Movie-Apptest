export const addFav = (payload)=>{
    return{
    type : "ADD-FAVORITES",
    payload,
    }
}
export const removeFav = (payload)=>{
    return{
    type : "REMOVE-FAVORITES",
    payload,
    }
}