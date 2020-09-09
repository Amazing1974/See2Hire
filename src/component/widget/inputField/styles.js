import styled from 'styled-components';
import TextInput from '../textInput';

export const TextInputView = styled(TextInput).attrs({
  fontSize: 14,
})`
	border: ${props => props.error ? '1px solid red' : '1px solid #E6E6E6'};
	paddingHorizontal: 23px;
	line-height: 18px;
	paddingVertical: 0px;
	height: 100%;
	elevation: 4;
	background: #FFFFFF;
	border-radius: 58px;
`;
