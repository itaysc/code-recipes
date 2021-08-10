import Icon from '@material-ui/core/Icon';
import * as styled from './styled';
import NavItem from './NavItem';
// const largeIcon={
//     fontSize:'40px',
//     cursor: 'pointer'
//   }
const NavBar = (props)=>{
    return (
        <styled.Nav>
            <styled.Right>
                <styled.Icon>account_circle</styled.Icon>
            </styled.Right>
            <styled.Left>

            </styled.Left>
        </styled.Nav> 
    )
}

export default NavBar;