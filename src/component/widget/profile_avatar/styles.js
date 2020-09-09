import styled from 'styled-components';
import Text from '../text';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
    width: 90%;
    flexDirection: row;
    padding: 10px;
`;

export const RowContainer = styled.View`
    flexDirection: row;
    marginTop: 10px;
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

export const AvatarContainer = styled.View`
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 55px;
`;

export const ContentContainer = styled.View`
    marginHorizontal: 30px;
    flex: 7;
`;

export const TextView = styled(Text)`
    fontSize: ${props => props.fontSize ? props.fontSize : 14};
    color: ${props => props.color ? props.color : '#000'};
    flexShrink: 1;
`;

export const ProceedButton = styled(LinearGradient)`
    box-shadow: 0px 8px 18px rgba(30, 52, 108, 0.26);
    border-radius: 50px;
    height: 29px;
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
    height: 29px;
    marginTop: ${props => props.top ? props.top : 0};
    width: 100px;
`;

export const EditButton = styled.TouchableOpacity`
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    position: absolute;
    right: 0;
    top: 0;
    justifyContent: center;
    alignItems: center;
`;