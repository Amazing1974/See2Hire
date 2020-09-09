import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ButtonView from '../../../widget/button';
import Text from '../../../widget/text';

export const Main = styled.View`
	flex: 1;
	alignSelf: center;
	width: 80%;
	paddingTop: 90px;
`;

export const Container = styled.View`
    flex: 1;
    width: 100%;
    alignItems: center;
    justifyContent: center;
`;

export const Title = styled(Text).attrs({
    fontSize: 32,
})`
    fontWeight: bold;
    color: #1a1a1c;
    textAlign: center;
    width: 100%;
    marginTop: 24px;
`;

export const Logo = styled.Image`
    marginTop: 100px;
`;

export const TextView = styled(Text).attrs({
    fontSize: 16,
})`
    color: ${props => props.color}
    textAlign: ${props => props.alignLeft ? 'left' : 'center'};
`;

export const WidgetContainer = styled.View`
    width: 100%;
    marginTop: 10%;
    justifyContent: center;
    alignItems: center;
`;

export const ResendContainer = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
`;

export const ProceedButton = styled(LinearGradient)`
    box-shadow: 0px 8px 18px rgba(30, 52, 108, 0.26);
    border-radius: 50px;
    paddingHorizontal: 20px;
    height: 56px;
    flex: 1;
    alignItems: center;
    justifyContent: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
    height: 56px;
    marginTop: ${props => props.top};
    width: 100%;
`;

export const BackButton = styled.TouchableOpacity.attrs({})`
    position: absolute;
    left: 24px;
    top: 24px;
`;

export const Background = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;


export const FooterContainer = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    bottom: 20px;
    position: absolute
`;

export const cellStyle = StyleSheet.create({
    cellStyle:{
        borderWidth: 0,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    cellStyleFocused: {
        borderColor: 'black',
    },
});
