import React from 'react';

import { isString } from 'lodash';
import { Platform } from 'react-native';
import { TextInputWrapperAndroid, TextInputWrapper } from './styles';

const TextInput = ({
  children,
  textTransform,
  ...restProps
}) => {
  const TextStyling = Platform.OS === 'ios' ? TextInputWrapper : TextInputWrapperAndroid;
  let textToDisplay = children;
  if (isString(children) && !!textTransform) {
    if (textTransform === 'uppercase') { textToDisplay = children.toUpperCase(); }
    if (textTransform === 'lowercase') { textToDisplay = children.toLowerCase(); }
  }

  return <TextStyling {...restProps}>{textToDisplay}</TextStyling>;
};


export default TextInput;
