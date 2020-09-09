import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setVideo,
    setVideoCover
} from '../../../../store/action';

import {
    Main,
    Container,
    VideoPlayer,
    CropPicker,
    CroppedImage,
    RowContainer,
    TextView,
    FooterContainer,
    ButtonContainer,
    ProceedButton
} from './styles';

const EditVideo = (props) => {
    const [file, setFile] = useState(props.video_path);
    const [cover, setCover] = useState(props.video_cover_path);
    return (
        <Main>
            <Container>
                <VideoPlayer
                    source={file}
                    controls={true}
                    paused={true}
                    resizeMode='cover'
                />
                <RowContainer onPress={()=>{
                    ImagePicker.openPicker({
                        mediaType:'video'
                    }).then(image=>{
                        setFile({uri: image.path});
                    });
                }}>
                    <Icon name={'upload'} size={20} color={'#358FC0'} />
                    <TextView color={'#358FC0'} fontSize={14}>Upload different video</TextView>
                </RowContainer>
            </Container>
            <Container style={{backgroundColor: 'transparent'}}>
                <CropPicker>
                    <CroppedImage source={{uri: cover}} />
                </CropPicker>
                <RowContainer onPress={()=>{
                        ImagePicker.openPicker({
                            width: 300, 
                            height: 400, 
                            mediaType: 'photo'
                        }).then(image=>{
                            setCover(image.path);
                        });
                    }}>
                    <Icon name={'upload'} size={20} color={'#358FC0'} />
                    <TextView color={'#358FC0'} fontSize={14}>Upload video cover</TextView>
                </RowContainer>
            </Container>
            <FooterContainer>
                <ButtonContainer onPress={()=>props.navigation.goBack()}>
                    <ProceedButton colors={["#FFFFFF", "#D1D4D9"]}>
                        <TextView color={'#4D658B'} fontSize={18}>Cancel</TextView>
                    </ProceedButton>
                </ButtonContainer>
                <ButtonContainer onPress={()=>{
                    props.setVideo(file);
                    props.setVideoCover(cover);
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
        setVideo,
        setVideoCover,
      }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditVideo);