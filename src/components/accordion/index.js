import React, { createContext, useContext, useState } from 'react';

import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
  Frame,
} from './styles/accordion';
import { AddIcon, CloseIcon } from '../icons';

const ToogleContext = createContext();

export default function Accordion({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, id, ...rest }) {
  const [toggleShow, setToogleShow] = useState(false);
  return (
    <ToogleContext.Provider value={{ toggleShow, setToogleShow }}>
      <Item {...rest}>{children}</Item>
    </ToogleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...rest }) {
  const { toggleShow, setToogleShow } = useContext(ToogleContext);
  return (
    <Header
      onClick={() => setToogleShow((toggleShow) => !toggleShow)}
      {...rest}
    >
      {children}
      {toggleShow ? <CloseIcon /> : <AddIcon />}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...rest }) {
  const { toggleShow } = useContext(ToogleContext);

  return (
    <Body open={toggleShow} {...rest}>
      <Frame>{children}</Frame>
    </Body>
  );
};
