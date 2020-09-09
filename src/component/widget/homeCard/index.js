import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CardVideoPlayer from '../cardVideoPlayer';
import { 
    Main,
    Container, 
    UserAvatar, 
    ContentContainer, 
    TextView, 
    RowContainer, 
    ButtonContainer,
    SeeMoreButton
} from './styles';

const HomeCard = (props) => {
    const [isShow, showVideo] = useState(false);
    return (
        <Main>
            <CardVideoPlayer paused={true} fullscreen={false} show={isShow} setShow={showVideo}></CardVideoPlayer>
            <Container>
                <SeeMoreButton>
                    <TextView fontSize={14} color={'#358FC0'}>See More {'>'}</TextView>
                </SeeMoreButton>
                <RowContainer>
                    <UserAvatar source={require('../../../assets/user.png')} />
                    <ContentContainer>
                        <TextView fontSize={12} numberOfLines={2}>Depika Shukar</TextView>
                        <TextView fontSize={14} numberOfLines={2} style={{marginTop: 10}}>Front-end developer, Angular JS, React JS, Web design, User .....</TextView>
                    </ContentContainer>
                </RowContainer>
                <RowContainer>
                    <ButtonContainer>
                        <Icon name={'checkbox-marked-outline'} size={25} color={'#358FC0'} />
                        <TextView fontSize={14} color={'#358FC0'}>Hire</TextView>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Icon name={'file-document-outline'} size={25} color={'#358FC0'} />
                        <TextView fontSize={14} color={'#358FC0'}>Resume</TextView>
                    </ButtonContainer>
                    <ButtonContainer onPress={() => showVideo(true)}>
                        <Icon name={'play-circle-outline'} size={25} color={'#358FC0'} />
                        <TextView fontSize={14} color={'#358FC0'}>Watch video</TextView>
                    </ButtonContainer>
                </RowContainer>
            </Container>
        </Main>
    );
}

export default HomeCard;