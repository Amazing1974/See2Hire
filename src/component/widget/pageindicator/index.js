import React from 'react';

import { Container, IndicatorView } from './styles';

const PageIndicator = (props) => {
	const drawViews = () => {
		let res = [];
		for (let i = 1; i < props.index; i++) {
			res.push(<IndicatorView color={'#2667c9'} />);
		}
		res.push(<IndicatorView color={'#2667c950'} />);
		for (let i = props.index; i < 5; i++) {
			res.push(<IndicatorView color={'#dbdbdb'} />);
		}
		return res;
	};

	return (
		<Container>
			{drawViews()}
		</Container>
	);
};

export default PageIndicator;
