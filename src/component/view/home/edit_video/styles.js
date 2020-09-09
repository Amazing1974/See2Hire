import styled from 'styled-components';
import Text from '../../../widget/text';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

export const Main = styled.View`
    width: 100%;
    height: 100%;
    alignItems: center;
`;

export const Container = styled.View`
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
    width: 90%;
    marginTop: 20px;
`;

export const VideoPlayer = styled(Video)`
    background-color: gray;
    border-radius: 16px;
    margin-bottom: 15px;
    width: 100%;
    height: 250px;
    overflow: hidden;
    alignItems: center;
`;

export const CropPicker = styled.View`
    background-color: gray;
    border-radius: 16px;
    margin-bottom: 15px;
    width: 100%;
    height: 250px;
    overflow: hidden;
    alignItems: center;
`;

export const CroppedImage = styled.Image`
    width: 100%;
    height: 250px;
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