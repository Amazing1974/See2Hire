import styled from 'styled-components';
import Text from '../../../widget/text';
import LinearGradient from 'react-native-linear-gradient';
import Textarea from 'react-native-textarea';
import {StyleSheet} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const MainContainer = styled.View`
    width: 100%;
    height: 100%;
    paddingBottom: 170px;
`;

export const Main = styled(KeyboardAwareScrollView)`
    width: 100%;
    height: 100%;
`;

export const Container = styled.View`
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
    width: 90%;
    padding: 15px;
    alignSelf: center;
    marginTop: 20px;
`;

export const RowContainer = styled.TouchableOpacity`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    marginBottom: 15px;
`;

export const Eraser = styled.TouchableOpacity`
    position:absolute;
    top: 10px;
    right: 10px;
`;

export const TextView = styled(Text)`
    fontSize: ${props => props.fontSize ? props.fontSize : 14};
    color: ${props => props.color ? props.color : '#000'};
    flexShrink: 1;
`;

export const ProceedButton = styled(LinearGradient)`
    box-shadow: 0px 8px 18px rgba(30, 52, 108, 0.26);
    border-radius: 50px;
    paddingHorizontal: 20px;
    height: 56px;
    flex: 1;
    alignItems: center;
    justifyContent: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
    height: 56px;
    width: 40%;
`;

export const FooterContainer = styled.View`
    flexDirection: row;
    width: 100%;
    justifyContent: space-around;
    position: absolute;
    left: 0;
    bottom: 100px;
    right: 0;
`;

export const FieldContainer = styled.View`
    marginTop: 20px;
    width: 100%;
    height: 56px;
`;

export const AddContainer = styled.TouchableOpacity`
    width: 100%;
    justifyContent: center;
    alignItems: center;
    flexDirection: row;
    marginTop: 10px;
`;