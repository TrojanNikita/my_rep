import { useRouteMatch, useLocation } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IAuth, IPassword, IEmail } from '../types/IAuthState';
import AuthPopup from '../components/AuthPopup';
import SwitchComponentWrapper from './../containers/SwitchComponentWrapper';
import ClickableIcon from "../../ui/ClickableIcon";
import { login } from '../constants/main';
import {logins} from './../constants/data';
import { InputModel } from "../types/InputModel";

const AuthContent:React.FC =() => {


	return (
		<SwitchComponentWrapper
			location='row'
			lastNode={({onClick}) =>(<ClickableIcon onClick={onClick} />)}
			nextNode={({onClick}) =>(<ClickableIcon onClick={onClick} />)}
			max_params={logins.length}
		>
			{({param}) => (
				<AuthPopup
					login={param}
				/>
			)}
		</SwitchComponentWrapper>
	);
};

export default AuthContent;