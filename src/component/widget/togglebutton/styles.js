import styled from 'styled-components';
import Text from '../text';

export const Container = styled.View`
    width: 100%;
    height: 34px;
    flexDirection: row;
`;

export const LeftButton = styled.TouchableOpacity`
    border-top-left-radius: 17px;
    border-bottom-left-radius: 17px;
    width: 50%;
    border: 1px solid #5F769A;
    background-color: ${props => props.on ? '#5F769A' : '#FFF'};
    justifyContent: center;
    alignItems: center;
`;

export const RightButton = styled.TouchableOpacity`
    border-top-right-radius: 17px;
    border-bottom-right-radius: 17px;
    width: 50%;
    border: 1px solid #5F769A;
    background-color: ${props => !props.on ? '#5F769A' : '#FFF'};
    justifyContent: center;
    alignItems: center;
`;

export const TextView = styled(Text).attrs({
    fontSize: 15
})`
    color: ${props => props.on ? '#FFF' : '#5F769A'};
`;