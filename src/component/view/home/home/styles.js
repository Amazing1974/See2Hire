import styled from 'styled-components/native';
import Text from '../../../widget/text';

export const Container = styled.View`
	flex: 1;
    top: 60px;
    width: 100%;
    alignItems: center;
    justifyContent: center;
    marginBottom: 60px;
`;

export const TextView = styled(Text).attrs({
    fontSize: 32,
})`
`;

export const Background = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const CardContainer = styled.ScrollView`
    width: 100%;
    height: 100%;
    marginTop: 24;
`;