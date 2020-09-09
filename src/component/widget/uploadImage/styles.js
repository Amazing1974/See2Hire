import styled from 'styled-components/native';
import Text from '../../widget/text';

export const TextView = styled(Text).attrs({
    fontSize: 16,
})`
    color: #1a1a1c50;
	textAlign: left;
	flexWrap: wrap;
	flex: 1;
`;

export const TitleDescription = styled(TextView).attrs({
	fontSize: 16,
})`
	color: #797979;
	width: 100%;
	marginTop: 10px;
`;

export const NormalText = styled(Text).attrs({
	fontSize: 12,
})`
	line-height: 24px;
	color: #797979;
`;

export const UploadContainer = styled.TouchableOpacity`
	width: 94px;
	height: 94px;
	borderRadius: 16px;
	border: ${(props) => props.error ? '1.5px solid red' : (props.uploaded ? '0px' : '1.5px dashed #2667c9')} ;
	overflow: hidden;
	justifyContent: center;
	alignItems: center;
	alignContent: center;
	marginRight: 16px;
`;

export const UploadTextView = styled.View`
	flex: 1;
	justifyContent: center;
	alignItems: center;
	marginTop: 5%;
`;

export const PhotoWidget = styled.Image`
	width: 100%;
	height: 100%;
`;

export const UploadIcon = styled.Image`
	width: 35.5px;
	height: 31.4px;
`;

export const TextContainer = styled.View`
	width: 60%;
	height: 100%;
	justifyContent: center;
`;
