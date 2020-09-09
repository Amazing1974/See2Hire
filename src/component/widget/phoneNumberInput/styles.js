import styled from 'styled-components/native';
import Text from '../../widget/text';
import TextInput from '../../widget/textInput';

export const ContainerPhoneInput = styled.View`
	border: ${props => props.error ? '1.5px solid red' : '0px'};
	border-radius: 12px;
	shadow-color: #000;
	shadow-offset: {width: 0, height: 4};
	shadow-opacity: 0.15;
	shadow-radius: 4px;
	elevation: 4;
`;

export const CountryCode = styled(Text).attrs({
	fontSize: 16,
})`
	flex: 2;
	alignSelf: center;
	textAlign: center;
	marginLeft: -10px;
	paddingTop: 3;
`;

export const PhoneNumber = styled(TextInput).attrs({
	fontSize: 16,
})`
	flex: 5;
	paddingTop: 3;
	paddingBottom: 0;
	borderLeftColor: lightgray;
	borderLeftWidth: 1px;
`;

export const MainView = styled.View`
	backgroundColor: white;
	height: 100%;
	width: 100%;
	flexDirection: row;
	border-radius: 12px;
	paddingLeft: 10px;
`;
