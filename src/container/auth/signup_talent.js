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
    props.setFirstName(data.name);
    props.setLastName('');
    props.setPhone(data.phone);
    navigation.navigate('SMSVerification', {data});
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
