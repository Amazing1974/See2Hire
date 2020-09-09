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
	setAvatar,
	setAddressStreet,
	setAddressCity,
	setAddressState,
	setAddressZip,
	setVideo,
	setVideoCover,
	setOverview,
	setProfileSkill,
	setProfileProfession,
	setProfileExperience,
	setToken,
	setCompanyProfile,
} from '../../store/action';

import SMSVerification from '../../component/view/auth/smsVerification';

const smsVerification = (props) => {
	const [driverVerifySecretCode] = useMutation(VERIFY_PINCODE);
	const [makeCallToDriver] = useMutation(MAKE_CALL);
	const [driverVerifyNumber] = useMutation(VERIFY_NUMBER);
	const [isProceeded, setProceeded] = useState(true);
	
	function onProcced(pin) {
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
		.then(res => {
			result = JSON.parse(res);
			if(result.status == true) {
				props.setAddressStreet(result.data.street_address);
				props.setAddressCity(result.data.city_id);
				props.setAddressState(result.data.state_id);
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("http://wordpresswebsiteprogrammer.com/see2hire/api/"+(props.isTalent?'talent':'company')+"/profile/"+result.api_token, requestOptions)
					.then(response => response.text())
					.then(res => {
						result = JSON.parse(res);
						console.log(result);
						if(props.isTalent) {
							if(result.status == true) {
								props.setFirstName(result.data.first_name);
								props.setMiddleName(result.data.middle_name);
								props.setLastName(result.data.last_name);
								props.setEmail(result.data.email);
								props.setAvatar(result.data.image);
								props.setVideo(result.data.video);
								
								props.setOverview(result.data.about_me);
								props.setProfileExperience(result.data.profileCvs);
								props.setProfileSkill(result.data.profileSkills);
								props.setProfileProfession(result.data.profileEducation);
								props.navigation.navigate('Home_Talent');
							}
						} else {
							setCompanyProfile(result.data);
							props.navigation.navigate('Home_Company');
						}
					})
					.catch(error => console.log('error', error));
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
        setFirstName,
		setMiddleName,
		setLastName,
		setEmail,
		setAvatar,
		setAddressStreet,
		setAddressCity,
		setAddressState,
		setAddressZip,
		setVideo,
		setVideoCover,
		setOverview,
		setProfileSkill,
		setProfileProfession,
		setProfileExperience,
		setToken,
		setCompanyProfile,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(smsVerification);