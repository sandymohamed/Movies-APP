
export const addID = (payload) => {
    console.log('payoad' + payload)

    return {
        type:"ADD_ID",
        payload 
    }
 }
 
 export const removeID = (payload) => {
    return {
        type:"DELETE_ID",    
        payload
    }
 }
 