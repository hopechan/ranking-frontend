import React from "react";
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";

export default class TabsNotas extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { activeTab: '1' };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render(){
        return(
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => { this.toggle('1'); }}>1° Year</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => { this.toggle('2'); }}>2° Year</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => { this.toggle('3'); }}>3° Year</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}