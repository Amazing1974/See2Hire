import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import InputField from '../../../widget/inputField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setProfileExperience
} from '../../../../store/action';

import {
    Main,
    MainContainer,
    Container,
    FooterContainer,
    ButtonContainer,
    ProceedButton,
    TextView,
    Eraser,
    FieldContainer,
    RowContainer,
    AddContainer
} from './styles';

const EditExperience = (props) => {
    const [experience, setExperiences] = useState([...props.experiences]);
    return (
        <MainContainer>
            <Main>
                {
                    experience.map((item, index) => {
                        return (
                            <Container key={index}>
                                <Eraser onPress={()=>{
                                    experience.splice(index, 1);
                                    var newArray = [...experience];
                                    setExperiences(newArray);
                                }}>
                                    <Icon name={'trash-outline'} color={'#358FC0'} size={20} />
                                </Eraser>
                                <FieldContainer>
                                    <InputField placeholder={'Company Name'} defaultValue={item.company} onChangeText={(text)=>{experience[index] = {...experience[index], company: text};}} />
                                </FieldContainer>
                                <FieldContainer>
                                    <InputField placeholder={'Position'} defaultValue={item.position} onChangeText={(text)=>{experience[index] = {...experience[index], position: text};}} />
                                </FieldContainer>
                                <RowContainer>
                                    <FieldContainer style={{width: '48%'}}>
                                        <InputField placeholder={'From YYYY'} defaultValue={item.from} onChangeText={(text)=>{experience[index] = {...experience[index], from: text};}} />
                                    </FieldContainer>
                                    <TextView fontSize={18}>_</TextView>
                                    <FieldContainer style={{width: '48%'}}>
                                        <InputField placeholder={'To YYYY'} defaultValue={item.to} onChangeText={(text)=>{experience[index] = {...experience[index], to: text};}} />
                                    </FieldContainer>
                                </RowContainer>
                            </Container>
                        );
                    })
                }
                <AddContainer onPress={() => {
                    var newItem = {company: '', position: '', from: '', to: ''};
                    var newArray=[...experience];
                    newArray.push(newItem);
                    setExperiences(newArray);
                }}>
                    <Icon name={'add'} size={20} color={'#358FC0'} />
                    <TextView fontSize={18} color={'#358FC0'}>Add another experience</TextView>
                </AddContainer>
            </Main>
            <FooterContainer>
                <ButtonContainer onPress={()=>props.navigation.goBack()}>
                    <ProceedButton colors={["#FFFFFF", "#D1D4D9"]}>
                        <TextView color={'#4D658B'} fontSize={18}>Cancel</TextView>
                    </ProceedButton>
                </ButtonContainer>
                <ButtonContainer onPress={()=>{
                    var temp = [...experience];
                    props.setProfileExperience(temp);
                    props.navigation.goBack();
                }}>
                    <ProceedButton colors={["#91A6C7", "#233D66"]}>
                        <TextView color={'#fff'} fontSize={18}>Save</TextView>
                    </ProceedButton>
                </ButtonContainer>
            </FooterContainer>
        </MainContainer>
    )
};

const mapStateToProps = (state) => ({
    experiences : state.store.experiences
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setProfileExperience
      }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExperience);