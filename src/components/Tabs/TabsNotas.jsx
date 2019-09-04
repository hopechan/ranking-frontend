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
        return(
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>1° Year</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>2° Year</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>3° Year</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12" md="12"><FormNota/></Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">:v holi desde la pestaña 2</TabPane>
                    <TabPane tabId="3">:v holi desde la pestaña 3</TabPane>
                </TabContent>
            </div>
        );
    }
}