import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setOverview
} from '../../../../store/action';

import {
    Main,
    Container,
    TextArea,
    FooterContainer,
    ButtonContainer,
    ProceedButton,
    TextView,
    styles
} from './styles';
import { KeyboardAvoidingView } from 'react-native';

const EditOverview = (props) => {
    const [overview, setOverview] = useState(props.overview);
    console.log('store = ', props.experiences);
    return (
        <KeyboardAvoidingView>
            <Main>
                <Container>
                    <TextArea
                        containerStyle={styles.textarea}
                        maxLength={3000}
                        value={overview}
                        placeholder={"Write your overview here"}
                        onChangeText={text=>setOverview(text)}
                    />
                </Container>
                <TextView fontSize={14} style={styles.textview}>Use this space to show clients you have the skills and experience they're looking for.</TextView>
            </Main>
            <FooterContainer>
                <ButtonContainer onPress={()=>props.navigation.goBack()}>
                    <ProceedButton colors={["#FFFFFF", "#D1D4D9"]}>
                        <TextView color={'#4D658B'} fontSize={18}>Cancel</TextView>
                    </ProceedButton>
                </ButtonContainer>
                <ButtonContainer onPress={()=>{
                    props.setOverview(overview);
                    props.navigation.goBack();
                }}>
                    <ProceedButton colors={["#91A6C7", "#233D66"]}>
                        <TextView color={'#fff'} fontSize={18}>Save</TextView>
                    </ProceedButton>
                </ButtonContainer>
            </FooterContainer>
        </KeyboardAvoidingView>
    )
};

const mapStateToProps = (state) => {
    const {store} = state;
    return store;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setOverview,
      }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditOverview);