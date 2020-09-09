import styled from 'styled-components';

export const Container = styled.View`
    width: 90%;
    background-color: white;
    border-radius: 16px;
    overflow: hidden;
    padding: 15px;
    marginVertical: 10px;
    min-height: 100px;
`;

export const EditButton = styled.TouchableOpacity`
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
    justifyContent: center;
    alignItems: center;
    elevation: 100;
`;