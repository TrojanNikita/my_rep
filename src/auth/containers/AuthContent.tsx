import { useRouteMatch, useLocation } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IAuth, IPassword, IEmail } from '../types/IAuthState';
import { getAuth } from '../selectors/auth-selector';
import { setFormField } from '../actions/actions';
import {authWithData} from './../constants/data';
import AuthPopup from '../components/AuthPopup';
import SwitchComponentWrapper from './../containers/SwitchComponentWrapper';
import ClickableIcon from "../../ui/ClickableIcon";
import { login } from '../constants/main';
import { InputModel } from "../types/InputModel";

const AuthContent:React.FC =() => {

	const {useCallback, useState, useMemo} = React;
	const [email, setEmail] = useState('');

	const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
		setEmail(e.currentTarget.value);
	}

	function renderInput() {
		return <input id="item1" value={email} onChange={handleChange}/>;
	}

	return (
		<div>
		<SwitchComponentWrapper>
			{() => (
				<input ref="stuff" value={email} onChange={handleChange}></input>
			)}
		</SwitchComponentWrapper>
		</div>
	);
};

export default AuthContent;




{/* <AuthPopup
				getValue={getValue}
				inputData={React.useMemo(()=> authWithData(param),[param])}
				hasError={errorMessage}
				buttonOnClick={handleSubmit}
				handleChange={handleChange}
			/> */}



// return (
// 	<SwitchComponentWrapper
// 	location='row'
// 	lastNode={({onClick}) =>(<ClickableIcon onClick={onClick} />)}
// 	nextNode={({onClick}) =>(<ClickableIcon onClick={onClick} />)}
// 	max_params={SWITCH_TITLES.length}
// 	>
// 		<AuthPopup
// 			getValue={getValue}
// 			inputData={authWithData(0)}
// 			hasError={errorMessage}
// 			buttonOnClick={handleSubmit}
// 			handleChange={handleChange}
// 		/>
// 	</SwitchComponentWrapper>
// );