import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Button_ui extends Component {
  render() {
    const { variant, className, text, onClick } = this.props;

    return (
      <Button
        variant={variant || 'warning'}     
        className={`${className} rounded-5 px-4 py-2 text-white fw-bolder mt-2`}
        onClick={onClick}   
      >
        {text || 'Shop Now'} 
      </Button>
    );
  }
}

export default Button_ui;
