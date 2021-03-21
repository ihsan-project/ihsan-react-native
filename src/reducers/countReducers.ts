import { ADD_NUMBER } from '../constants/actionConstants';


const initialState = {
    count: 0
}


export default (state = initialState, action ) => {

    switch (action.type) {
        case ADD_NUMBER:
            return{
                ...state,
                count: state.count + action.payLoad
            }
            break;
    
        default:
            return state;
            break;
    }





} 




