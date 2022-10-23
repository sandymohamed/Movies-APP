const INITIAL_VALUE = 0

export default function favListReducer(state=INITIAL_VALUE, action){
 
    switch(action.type){
        case "ADD_FAV_LIST" :
            return state + action.payload 
       
            case "DELETE_FAV_LIST" :
            return  state - action.payload  
            default: 

            return state
    }

}