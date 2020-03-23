import * as React from 'react';
import Button from '../../ui/Button';

import Input from '../../ui/Input';
import { IAuth } from '../types/IAuthState';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth, getButtonName } from '../selectors/auth';
import { setFormField } from '../actions/actions';
import {authWithData as inputData} from './../constants/data';
import {SignUpForm} from './../types/IAuthState';
import { useForm } from '../hooks/useForm';
import { pipe } from 'fp-ts/lib/pipeable';
import { constVoid } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';

// TODO: сделать логичный параметр
// Судя по всему в этом файле больше всего логики, то есть глупо тут играть с числовым значением login
interface SignupProps {
	login: number;
}

function AuthPopup ({ login }: SignupProps) {

	const form = useForm(
		SignUpForm,
		{
		  email: '',
		},
		{
			handleSubmit(form) {
			  pipe(
				form.validated,
				E.fold(constVoid, data => {
				  form.disable();
				  // Simulate async sign up.
				  setTimeout(() => {
					form.enable();
					if (data.email === 'a@a.com') {
					  form.setAsyncErrors({ email: ['UniqueEmail'] });
					} else {
					  alert(JSON.stringify(data, null, 2));
					  form.reset();
					}
				  }, 1000);
				}),
			  );
			},
		},
	);

	return (
		<div>
			<form className="auth-form__content">
				<Input
					key={name}
					name={name}
					type={isHide? 'password': undefined}
					placeholder={placeholder}
					value={getValue(name)}
					onChange={handleChange}
					data-error={errorMessage? 'Не удалось войти': undefined}
				/>
			</form>
		</div>
	);
};

export default React.memo(AuthPopup);
