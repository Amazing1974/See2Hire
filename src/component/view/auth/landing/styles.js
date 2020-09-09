import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Text from '../../../widget/text';
import ButtonView from '../../../widget/button';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    alignItems: center;
    justifyContent: center;
`;

export const Background = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const Logo = styled.Image`
    
`;

export const SelectBtn = styled.TouchableOpacity`
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

export const TextView = styled(Text).attrs({
    fontSize: 16,
})`
    color: ${props => props.color}
    textAlign: ${props => props.alignLeft ? 'left' : 'center'};
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
    width: 80%;
`;

export const RowContainer = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: flex-end;
    marginTop: ${props => props.top ? props.top : 0};
    width: 80%;
`;

export const FooterContainer = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    bottom: 20px;
    position: absolute
`;

export const InputContainer = styled.View`
    width: 80%;
    height: 56px;
    marginTop: 100px;
`;