import styled from 'styled-components/native';
import Text from '../../widget/text';


export const  Button = styled.View`
	width: 100%;
	height: 100%;
	backgroundColor: ${props => props.defaultButton ? '#2866c3' : '#FFFFFF'};
	border: ${props => props.defaultButton ? '0px' : '1.5px solid #2866c3;'};
	border-radius: 12px;
	justifyContent: center;
	alignItems: center;
`;

export const TextView = styled(Text).attrs({
	fontSize: 16,
})`
	color: ${props => props.defaultButton ? '#FFFFFF' : '#2667C9'};
`;
