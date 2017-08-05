/**
 * Created by Oktay on 8/5/2017.
 */
import React, {PropTypes} from 'react'
import {Route, NavLink} from 'react-router-dom'


export default function NavItem({children, to, exact}) {
    return (
        <Route path={to} exact={exact} children={({match}) => (
            <li className={match ? 'nav-item active' : 'nav-item'}>
                <NavLink exact={exact} className="nav-link" to={to}>{children}</NavLink>
            </li>
        )}/>
    )
}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    children: PropTypes.node.isRequired,
};
