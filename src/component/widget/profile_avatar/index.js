import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    UserAvatar,
    TextView,
    RowContainer,
    ContentContainer,
    ButtonContainer,
    ProceedButton,
    EditButton,
    AvatarContainer
} from './styles';

const ProfileAvatar = (props) => {
    return (
        <Container>
            <RowContainer>
                <AvatarContainer>
                    <UserAvatar source={props.path == '' ? require('../../../assets/user.png') : {uri: props.path}} />
                    <EditButton onPress={()=>props.onPress()}>
                        <Icon name={'pencil-outline'} size={20} color={'#358FC0'} />
                    </EditButton>
                </AvatarContainer>
                <ContentContainer>
                    <TextView fontSize={18}>{props.name}</TextView>
                    <TextView fontSize={14} color={'#929292'}>{props.location}</TextView>
                    <TextView fontSize={14} color={'#929292'}>11:26am local time</TextView>
                    <ButtonContainer top={10}>
                        <ProceedButton colors={["#91A6C7", "#233D66"]}>
                            <Icon name={'logout'} size={20} color={'white'} />
                            <TextView fontSize={12} color={'white'}>Logout</TextView>
                        </ProceedButton>
                    </ButtonContainer>
                </ContentContainer>
            </RowContainer>
        </Container>
    );
};

export default ProfileAvatar;