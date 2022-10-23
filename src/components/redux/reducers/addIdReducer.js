const INITIAL_ID = []

export default function addIdReducer(state=INITIAL_ID,{type, payload}){
 
    switch(type){
        case "ADD_ID" :
            return state=  [...state, payload]
        
            case "DELETE_ID" :
            return  [
                ...state.slice(0, payload),
                ...state.slice(payload + 1)
            ]

            default: 
            return state
    }

}