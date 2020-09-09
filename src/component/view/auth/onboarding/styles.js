import styled from 'styled-components/native';
import Text from '../../../widget/text';

export const Main = styled.View`
	flex: 1;
	justifyContent: center;
	alignItems: center;
`;

export const TextView = styled(Text).attrs({
	fontSize: 40,
})`
	color: #2667C9;
	textAlign: center;
	font-weight: 600;
`;
