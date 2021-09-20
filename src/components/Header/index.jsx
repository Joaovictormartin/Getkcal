import React from 'react';

import logoImg from '../../assets/svg/logo.svg';

import { Container } from './styles';

export function Header() {
  return(
    <Container>
      <img src={logoImg} alt="Logo" />
    </Container>
  );
}

