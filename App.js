import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import App from './src';

import reducer from './src/store/reducer';

const store = createStore(reducer);

function Application(){
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    console.disableYellowBox = true;
    return ( 
        <Provider store={store}>
            <NavigationContainer><App/></NavigationContainer>
        </Provider>
    );
}

export default Application;
