
import React from 'react';
import { isString } from 'lodash';
import { Platform } from 'react-native';
import { TextWrapperAndroid, TextWrapper } from './styles';

const Text = ({
  children,
  textTransform,
  ...restProps
}) => {
  const TextStyling = Platform.OS === 'ios' ? TextWrapper : TextWrapperAndroid;
  let textToDisplay = children;
  if (isString(children) && !!textTransform) {
    if (textTransform === 'uppercase') { textToDisplay = children.toUpperCase(); }
    if (textTransform === 'lowercase') { textToDisplay = children.toLowerCase(); }
  }

  return <TextStyling {...restProps}>{textToDisplay}</TextStyling>;
};


export default Text;
