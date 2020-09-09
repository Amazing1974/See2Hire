import styled from 'styled-components';
import Text from '../../../widget/text';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Main = styled.View`
    width: 100%;
    height: 100%;
`;

export const Container = styled(KeyboardAwareScrollView)`
    width: 100%;
    marginBottom: 170px;
`;

export const RowContainer = styled.TouchableOpacity`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    marginBottom: 15px;
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

export const AvatarContainer = styled.TouchableOpacity`
    width: 110px;
    height: 110px;
    border-radius: 55px;
    background-color: #DEDDDD;
    alignSelf: center;
    marginTop: 20px;
`;

export const AvatarEditContainer = styled.View`
    position: absolute;
    top: 0px;
    right: 00px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: white;
    justifyContent: center;
    alignItems: center;
`;

export const Avatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 100px;
`;

export const InputContainer = styled.View`
    width: 90%;
    height: 56px;
    alignSelf: center;
    marginTop: 15px;
`;