import styled from 'styled-components';

export const Container = styled.View`
    width: 100%;
    height: 5px;
    paddingHorizontal: 10px;
    position: absolute;
    left: 0;
    bottom: 35px;
    right: 0;
`;

export const BarContainer = styled.View`
    width: 100%;
    height: 5px;
    background-color: #ffffff99;
    border-radius: 5px;
`;

export const CurrentPosition = styled.View`
    position: absolute;
    width: ${props=>props.progress}%;
    height: 5px;
    background-color: red;
    border-radius: 5px;
    top: 0;
    left: 0;
`;