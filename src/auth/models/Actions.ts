import * as types from './../constants/actions'

// import {ThunkAction} from 'redux-thunk'
// import { TypedUseSelectorHook } from 'react-redux';

// Action Definition
interface IActionPassword{
    type: typeof types.CHANGE_PASSWORD;
    payload:string;
}
interface IActionUsername{
    type: typeof types.CHANGE_USERNAME;
    payload:string;
}


//Union action for todos
export type ActionAuth= IActionPassword|
IActionUsername;


// //T- тип параметра вложенной функции
// export type PostActionThunk=ThunkAction<Promise<ActionTypeTodo>, GlobalState, null, ActionTypeTodo>


// export type GetActionThunk=ThunkAction<Promise<ActionTypeTodo>, GlobalState, null, ActionTypeTodo>