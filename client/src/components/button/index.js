import React from 'react';
import propTypes from 'prop-types';
import * as styled from './styled';
import theme from '../../theme';

const Button = ({
    children,
    onClick,
    size,
    color,
    disabled,
}) => {

    const _onClick = () =>{
        if(!disabled) {
            onClick && onClick();
        }
    }
    return (
        <styled.Button 
            height={size} 
            color={color} 
            onClick={_onClick} 
            disabled={disabled}>
                {children}
        </styled.Button>
    )
}

Button.propTypes = {
    onClick: propTypes.func,
    children: propTypes.string,
    size: propTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    color: propTypes.oneOf(Object.keys(theme.colors)),
    disabled: propTypes.bool,
}

export default Button;