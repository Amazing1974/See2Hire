/* eslint-disable no-shadow */
import React, { useState } from 'react';
import PhoneInput from 'react-native-phone-input';

import { ContainerPhoneInput, CountryCode, PhoneNumber, MainView } from './styles';

const PhoneNumberInput = (props) => {
	const [countryCode, setCountryCode] = useState('+234');
	const [component, setComponent] = useState();

	return (
		<ContainerPhoneInput {...props}>
			<MainView>
				<PhoneInput
					ref={component => setComponent(component)}
					value={countryCode}
					onSelectCountry={
						() => {
							setCountryCode(component.getValue());
							props.setCountryCode(component.getValue());
						}
					} />
				<CountryCode> {countryCode} </CountryCode>
				<PhoneNumber
					keyboardType={'phone-pad'}
					placeholder="0803 123 4567"
					onChangeText={
						(value) => {
							props.setCountryCode(component.getValue());
							props.setPhoneNum(value);
						}
					} />
			</MainView>
		</ContainerPhoneInput>
	);
};

export default PhoneNumberInput;
