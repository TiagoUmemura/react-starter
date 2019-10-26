import React from 'react';
import PropTypes from 'prop-types';

import { Container,Text } from './styled-wrappers';

function Button({width, height, text, onClickHandler}) {
    return (
      <Container width={width} height={height} onClick={onClickHandler}>
          <Text>{text}</Text>
      </Container>
    );
}

Button.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func
  };

export default Button;