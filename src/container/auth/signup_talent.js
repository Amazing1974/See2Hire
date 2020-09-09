import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setFirstName,
    setLastName,
    setPhone,
} from '../../store/action';

import { USER_LOGIN } from '../../graphql/auth/mutation';
import LoginView from '../../component/view/auth/signup_talent';
import { styles } from './styles';

const login = (props) => {
  const { navigation } = props;
  const [userLogin] = useMutation(USER_LOGIN);
  const [loadingScreen, setLoadingScreen] = useState(false);

  function onProcced(data) {
		// const newData = {'password': data.password, 'mobileNumber': data.email_mobile, 'email': data.email_mobile, 'role': 'driver'};
		// setLoadingScreen(true);

		// userLogin({
		// 	variables: newData,
		// })
		// .then((res) => {
		// 	setLoadingScreen(false);
		// 	navigation.navigate('Onboarding', { res });
		// })
		// .catch((err) => {
    //   setLoadingScreen(false);
    //   alert(err);
    // });
    var formdata = new FormData();
    formdata.append("type", "talent");
    formdata.append("phone", data.phone);
    formdata.append("first_name", data.first_name);
    formdata.append("middle_name", data.middle_name);
    formdata.append("last_name", data.last_name);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://wordpresswebsiteprogrammer.com/see2hire/api/register", requestOptions)
      .then(response => response.text())
      .then(result => {
        res = JSON.parse(result);
        if(res.status == true) {
          props.setOtp(res.opt);
          props.setFirstName(data.first_name);
          props.setLastName('');
          props.setPhone(data.phone);
          navigation.navigate('SMSVerification');
        }
      })
      .catch(error => console.log('error', error));

    // props.setFirstName(data.name);
    // props.setLastName('');
    // props.setPhone(data.phone);
    // navigation.navigate('SMSVerification');
  }

  return (
    <>
      <Spinner
				visible={loadingScreen}
				textContent={'Proceeding...'}
				textStyle={styles.spinnerTextStyle}
				overlayColor="rgba(0, 0, 0, 0.5)"
			/>
      <LoginView
        {...props}
        onProcced={onProcced}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  const {store} = state;
  return store;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      setFirstName,
      setLastName,
      setPhone,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(login);
