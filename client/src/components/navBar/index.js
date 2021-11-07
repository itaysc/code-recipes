import * as styled from './styled';
import {useNavBarContext} from './useNavBarContext';
// const largeIcon={
//     fontSize:'40px',
//     cursor: 'pointer'
//   }
const NavBar = (props)=>{
    const context = useNavBarContext();
    return (
        <styled.Nav>
            <styled.Right className='nav-item-group'>
                <styled.AccountIcon>account_circle</styled.AccountIcon>
            </styled.Right>
            <styled.Center>
                <styled.Brand>{context.title}</styled.Brand>
            </styled.Center>
            <styled.Left>
            {
                context.showBackButton &&                 
                <styled.MobileBackBtn onClick={context.backBtnAction}>
                    arrow_back
                </styled.MobileBackBtn>

            }
            </styled.Left>
        </styled.Nav> 
    )
}

export default NavBar;