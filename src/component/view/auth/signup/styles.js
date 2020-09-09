import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Text from '../../../widget/text';
import ButtonView from '../../../widget/button';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    alignItems: center;
    justifyContent: flex-start;
`;

export const Background = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const Logo = styled.Image`
    marginTop: 100px;
`;

export const SelectBtn = styled.View`
    width: 131px;
    height: 131px;
    marginHorizontal: 20px;
    background: ${props => props.isSelected? '#5F769A' : '#FFFFFF'};
    border-radius: 16px;
    display: flex;
    justifyContent: center;
    alignItems: center;
    box-shadow: 0px 5px 5px rgba(30, 52, 108, 0.26);
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

export const TextView = styled(Text).attrs({
    fontSize: 16,
})`
    color: ${props => props.color}
    textAlign: ${props => props.alignLeft ? 'left' : 'center'};
`;

export const ItemText = styled(Text).attrs({
    fontSize: 16,
})`
    color: #30303050;
    textAlign: left;
    width: 100%;
    marginTop: 5%;
`;

export const ErrorText = styled(Text).attrs({
    fontSize: 12,
})`
    color: #f05353;
    textAlign: right;
    width: 100%;
`;

export const WidgetContainer = styled.View`
	width: 80%;
    height: 56px;
    marginTop: ${props => props.top}px;
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
    width: 80%;
    height: 56px;
    marginTop: ${props => props.top}px;
`;

export const ForgotPassword = styled.TouchableOpacity.attrs({})`
    marginTop: 5px;
`;

export const RowContainer = styled.View`
    flexDirection: row;
    alignItems: center;
    marginTop: ${props => props.top}px;
`;

export const FooterContainer = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    marginTop: 50px;
    marginBottom: 20px;
`;