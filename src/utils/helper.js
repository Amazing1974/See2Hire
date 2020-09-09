const splice = (source, idx, rem, str) => {
	return source.slice(0, idx) + str + source.slice(idx + Math.abs(rem));
};

export const ChangeImageSize = (url, width = 0, height = 0) => {
	const ind = url.indexOf('/upload/');
	let newUrl = '';
	if (width === 0 || height === 0) {
		newUrl = splice(url, ind + 8, 0, 'c_scale,q_auto:eco/');
	} else {
		newUrl = splice(url, ind + 8, 0, `c_scale,q_auto:eco,w_${width},h_${height}/`);
	}
	return newUrl;
};
