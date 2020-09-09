import styled from 'styled-components';
import Video from 'react-native-video';
import { BlurView } from "@react-native-community/blur";

export const Main = styled(BlurView)`
    position: absolute;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    background-color: #ffffff88;
    z-index: 99;
`;

export const Container = styled.View`
    border-radius: 16px;
    height: 100%;
    background-color: #000;
    width: 60%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    overflow: hidden;
`;

export const VideoPlayer = styled(Video)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const PlayButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 3px;
    left: 10px;
`;

export const FullScreenButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 3px;
    right: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
    position: absolute;
    top: 3px;
    right: 10px;
`;