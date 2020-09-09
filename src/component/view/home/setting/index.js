import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Main,
    Container,
    CardContainer,
    CardTitle,
    CardItem,
    TextView
} from './styles';

const Setting = (props) => {
    return (
        <Main>
            <Container>
                <CardContainer>
                    <CardTitle>
                        <TextView fontSize={18} style={{fontWeight: 'bold'}}>Personal Info</TextView>
                    </CardTitle>
                    <CardItem onPress={()=>props.navigation.navigate("EmailSetting")}>
                        <TextView fontSize={18}>Name, Email, Address</TextView>
                        <Icon name={'navigate-next'} size={20} color={'#358FC0'} />
                    </CardItem>
                    <CardItem>
                        <TextView fontSize={18}>Password {'&'} Security</TextView>
                        <Icon name={'navigate-next'} size={20} color={'#358FC0'} />
                    </CardItem>
                    <CardItem>
                        <TextView fontSize={18}>Subsribtions</TextView>
                        <Icon name={'navigate-next'} size={20} color={'#358FC0'} />
                    </CardItem>
                </CardContainer>
                <CardContainer>
                    <CardTitle>
                        <TextView fontSize={18} style={{fontWeight: 'bold'}}>Billing</TextView>
                    </CardTitle>
                    <CardItem>
                        <TextView fontSize={18}>Billing methods</TextView>
                        <Icon name={'navigate-next'} size={20} color={'#358FC0'} />
                    </CardItem>
                    <CardItem>
                        <TextView fontSize={18}>Get Paid</TextView>
                        <Icon name={'navigate-next'} size={20} color={'#358FC0'} />
                    </CardItem>
                </CardContainer>
                <CardContainer>
                    <CardTitle>
                        <TextView fontSize={18} style={{fontWeight: 'bold'}}>Other Settings</TextView>
                    </CardTitle>
                    <CardItem>
                        <TextView fontSize={18}>Notifications</TextView>
                        <Icon name={'navigate-next'} size={20} color={'#358FC0'} />
                    </CardItem>
                    <CardItem>
                        <TextView fontSize={18}>Profile settings</TextView>
                        <Icon name={'navigate-next'} size={20} color={'#358FC0'} />
                    </CardItem>
                </CardContainer>
            </Container>
        </Main>
    );
};

export default Setting;