import React from 'react';

import { Button, TextView } from './styles';

const ButtonView = (props) => {
  return (
    <Button {...props}>
      <TextView {...props}>{props.text}</TextView>
    </Button>
  );
};

export default ButtonView;
