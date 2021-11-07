import styled from 'styled-components';
//import MaterialIcon from '@material-ui/core/Icon';
import theme from '../../theme';
import MaterialIcon from '../MaterialIcon';

export const Nav = styled.div`
    z-index: 5000;
    direction: rtl;
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    height: 65px;
    background: ${theme.colors.crayola};
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid ${theme.colors.ruby};
    font-size: ${theme.fontSize.xlarge};
    font-weight: bold;
    color: ${theme.colors.white};
`;

 export const AccountIcon = styled(MaterialIcon)`
    ${theme.screen.mobile}{
        display: none;
    }
    font-size: 40px;
    cursor: pointer;
    &:hover{
        
    }
 `;

 const Side = styled.ul`
    padding: 0;
    display: flex;
    margin: 0;
    align-items: center;
    list-style-type: none;
    height: 100%;
    //overflow: hidden;
    flex: 1;
`;

export const Right = styled(Side)`
  
`;
export const Left = styled(Side)`
    justify-content: flex-end;
`;
export const Center = styled(Side)`
    justify-content: center;
    `;
export const NavItem = styled.li`
    padding: 0 15px 0 15px; 
    display: block
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    min-width: 50px;
    &:hover{
        background-color: ${theme.colors.vinRouge};
        color: ${theme.colors.porche};
    }
`;
export const NavItemLink = styled.a`
`;

export const Brand = styled.span`
    font-family: 'Lobster';
    font-size: ${theme.fontSize.xxlarge};
    letter-spacing: 1.3px;
`;

export const MobileBackBtn = styled(MaterialIcon)`
    font-size: 30px;
    color: ${theme.white};
    margin-left: 19px;
`;