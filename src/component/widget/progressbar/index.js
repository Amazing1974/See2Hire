import React from 'react';

import {
    Container,
    BarContainer,
    CurrentPosition
} from './styles';

const ProgressBar = (props) => {
    return (
        <Container>
            <BarContainer>
                <CurrentPosition progress={props.progress * 100} />
            </BarContainer>
        </Container>
    );
};

export default ProgressBar;