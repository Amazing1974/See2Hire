import styled from 'styled-components';
import TextInput from '../textInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const TextInputView = styled(TextInput).attrs({
  fontSize: 14,
})`
	backgroundColor: #FFFFFF;
	border: ${props => props.error ? '1.5px solid red' : '0px'};
	border-radius: 12px;
	paddingHorizontal: 23px;
	line-height: 18px;
	paddingVertical: 0px;
	height: 100%;
	shadow-color: #000;
	shadow-offset: {width: 0, height: 4};
	shadow-opacity: 0.15;
	shadow-radius: 4px;
    elevation: 4;
    width: 100%;
`;

export const EyeIcon = styled(Icon)`
    elevation: 5;
    marginLeft: -40px;
    alignSelf: center;
`;

export const RowContainer = styled.View`
    flexDirection: row;
    width: 100%;
    height: 100%;
`;
