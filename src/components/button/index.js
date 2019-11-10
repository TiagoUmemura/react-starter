import React from 'react';
import PropTypes from 'prop-types';

import { Container,Text } from './styled-wrappers';

function Button({bgColor, width, height, text, borderRadius, onClickHandler}) {
    return (
      <Container
        bgColor={bgColor} 
        borderRadius={borderRadius}
        width={width} 
        height={height}  
        onClick={onClickHandler} 
      >
          <Text>{text}</Text>
      </Container>
    );
}

Button.propTypes = {
    borderRadius: PropTypes.string,
    bgColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func
  };

export default Button;