import { Link } from 'react-router-dom';

import * as S from './circleButtonStyle';

export default function CircleButton(props) {
	const { link, click } = props;

	if (props.link) {
		return (
			<S.ButtonContainer>
				<Link to={link}>{props.children}</Link>
			</S.ButtonContainer>
		);
	} else {
		return (
			<S.ButtonContainer>
				<button
					disabled={!props.disabled ? false : props.disabled}
					onClick={click}
				>
					{props.children}
				</button>
			</S.ButtonContainer>
		);
	}
}
