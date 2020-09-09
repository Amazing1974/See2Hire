import React, {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { get } from 'lodash';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity, Image, ScrollView } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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

const signup = (props) => {
	const [isTalent, setTalent] = useState(true);
	const { control, handleSubmit, errors } = useForm();
	const { onProcced, navigation } = props;

	const onSubmit = async (data) => {
		onProcced(data);
	};

	return (
		<>
			<Background source={backgroundImg} />
        <KeyboardAwareScrollView>
          <Container>
          <Logo source={logoImg} />
          <RowContainer top={10}>
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
          <WidgetContainer top={20}>
            <Controller
              as={InputField}
              control={control}
              name="first_name"
              onChange={args => args[0].nativeEvent.text}
              placeholder={'First Name'}
              rules={{ required: true }}
              defaultValue=""
              error={!!get(errors, 'first_name')}
            />
            <ErrorText>{get(errors, 'first_name') ? 'Field required' : ''}</ErrorText>
          </WidgetContainer>
          <WidgetContainer top={20}>
            <Controller
              as={InputField}
              control={control}
              name="middle_name"
              onChange={args => args[0].nativeEvent.text}
              placeholder={'Middle Name'}
              rules={{ required: false }}
              defaultValue=""
            />
          </WidgetContainer>
          <WidgetContainer top={20}>
            <Controller
              as={InputField}
              control={control}
              name="last_name"
              onChange={args => args[0].nativeEvent.text}
              placeholder={'Last Name'}
              rules={{ required: true }}
              defaultValue=""
              error={!!get(errors, 'last_name')}
            />
            <ErrorText>{get(errors, 'last_name') ? 'Field required' : ''}</ErrorText>
          </WidgetContainer>
          <WidgetContainer top={20}>
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
          <TextView color={'#000'} style={{marginTop: 20}}>Or signup with</TextView>
          <RowContainer top={20}>
            <Icon style={{marginHorizontal: 15}} name={'facebook-with-circle'} size={56} color={'#3B5998'} />
            <Icon style={{marginHorizontal: 15}} name={'linkedin-with-circle'} size={56} color={'#0077B5'} />
          </RowContainer>
          <FooterContainer>
              <TouchableOpacity>
                  <TextView color={'#1a1a1c'}>Terms of service</TextView>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 50}}>
                  <TextView color={'#1a1a1c'}>Privacy Policy</TextView>
              </TouchableOpacity>
          </FooterContainer>
        </Container>
      </KeyboardAwareScrollView>
		</>
	);
};

export default signup;
