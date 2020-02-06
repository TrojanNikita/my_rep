import * as types from './../constants/actions'

import {ActionAuth} from './../models/Actions'

export const changeUsername=(username:string):ActionAuth=>({
    type: types.CHANGE_USERNAME,
    payload: username
})

export const changePassword=(password:string):ActionAuth=>({
    type: types.CHANGE_PASSWORD,
    payload: password
})