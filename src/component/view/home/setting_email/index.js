import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import EditIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import InputField from '../../../widget/inputField';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setAddressStreet,
    setAddressCity,
    setAddressState,
    setAddressZip,
    setAvatar
} from '../../../../store/action';

import {
    Main,
    Container,
    RowContainer,
    TextView,
    FooterContainer,
    ButtonContainer,
    ProceedButton,
    AvatarContainer,
    AvatarEditContainer,
    InputContainer,
    Avatar
} from './styles';

const EmailSetting = (props) => {
    const [firstname, setFirstname] = useState(props.first_name);
    const [lastname, setLastname] = useState(props.last_name);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);
    const [street, setStreet] = useState(props.address_street);
    const [city, setCity] = useState(props.address_city);
    const [state, setState] = useState(props.address_state);
    const [zip, setZip] = useState(props.address_zip);
    const [file, setFile] = useState(props.avatar_path);
    return (
        <Main>
            <Container>
                <AvatarContainer onPress={()=>ImagePicker.openPicker({
                    width: 110,
                    height: 110,
                    cropping: true,
                    cropperCircleOverlay: true
                }).then(image => {
                    setFile(image.path);
                })}>
                    {file == '' ? (
                        <Icon name={'user'} color={'#fff'} size={110} />
                    ) : (
                        <Avatar source={{uri: file == null ? '' : file}} />
                    )}
                    <AvatarEditContainer>
                        <EditIcon name={'pencil-outline'} color={'#358FC0'} size={20} />
                    </AvatarEditContainer>
                </AvatarContainer>
                <InputContainer>
                    <InputField placeholder="First Name" value={firstname} onChangeText={text=>setFirstname(text)} />
                </InputContainer>
                <InputContainer>
                    <InputField placeholder="Last Name" value={lastname} onChangeText={text=>setLastname(text)} />
                </InputContainer>
                <InputContainer>
                    <InputField placeholder="Email" value={email} onChangeText = {text=>setEmail(text)} />
                </InputContainer>
                <InputContainer>
                    <InputField placeholder="Phone" value={phone} onChangeText = {text=>setPhone(text)} />
                </InputContainer>
                <InputContainer>
                    <InputField placeholder="Street, No" value={street} onChangeText = {text=>setStreet(text)} />
                </InputContainer>
                <InputContainer>
                    <InputField placeholder="City" value={city} onChangeText = {text=>setCity(text)} />
                </InputContainer>
                <InputContainer>
                    <InputField placeholder="State" value={state} onChangeText = {text=>setState(text)} />
                </InputContainer>
                <InputContainer>
                    <InputField placeholder="ZIP Code" value={zip} onChangeText = {text=>setZip(text)} />
                </InputContainer>
            </Container>
            <FooterContainer>
                <ButtonContainer onPress={()=>props.navigation.goBack()}>
                    <ProceedButton colors={["#FFFFFF", "#D1D4D9"]}>
                        <TextView color={'#4D658B'} fontSize={18}>Cancel</TextView>
                    </ProceedButton>
                </ButtonContainer>
                <ButtonContainer onPress={()=>{
                    props.setAvatar(file);
                    props.setFirstName(firstname);
                    props.setLastName(lastname);
                    props.setEmail(email);
                    props.setPhone(phone);
                    props.setAddressStreet(street);
                    props.setAddressCity(city);
                    props.setAddressState(state);
                    props.setAddressZip(zip);
                    props.navigation.goBack();
                }}>
                    <ProceedButton colors={["#91A6C7", "#233D66"]}>
                        <TextView color={'#fff'} fontSize={18}>Save</TextView>
                    </ProceedButton>
                </ButtonContainer>
            </FooterContainer>
        </Main>
    )
};

const mapStateToProps = (state) => {
    const {store} = state;
    return store;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        setAddressStreet,
        setAddressCity,
        setAddressState,
        setAddressZip,
        setAvatar,
      }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailSetting);