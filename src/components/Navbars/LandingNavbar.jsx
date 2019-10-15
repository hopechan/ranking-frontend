import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const links = [
    { href: '#home', text: 'Home' },
    { href: '#card', text: 'Login' },
];

const createNavItem = ({ href, text, className }) => (
    <NavItem>
        <NavLink href={href} className={className}>{text}</NavLink>
    </NavItem>
);

export default class LandingNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
        <div>
            <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">Ranking Oportunidades</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                {links.map(createNavItem)}
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}
