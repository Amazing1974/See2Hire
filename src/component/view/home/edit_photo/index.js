import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Feather';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setAvatar
} from '../../../../store/action';

import {
    Main,
    Container,
    CropPicker,
    CroppedImage,
    RowContainer,
    TextView,
    FooterContainer,
    ButtonContainer,
    ProceedButton
} from './styles';

const EditPhoto = (props) => {
    const [file, setFile] = useState(props.avatar_path);
    return (
        <Main>
            <Container>
                <CropPicker>
                    <CroppedImage source={{uri: file}} />
                </CropPicker>
                <RowContainer onPress={()=>{
                    ImagePicker.openPicker({
                        width: 300, 
                        height: 400, 
                        cropping: true,
                        cropperCircleOverlay: true
                    }).then(image=>{
                        setFile(image.path);
                    });
                }}>
                    <Icon name={'upload'} size={20} color={'#358FC0'} />
                    <TextView color={'#358FC0'} fontSize={14}>Upload photo</TextView>
                </RowContainer>
            </Container>
            <FooterContainer>
                <ButtonContainer onPress={()=>props.navigation.goBack()}>
                    <ProceedButton colors={["#FFFFFF", "#D1D4D9"]}>
                        <TextView color={'#4D658B'} fontSize={18}>Cancel</TextView>
                    </ProceedButton>
                </ButtonContainer>
                <ButtonContainer onPress={()=>{
                    props.setAvatar(file);
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
        setAvatar,
      }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPhoto);