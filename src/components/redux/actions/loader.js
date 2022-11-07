export const setLoader = (payload) => {
    return {
        payload, // new data 
        type: "SET_LOADER" // nam of action
    }
}