import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Container,
    EditButton
} from './styles';

const ProfileCard = (props) => {
    return (
        <Container>
            {props.children}
            <EditButton onPress={()=>props.onPress()}>
                <Icon name={'pencil-outline'} size={20} color={'#358FC0'} />
            </EditButton>
        </Container>
    );
};

export default ProfileCard;