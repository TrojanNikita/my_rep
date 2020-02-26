import * as types from './../constants/actions';

import {ActionAuth} from './../models/Actions';
import {AuthForm} from './../models/AuthForm';
import { IAuthState } from '../models/IAuthState';

export const setFormField=(name:string, value:string):ActionAuth=>({
	type: types.SET_FORM_FIELD,
	payload: {name,value}
})