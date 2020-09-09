import React, { useState, useEffect } from 'react';
import { PermissionsAndroid, TouchableOpacity } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import SmsListener from 'react-native-android-sms-listener';
import Icon from 'react-native-vector-icons/MaterialIcons';

import backgroundImg from '../../../../assets/bg.png';
import logoImg from '../../../../assets/logo.png';

import {
	Container,
	Main,
	Title,
	Background,
	BackButton,
	TextView,
	WidgetContainer,
	ButtonContainer,
	ProceedButton,
	cellStyle,
	Logo,
	FooterContainer
} from './styles';

async function requestReadSmsPermission() {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_SMS,
//       {
//         title: 'Auto Verification OTP',
//         message: 'need access to read sms, to verify OTP',
//       }
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     } else {
//     }
//   } catch (err) {
//     console.warn(err);
//   }
}

const smsVerification = (props) => {
	const [code, setCode] = useState();
	const { onProcced, onResend, navigation } = props;

	const checkCode = (pin) => {
		onProcced(pin);
	};

	useEffect(() => {
		requestReadSmsPermission();
		let subscription = SmsListener.addListener(message => {
			console.info(message);
			// alert(`: ${JSON.stringify(message.body)}`);
			const approvalVariable = 'your verification pin is ';
			let filteredData = message.body.includes(approvalVariable);
			if (filteredData) {
				console.info('filteredData: ',filteredData);
				var token = message.body.replace(approvalVariable,'');
				setCode(token);
				checkCode(token);
				subscription.remove();
			}
		});
	}, []);

	return (
		<>
		<Container>
      		<Background source={backgroundImg}/>
				
			<Logo source={logoImg} />
			<Main>
				<TextView color={'#1a1a1c'}>Enter 6 digit code we have sent you at {props.phone}</TextView>
				<WidgetContainer>
					<SmoothPinCodeInput
						codeLength={6}
						value={code}
						onTextChange={(pin) => {
							setCode(pin);
						}}
						cellSize={42}
						cellStyle={cellStyle.cellStyle}
						cellStyleFocused={cellStyle.cellStyleFocused}
						cellSpacing={10}
					/>
				</WidgetContainer>
				<TextView
					color={'#2667c9'}
					onPress={() => {
						onResend();
					}}>
					Resend OTP
				</TextView>
				<ButtonContainer top={80} onPress={() => checkCode(code)} >
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
			</Main>
		</Container>
		</>
  );
};

export default smsVerification;
