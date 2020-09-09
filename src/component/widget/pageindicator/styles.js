import styled from 'styled-components';

export const Container = styled.View`
    flexDirection: row;
    marginHorizontal: 24px;
    justifyContent: center;
    alignItems: center;
`;

export const IndicatorView = styled.View`
    backgroundColor: ${props=>props.color};
    width: 18%;
    height: 8px;
    marginHorizontal: 5px;
`;
