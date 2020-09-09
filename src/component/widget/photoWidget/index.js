import React from 'react';
import { PhotoWidget } from './styles';

const PhotoWidgetView = (props) => {
	return (
		<PhotoWidget
			resizeMethod={'scale'}
			resizeMode={'cover'}
			source={props.source}
		/>
	);
};

export default PhotoWidgetView;
