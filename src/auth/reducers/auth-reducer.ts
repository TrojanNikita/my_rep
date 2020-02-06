import {CHANGE_USERNAME, CHANGE_PASSWORD} from '../constants/actions';
import  {IAuthState}  from '../models/IAuthState';
import {ActionAuth} from '../models/Actions';
  
  

const initState: IAuthState = {
    username:'',
    password:''
};
  
  
export function AuthReducer (
    state=initState, 
    action: ActionAuth): IAuthState {
    switch (action.type) {
        case CHANGE_USERNAME:
            return {
                ...state,
                username:action.payload
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                password:action.payload
            } 
        default:
            return state
    }
}
  
  export default AuthReducer;