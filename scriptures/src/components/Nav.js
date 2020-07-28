import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div>
                <NavLink to = '/about'>About</NavLink>
                <NavLink to = '/Home'>Home</NavLink>
            </div>
        </div>
    )
}
export default Nav;