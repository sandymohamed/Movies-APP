
export const addNew = (payload) => {
    return {
        type:"ADD_FAV_LIST",
        payload
    }
 }
 
 export const removeOne = (payload) => {
    return {
        type:"DELETE_FAV_LIST",
        payload
    }
 }
 