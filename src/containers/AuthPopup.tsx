import * as React from 'react';
import Button from '../components/ui/Button';

import Input from '../components/ui/Input';
import { IAuth } from '../reducers/auth';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from '../selectors/auth';
import { setFormField } from '../actions/auth';
import {authWithData as inputData} from '../constants/data';
import classNames from 'classnames';

// TODO: сделать логичный параметр
// Судя по всему в этом файле больше всего логики, то есть глупо тут играть с числовым значением login
interface SignupProps {
	classNamesWrapper?: string;
	classNamesForm?: string;
	login: number;
}

function AuthPopup ({ login, classNamesWrapper, classNamesForm }: SignupProps) {

	const {useState, useCallback} = React;
	let dispatch=useDispatch();
	const auth: IAuth = useSelector(getAuth);
	const [errorMessage, setErrorMessage] = useState(false);

	const getValue: ((field: keyof IAuth) => string)= (field: keyof IAuth) => auth[field];

	const handleChange = useCallback(({ currentTarget: {name, value} }:React.SyntheticEvent<HTMLInputElement>) => {
		dispatch(
			setFormField(name as (keyof IAuth), value)
		);
	},[setFormField]);

	const inputs = React.useMemo(() => inputData(login).map(({name, placeholder, isHide})=>
		<Input
			key={name}
			name={name}
			type={isHide? 'password': undefined}
			placeholder={placeholder}
			value={getValue(name)}
			onChange={handleChange}
			data-error={errorMessage? 'Не удалось войти': undefined}
		/>
	), [inputData,errorMessage,getValue, handleChange]);

	return (
		<div className={classNamesWrapper}>
			<form className={classNames('auth-form__content', classNamesForm)}>
				{inputs}
			</form>
		</div>
	);
};

export default React.memo(AuthPopup);
