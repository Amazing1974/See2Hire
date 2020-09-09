import React, { useState } from 'react';

import { EyeIcon, RowContainer, TextInputView } from './styles';

const PasswordTextBox = (props) => {
    const [icon, setIcon] = useState('eye-off');
    const [password, setPassword] = useState(true);

    const _changeIcon = (type) => {
        setIcon(!type ? 'eye-off' : 'eye');
        setPassword(!type);
    };

    return (
        <RowContainer>
            <TextInputView secureTextEntry={password} />
            <EyeIcon name={icon} size={25} onPress={() => _changeIcon(password)} />
        </RowContainer>
    );
};

export default PasswordTextBox;
