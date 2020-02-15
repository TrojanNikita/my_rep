import * as types from './../constants/actions';

import {ActionAuth} from './../models/Actions';
import {AuthForm} from './../models/AuthForm';

export const changeUsername=(username:string):ActionAuth=>({
    type: types.CHANGE_USERNAME,
    payload: username
})

export const changePassword=(password:string):ActionAuth=>({
    type: types.CHANGE_PASSWORD,
    payload: password
})


export const changeForm=(form:AuthForm):ActionAuth=>({
    type: types.CHANGE_FORM,
    payload: {form}
})