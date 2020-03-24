import * as React from "react";
import AuthPopup from '../components/AuthPopup';
import SwitchComponentWrapper from './../containers/SwitchComponentWrapper';
import ClickableIcon from "../../ui/ClickableIcon";
import {logins} from './../constants/data';

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