import styled from 'styled-components';
import Text from '../../../widget/text';

export const Main = styled.ScrollView`
    width: 100%;
    height: 100%;
    marginTop: 60px;
    marginBottom: 70px;
`;

export const Container = styled.View`
    width: 100%;
    justifyContent: center;
    alignItems: center;
`;

export const CardContainer = styled.View`
    width: 90%;
    padding: 15px;
    marginVertical: 10px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
    elevation: 4;
`;

export const CardTitle = styled.View`
    justifyContent: center;
    alignItems: center;
    height: 55px;
`;

export const CardItem = styled.TouchableOpacity`
    border-top-width: 1px;
    border-top-color: #E9E9E9;
    height: 55px;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`;

export const TextView = styled(Text)`
    fontSize: ${props => props.fontSize ? props.fontSize : 14};
    color: #000;
    flexShrink: 1;
`;