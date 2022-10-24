const INITIAL_VALUE = {
    trendsMovies: []
}

export default function TrendsMoviesReducer(state=INITIAL_VALUE, action){
    switch(action.type){
        case "GET_TRENDS_LIST":
            return {
                ...state,
                trendsMovies: action.payload 
            };
            case "GET_TRENDS_TV":
                return {
                    ...state,
                    trendsMovies: action.payload 
                };
                case "GET_TRENDS_MOVIE":
                    return {
                        ...state,
                        trendsMovies: action.payload 
                    };
        default: 
            return state;
    }

}
