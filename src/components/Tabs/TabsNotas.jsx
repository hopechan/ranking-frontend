import React from "react";
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import FormNota from "../Forms/FormNota";
import classnames from 'classnames';

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
        var currentTime = new Date()
        const year = currentTime.getFullYear();
        return(
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Class {year + 2}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Class {year + 1}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>Class {year}</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1"><Row><Col sm = "12" md="12"><FormNota anio = {year} tipo = "CCGK" materia = "Ingles"/></Col></Row></TabPane>
                    <TabPane tabId="2"><Row><Col sm = "12" md="12"><FormNota anio = {year - 1} tipo = "CCGK" materia = "Ingles"/></Col></Row></TabPane>
                    <TabPane tabId="3"><Row><Col sm = "12" md="12"><FormNota anio = {year - 2} tipo = "CCGK" materia = "Ingles"/></Col></Row></TabPane>
                </TabContent>
            </div>
        );
    }
}