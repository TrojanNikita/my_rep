import {CHANGE_USERNAME, CHANGE_PASSWORD} from '../constants/actions';
  import  {AuthModel}  from '../models/AuthModel';
  import {ActionTypeTodo} from '../types/Action'
  
  
  
  const initState: AuthModel = {
      username:'',
      password:''
  };
  
  
  export function TodoReduce (
    state=initState, 
    action: ActionTypeTodo): AuthModel {
      switch (action.type) {
  
        case CHANGE_USERNAME:
          return{
            ...state,
            username:action.pay
          }
        case CHANGE_PASSWORD:
          return{
            ...state,
            loading:false,
            error:true
          } 
          default:
            return state
        }
  }
  
  export default TodoReduce;