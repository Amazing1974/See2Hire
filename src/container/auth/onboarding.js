import React from 'react';

import OnBoardingScreen from '../../component/view/auth/onboarding';

const onboarding = (props) => {
  function onProcced() {
    props.navigation.navigate('VehicleInformation');
  }

  return <OnBoardingScreen
    onProcced={onProcced}
  />;
};

export default onboarding;
