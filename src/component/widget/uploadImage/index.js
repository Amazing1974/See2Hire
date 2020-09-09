import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';

import { uploadFunc } from '../../../utils/upload';
import uploadIcon from '../../../assets/uploadIcon.png';

import {
	UploadContainer,
	UploadIcon,
	TextView,
	PhotoWidget,
	TextContainer,
} from './styles';

const UploadImage = (props) => {
	const { description, url, error, type, setValue, setUrl } = props;
	const [isUploading, setUploading] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const onUpload = async (imageType) => {
		let options = {
			title: 'Select Image',
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
		};
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
			} else if (response.error) {
			} else {
				setUploading('0%');
				uploadFunc(response, setUploading, setValue, imageType, setUrl);
				setImageUrl(response.uri);
			}
		});
	};

	return (
		<>
			{(isUploading === '') ? (
				(url === undefined) ? (
					<>
						<UploadContainer error={ error } onPress={() => onUpload(type)} >
							<UploadIcon resizeMode={'contain'} source={uploadIcon} />
						</UploadContainer>
						<TextView>{description}</TextView>
					</>
				) : (
					<>
						<UploadContainer error={ error } uploaded >
							<PhotoWidget
								resizeMode={'cover'}
								source={{uri: imageUrl}}
							/>
						</UploadContainer>
						<TextContainer>
							<View>
								<Icon name="checkcircle" size={16} color={'#3cc62a'} />
								<TextView>Photo uploaded successfully</TextView>
							</View>
						</TextContainer>
					</>
			)) : (
				<>
					<UploadContainer error={ error } >
						<ActivityIndicator size="large" />
					</UploadContainer>
					<TextView>Your photo is being uploaded</TextView>
				</>
			)}
		</>
	);
};

export default UploadImage;
