import styled from 'styled-components';
import theme from '../../theme';

export const Button = styled.a`${p => {
    let styles = `
        background: ${theme.colors[p.color]} radial-gradient(circle, transparent 1%, ${theme.colors[p.color]} 1%) center/15000%;
        &:hover{
            background-color: ${theme.rgba(p.color, 0.7)};
        }
        &:active{
            background-color: ${theme.colors[p.color]};
            background-size: 100%;
            transition: background 0s;
        }
    `;
    if(p.disabled) {
        styles = '';
    }
    let mobileMainBtnStyles = `
        position: absolute;
        bottom: 0;
        height: 40px;
        width: 100vw;
    `;
    if(!p.isMobileMainBtn) {
        mobileMainBtnStyles = '';
    }
    return `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.rgba(p.color, 0.5)};
    height: ${theme.buttonSize(p.size)};
    font-size: ${theme.buttonFontSize(p.size)};
    border-radius: 5px;
    font-weight: bold;
    padding: 10px;
    background-position: center;
    transition: background 0.7s;
    color: ${theme.getTextColor(p.color)};
    cursor: ${p.disabled? 'not-allowed': 'pointer'};
    text-align: center;
    box-shadow: 0 0 4px #999;
    outline: none;
    ${styles}
    ${theme.screen.mobile} {
        ${mobileMainBtnStyles}
    }
`}}
`;