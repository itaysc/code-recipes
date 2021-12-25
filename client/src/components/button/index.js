import React from 'react';
import propTypes from 'prop-types';
import Loader from "react-loader-spinner";
import * as styled from './styled';
import theme from '../../theme';

const Button = ({
    children,
    onClick,
    size,
    color,
    disabled,
    loading,
    isMobileMainBtn,
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
            isMobileMainBtn={isMobileMainBtn}
            onClick={_onClick} 
            disabled={disabled}>
                {
                    loading && 
                    <Loader
                        type="ThreeDots"
                        color={theme.colors.white}
                        height={60}
                        width={60}
                    />
                }
                {
                    !loading && children
                }
        </styled.Button>
    )
}

Button.propTypes = {
    onClick: propTypes.func,
    children: propTypes.string,
    size: propTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    color: propTypes.oneOf(Object.keys(theme.colors)),
    disabled: propTypes.bool,
    loading: propTypes.bool,
    isMobileMainBtn: propTypes.bool,
}

export default Button;