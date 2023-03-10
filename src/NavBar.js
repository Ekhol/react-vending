import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

function NavBar() {
    return (
        <div>
            <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    Home
                </NavLink>

                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink to="/the-taco-bell-crunchwrap-supreme">
                            The Taco Bell Crunchwrap Supreme
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/sandwich">
                            A Sub Sandwich
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/soda">
                            A Sprite
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;