import styled from 'styled-components';
import TextInput from '../textInput';
import Icon from 'react-native-vector-icons/Ionicons';

export const TextInputView = styled(TextInput).attrs({
  fontSize: 14,
})`
	backgroundColor: #FFFFFF;
	border: 0.5px solid gray;
	border-radius: 50px;
	paddingHorizontal: 23px;
	line-height: 18px;
	paddingVertical: 0px;
	height: 100%;
	width: 100%;
`;

export const EyeIcon = styled(Icon)`
    elevation: 5;
    marginLeft: -40px;
    alignSelf: center;
`;

export const RowContainer = styled.View`
    flexDirection: row;
    width: 90%;
	height: 50px;
	alignSelf: center;
`;
