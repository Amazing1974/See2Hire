import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { VERIFY_PINCODE, MAKE_CALL, VERIFY_NUMBER } from '../../graphql/auth/mutation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	setFirstName,
	setMiddleName,
	setLastName,
	setEmail,
} from '../../store/action';

import SMSVerification from '../../component/view/auth/smsVerification';

const smsVerification = (props) => {
	const [driverVerifySecretCode] = useMutation(VERIFY_PINCODE);
	const [makeCallToDriver] = useMutation(MAKE_CALL);
	const [driverVerifyNumber] = useMutation(VERIFY_NUMBER);
	const [isProceeded, setProceeded] = useState(true);
	// const { data } = props.route.params;
	
	function onProcced(pin) {
	// 	const pinData = {'mobileNumber': data.mobileNumber, 'token': pin};
    // driverVerifySecretCode({
	// 		variables: pinData,
	// 	}).then((res) => {
	// 		console.log(res);
	// 		if (res.data.driverVerifySecretCode.user.id !== null) {
	// 			setProceeded(false);
	// 			props.navigation.navigate('PersonalData', { data });
	// 		}
	// 	}).catch((err) => {
	// 		// eslint-disable-next-line no-alert
	// 		alert(err);
	// 	});
	console.log('entered otp = ', pin);
	
		var formdata = new FormData();
		formdata.append("phone", props.phone);
		formdata.append("type", props.isTalent? 'talent' : 'company');
		formdata.append("opt", props.otp);

		console.log('formdata = ', formdata);
		
		var requestOptions = {
			method: 'POST',
			body: formdata,
			redirect: 'follow'
		};
		
		fetch("http://wordpresswebsiteprogrammer.com/see2hire/api/opt_verify", requestOptions)
		.then(response => response.text())
		.then(result => {
			console.log(result);
			if(result.status == true) {

			}
		})
		.catch(error => console.log('error', error));
		// props.navigation.navigate('Home', {data});
  	}

	function onResend() {
		driverVerifyNumber({
      variables: data,
    }).then((res) => {
    }).catch((err) => {
      // eslint-disable-next-line no-alert
      alert(err);
    });
	}

	function onCallme() {
		const callData = {'mobileNumber': data.mobileNumber};
		makeCallToDriver({
			variables: callData,
		}).then((res) => {
		}).catch((err) => {
			// eslint-disable-next-line no-alert
			alert(err);
		});
	}

  return <SMSVerification
		{...props}
		onProcced={onProcced}
		onCallme={onCallme}
		onResend={onResend}
		isProceeded = {isProceeded}
  />;
};

const mapStateToProps = (state) => ({
	phone : state.store.phone,
	isTalent : state.store.isTalent,
	otp : state.store.otp
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        
      }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(smsVerification);