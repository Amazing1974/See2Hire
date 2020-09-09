import React, { useState } from 'react';

import { EyeIcon, RowContainer, TextInputView } from './styles';

const SearchBox = (props) => {

    return (
        <RowContainer>
            <TextInputView placeholder={props.placeholder} onChangeText={props.onChange}/>
            <EyeIcon name={'search'} size={25} color={'#21A1CE'} />
        </RowContainer>
    );
};

export default SearchBox;
