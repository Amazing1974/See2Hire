import styled from 'styled-components';
import Text from '../../widget/text';

export const Main = styled.View`
    marginVertical: 8px;
    width: 90%;
    alignSelf: center;

`;

export const Container = styled.View`
    backgroundColor: #fff;
    border-radius: 16px;
    flex: 1;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
    padding: 16px;
    width: 100%;
`;

export const RowContainer = styled.View`
    flexDirection: row;
    marginTop: 10px;
    justifyContent: space-between;
`;

export const UserAvatar = styled.Image`
    
`;

export const ContentContainer = styled.View`
    paddingHorizontal: 10px;
    flex: 7;
`;

export const TextView = styled(Text)`
    fontSize: ${props => props.fontSize};
    color: ${props => props.color ? props.color : '#000'};
    flexShrink: 1;
`;

export const ButtonContainer = styled.TouchableOpacity`
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
`;

export const SeeMoreButton = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    right: 20px;
`;