import styled from 'styled-components';
//import MaterialIcon from '@material-ui/core/Icon';
import theme from '../../theme';
const MaterialIcon = (props) => (
    <a className={`material-icons ${props.className}`}>{props.children}</a>
);
export const Nav = styled.div`
    direction: rtl;
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    height: 65px;
    background: ${theme.codGray};
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid ${theme.doveGray};
    font-size: ${theme.fontSize.xlarge};
    font-weight: bold;
    color: ${theme.white};
`;

 export const Icon = styled(MaterialIcon)`
    font-size: 40px;
    cursor: pointer;
    &:hover{
        color: ${theme.porche};
    }
 `;

 const Side = styled.ul`
    display: flex;
    align-items: center;
  
    list-style-type: none;
    height: 100%;
    overflow: hidden;
    flex: 1;
`;
export const Right = styled(Side)`
 
`;
export const Left = styled(Side)`

`;

export const NavItem = styled.li`
    padding: 0 15px 0 15px; 
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    min-width: 50px;
    &:hover{
        background-color: ${theme.vinRouge};
        color: ${theme.porche};
    }
`;
export const NavItemLink = styled.a`
`;