import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ProgressBar from '../progressbar';

import {
    Container,
    VideoPlayer,
    PlayButton,
    FullScreenButton,
    CloseButton,
    Main
} from './styles';

const CardVideoPlayer = (props) => {
    const [isPaused, setPaused] = useState(props.paused);
    const [isFullScreen, setFullScreen] = useState(props.fullscreen);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    
    var player = null;
    if(props.show) {
        return (
            <Main blurType="light" blurAmount={5}>
                <Container>
                    <VideoPlayer
                        source={require('../../../assets/sample.mp4')}
                        resizeMode="cover"
                        paused={isPaused}
                        fullscreen={isFullScreen}
                        onFullscreenPlayerDidDismiss={() => setFullScreen(false)}
                        onLoad={(data)=>{
                            setDuration(data.duration);
                            setProgress(data.currentPosition);
                        }}
                        onProgress={(data)=>{
                            setProgress(data.currentTime);
                        }}
                        ref = {(ref) => {
                            player = ref
                        }}
                    />
                    <ProgressBar progress={progress/duration} />
                    <PlayButton onPress={() => setPaused(!isPaused)}>
                        <Icon name={!isPaused ? 'pause' : 'play-arrow'} size={30} color={'#fff'} />
                    </PlayButton>
                    <FullScreenButton onPress={() => setFullScreen(true)}>
                        <Icon name={'fullscreen'} size={30} color={'#fff'} />
                    </FullScreenButton>
                    <CloseButton onPress={()=>props.setShow(false)}>
                        <Icon name={'close'} size={30} color={'#fff'} />
                    </CloseButton>
                </Container>
            </Main>
        );
    } else {
        return null;
    }
    
};

export default CardVideoPlayer;