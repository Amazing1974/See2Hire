import React, {useState} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TouchableOpacity, Image } from 'react-native';
import logoImg from '../../../../assets/logo.png';
import backgroundImg from '../../../../assets/bg.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import InputField from '../../../widget/inputField';

import {
    setIsTalent
} from '../../../../store/action';

import {
	Container,
    Background,
	Logo,
	SelectBtn,
	TextView,
	ButtonContainer,
    ProceedButton,
    RowContainer,
    FooterContainer,
    InputContainer
} from './styles';

const landing = (props) => {
    const [isTalent, setTalent] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const { navigation } = props;
	return (
		<>
			<Container>
                <Background source={backgroundImg}/>
				
                <Logo source={logoImg} />
                <RowContainer top={60}>
                    <SelectBtn isSelected={isTalent} onPress={()=>{
                        setTalent(true);
                        props.setIsTalent(true);
                    }}>
                        <Image 
                            source={isTalent? 
                                require("../../../../assets/smart_white.png") : 
                                require("../../../../assets/smart.png")} 
                        />
                        <TextView color={isTalent? '#fff' : '#2866c3'}>Talent</TextView>
                    </SelectBtn>
                    <SelectBtn isSelected={!isTalent} onPress={()=>{
                        setTalent(false);
                        props.setIsTalent(false);
                    }}>
                        <Image 
                            source={!isTalent? require("../../../../assets/team_white.png") :
                            require("../../../../assets/team.png")} 
                        />
                        <TextView color={!isTalent? '#fff' : '#2866c3'}>Company</TextView>
                    </SelectBtn>
                </RowContainer>

                <InputContainer>
                    <InputField placeholder='Phone Number' onChangeText={text=>setPhoneNumber(text)} />
                </InputContainer>
                
                <ButtonContainer top={20} onPress={() => {props.onProceed(1, isTalent, phoneNumber);}}>
                    <ProceedButton colors={["#91A6C7", "#233D66"]}>
                        <TextView color={'#fff'}>Login with your iPhone</TextView>
                    </ProceedButton>
                </ButtonContainer>
                <ButtonContainer top={20} onPress={() => {props.onProceed(0, isTalent, '')}}>
                    <TextView color={'#286CA8'}>Register</TextView>
                </ButtonContainer>
                <FooterContainer>
                    <TouchableOpacity>
                        <TextView color={'#1a1a1c'}>Terms of service</TextView>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 50}}>
                        <TextView color={'#1a1a1c'}>Privacy Policy</TextView>
                    </TouchableOpacity>
                </FooterContainer>
			</Container>
		</>
	);
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      setIsTalent,
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(landing);
