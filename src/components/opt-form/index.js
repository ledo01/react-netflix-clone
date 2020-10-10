import React from 'react';
import { ChevronIcon } from '../icons';

import { Container, Input, Button, Text, Break } from './styles/opt-form';

export default function OptForm({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

OptForm.Input = function OptFormInput(props) {
  return <Input {...props} />;
};

OptForm.Button = function OptFormButton({ children, ...rest }) {
  return (
    <Button {...rest}>
      {children}
      <ChevronIcon />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

OptForm.Break = function OptFormBreak(props) {
  return <Break {...props} />;
};
