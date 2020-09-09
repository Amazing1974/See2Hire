import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setOtp,
    setPhone,
    setIsTalent
} from '../../store/action';

import LandingScreen from '../../component/view/auth/landing';

const landing = (props) => {
  const onProceed = (isLogin, isTalent, phone) => {
    if(isLogin) {
      fetch('http://wordpresswebsiteprogrammer.com/see2hire/api/login',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          type: isTalent ? 'talent' : 'company'
        })
      })
      .then(response => response.json())
      .then(res => {
        console.log('login result = ', res);
        if(res.status == true) {
          props.setOtp(res.opt);
          props.setPhone(phone);
          props.setIsTalent(isTalent);
          props.navigation.navigate('SMSVerification');
        }
      })
      // props.navigation.navigate('Home');
    } else {
      !isTalent ? props.navigation.navigate('SignupTalent') : props.navigation.navigate('Signup');
    }
    console.log('phone = ', phone);
    console.log('isTalent = ', isTalent);
  }

  return (
    <>
      <LandingScreen
        {...props}
        onProceed={onProceed}
      />
    </>
  );
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOtp,
    setPhone,
    setIsTalent
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(landing);
