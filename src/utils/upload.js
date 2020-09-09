import RNFetchBlob from 'rn-fetch-blob';
import { Cloudinary } from '../config.js';

export function uploadFunc(response, setUploading, setValue, imageType, setUrl) {
	RNFetchBlob.fetch('POST', `https://api.cloudinary.com/v1_1/${Cloudinary.NAME}/image/upload?upload_preset=${Cloudinary.PRESET}`, {
		'Content-Type': 'multipart/form-data',
	}, [{ name: 'file', filename: 'object', data: response.data }]).uploadProgress((written, total) => {
		setUploading(Math.ceil(written / total * 100) + '%');
	}).then((res) => {
		setUploading('');
		const result = JSON.parse(res.text());
		setValue(imageType, result.url);
		setUrl(result.url);
	}).catch(() => {
	});
}
