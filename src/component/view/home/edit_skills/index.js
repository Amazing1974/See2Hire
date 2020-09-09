import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setProfileProfession,
    setProfileSkill
} from '../../../../store/action';

import {
    Main,
    Container,
    TextArea,
    FooterContainer,
    ButtonContainer,
    ProceedButton,
    TextView,
    SkillContainer,
    Deselect,
    SkillItemContainer
} from './styles';
import { KeyboardAvoidingView } from 'react-native';
import ToggleButton from '../../../widget/togglebutton';
import SearchBox from '../../../widget/searchbox';
import Icon from 'react-native-vector-icons/Ionicons';

const professions = [
    {text: 'Front-end developer', checked: false},
    {text: 'Back-end developer', checked: false},
    {text: 'Full-stack developer', checked: false},
    {text: 'Web Designer', checked: false},
    {text: 'System administrator', checked: false},
    {text: 'QA engineer', checked: false},
    {text: 'Software engineer', checked: false},
    {text: 'CEO', checked: false},
    {text: 'HR Specialist', checked: false},
    {text: 'CTO', checked: false},
    {text: 'Product manager', checked: false},
];

const skills = [
    {text: 'React.js', checked: false},
    {text: 'Vue.js', checked: false},
    {text: 'Angular.js', checked: false},
    {text: 'WordPress', checked: false},
    {text: 'Laravel', checked: false},
    {text: 'HTML5', checked: false},
    {text: 'CSS3', checked: false},
    {text: 'Javascript', checked: false},
    {text: 'PHP', checked: false},
    {text: 'C/C++', checked: false},
    {text: 'MySQL', checked: false},
];

const EditSkills = (props) => {
    const [showSkills, setShowSkills] = useState(true);
    const [skillSet, setSkillSet] = useState(skills);
    const [professionSet, setProfessionSet] = useState(professions);
    const [filteredSkills, setFilteredSkills] = useState(skills);
    const [filteredProfessions, setFilteredProfessions] = useState(professions);
    const [value, setValue] = useState(0);
    function useForceUpdate(){
        setValue(value => ++value); // update the state to force render
    }

    useEffect(()=>{
        props.skills.forEach((item) => {
            skillSet.forEach((e, index) => {
                if(e.text == item) {
                    e.checked = true;
                    return;
                }
            })
        });
        props.professions.forEach((item) => {
            professionSet.forEach((e, index) => {
                if(e.text == item) {
                    e.checked = true;
                    return;
                }
            })
        });
        
    }, []);

    return (
        <KeyboardAvoidingView>
            <Main>
                <ToggleButton
                    on={showSkills}
                    leftText={"Professions"}
                    rightText={"Skills"}
                    setOn={setShowSkills}
                    style={{width: '90%', marginTop: 20, alignSelf: 'center'}}
                />
                {showSkills ? (
                    <Container>
                        <TextView fontSize={18} color={'#000'} style={{fontWeight: 'bold', marginLeft: 30, marginBottom: 10}}>
                            Select one or more professions
                        </TextView>
                        <SearchBox 
                            placeholder={"Search Professions"} 
                            onChange={(text) => {
                                var filtered = professionSet.filter((item)=>item.text.toLowerCase().includes(text.toLowerCase()));
                                setFilteredProfessions(filtered);
                                useForceUpdate();
                        }} />
                        <Deselect onPress={()=>{
                            professions.forEach((item)=>item.checked = false);
                            setFilteredProfessions(professions);
                            useForceUpdate();
                        }}>
                            <TextView fontSize={16} color={'#358FC0'}>Deselect All</TextView>
                        </Deselect>
                        <SkillContainer>
                            {
                                filteredProfessions.map((item, index) => {
                                    return (
                                        <SkillItemContainer key={index} onPress={()=>{
                                            const tempSkillSet = filteredProfessions;
                                            tempSkillSet[index].checked = !tempSkillSet[index].checked;
                                            setFilteredProfessions(tempSkillSet);
                                            useForceUpdate();
                                        }}>
                                            <Icon 
                                                name={item.checked ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                                                color={item.checked ? '#358FC0' : '#EAEAEA'} 
                                                size={30} 
                                            />
                                            <TextView fontSize={18} style={{marginLeft: 10}}>{item.text}</TextView>
                                        </SkillItemContainer>
                                    );
                                })
                            }
                        </SkillContainer>
                    </Container> ) : (
                    <Container>
                        <TextView fontSize={18} color={'#000'} style={{fontWeight: 'bold', marginLeft: 30, marginBottom: 10}}>
                            Select one or more skills
                        </TextView>
                        <SearchBox 
                            placeholder={"Search Skills"}
                            onChange={(text) => {
                                var filtered = skillSet.filter((item)=>item.text.toLowerCase().includes(text.toLowerCase()));
                                setFilteredSkills(filtered);
                                useForceUpdate();
                        }} />
                        <Deselect onPress={()=>{
                            skills.forEach((item)=>item.checked=false);
                            setFilteredSkills(skills);
                            useForceUpdate();
                        }}>
                            <TextView fontSize={16} color={'#358FC0'}>Deselect All</TextView>
                        </Deselect>
                        <SkillContainer>
                            {
                                filteredSkills.map((item, index) => {
                                    return (
                                        <SkillItemContainer key={index} onPress={()=>{
                                            const tempSkillSet = filteredSkills;
                                            tempSkillSet[index].checked = !tempSkillSet[index].checked;
                                            setFilteredSkills(tempSkillSet);
                                            useForceUpdate();
                                        }}>
                                            <Icon 
                                                name={item.checked ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                                                color={item.checked ? '#358FC0' : '#EAEAEA'} 
                                                size={30} 
                                            />
                                            <TextView fontSize={18} style={{marginLeft: 10}}>{item.text}</TextView>
                                        </SkillItemContainer>
                                    );
                                })
                            }
                        </SkillContainer>
                    </Container> 
                    )}
            </Main>
            <FooterContainer>
                <ButtonContainer onPress={()=>props.navigation.goBack()}>
                    <ProceedButton colors={["#FFFFFF", "#D1D4D9"]}>
                        <TextView color={'#4D658B'} fontSize={18}>Cancel</TextView>
                    </ProceedButton>
                </ButtonContainer>
                <ButtonContainer onPress={()=>{
                    var skill_temp = [];
                    skillSet.forEach(item => {
                        if(item.checked) {
                            skill_temp.push(item.text);
                        }
                    });
                    props.setProfileSkill(skill_temp);
                    var profession_temp = [];
                    professionSet.forEach(item => {
                        if(item.checked) {
                            profession_temp.push(item.text);
                        }
                    });
                    props.setProfileProfession(profession_temp);
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
        setProfileProfession,
        setProfileSkill
      }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSkills);