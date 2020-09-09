import React from 'react';

import {
    Container,
    LeftButton,
    RightButton,
    TextView
} from './styles';

const ToggleButton = (props) => {
    return (
        <Container style={{...props.style}}>
            <LeftButton on={props.on} onPress={()=>props.setOn(true)}>
                <TextView on={props.on}>{props.leftText}</TextView>
            </LeftButton>
            <RightButton on={props.on} onPress={()=>props.setOn(false)}>
                <TextView on={!props.on}>{props.rightText}</TextView>
            </RightButton>
        </Container>
    )
}

export default ToggleButton;