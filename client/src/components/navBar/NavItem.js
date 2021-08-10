import propTypes from 'prop-types';
import { withRouter } from 'react-router';
import * as styled from './styled';

const NavItem =  (props)=>{

    const navigate = ()=>{
        props.history.push(props.url);
    }
    return (
        <styled.NavItem onCLick={navigate}>
            <styled.NavItemLink>
                {props.children}
            </styled.NavItemLink>
        </styled.NavItem>
    )
}

NavItem.propTypes = {
    url: propTypes.string,
    children: propTypes.node
}

export default withRouter(NavItem);