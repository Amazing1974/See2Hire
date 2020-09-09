import React, {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { get } from 'lodash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, Image } from 'react-native';

import logoImg from '../../../../assets/logo.png';
import backgroundImg from '../../../../assets/bg.png';
import InputField from '../../../widget/inputField';

import {
	Container,
	Background,
	LogoContainer,
	Logo,
	SelectBtn,
	Title,
	TextView,
	WidgetContainer,
	ButtonContainer,
	ProceedButton,
	ForgotPassword,
	RowContainer,
	FooterContainer,
	ErrorText,
} from './styles';
import PasswordTextBox from '../../../widget/passwordtextbox';
let cnt = 0;

const signup_talent = (props) => {
	const [isTalent, setTalent] = useState(false);
	const { control, handleSubmit, errors } = useForm();
	const { onProcced, navigation } = props;

	const onSubmit = async (data) => {
		onProcced(data);
	};

	return (
		<>
			<Background source={backgroundImg} />
			<Container behavior="padding">
				
                <Logo source={logoImg} />
                <RowContainer top={30}>
                    <SelectBtn isSelected={isTalent}>
                        <Image 
                            source={isTalent? 
                                require("../../../../assets/smart_white.png") : 
                                require("../../../../assets/smart.png")} 
                        />
                        <TextView color={isTalent? '#fff' : '#2866c3'}>Talent</TextView>
                    </SelectBtn>
                    <SelectBtn isSelected={!isTalent}>
                        <Image 
                            source={!isTalent? require("../../../../assets/team_white.png") :
                            require("../../../../assets/team.png")} 
                        />
                        <TextView color={!isTalent? '#fff' : '#2866c3'}>Company</TextView>
                    </SelectBtn>
                </RowContainer>
				<WidgetContainer top={56}>
					<Controller
						as={InputField}
						control={control}
						name="name"
						onChange={args => args[0].nativeEvent.text}
						placeholder={'Name'}
						rules={{ required: true }}
						defaultValue=""
						error={!!get(errors, 'name')}
					/>
					<ErrorText>{get(errors, 'name') ? 'Field required' : ''}</ErrorText>
				</WidgetContainer>
				<WidgetContainer top={36}>
					<Controller
						as={InputField}
						control={control}
						name="phone"
						onChange={args => args[0].nativeEvent.text}
						placeholder={'Phone'}
						rules={{ required: true }}
						defaultValue=""
						error={!!get(errors, 'phone')}
					/>
					<ErrorText>{get(errors, 'phone') ? 'Field required' : ''}</ErrorText>
				</WidgetContainer>
				<ButtonContainer top={80} onPress={handleSubmit(onSubmit)} >
                    <ProceedButton colors={["#91A6C7", "#233D66"]}>
                        <TextView color={'#fff'}>Continue</TextView>
                    </ProceedButton>
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

export default signup_talent;
