import React from "react";
import { Col, Collapse, ListGroupItem, Row } from "reactstrap";
import API from "../server/api";
export default class ListaNota extends React.Component{
    constructor(props){
        super(props);
        this.state = {collapse: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    UNSAFE_componentWillMount(){
        API.get(`/`)
    }

    render() {
        return (
            <div>
                <ListGroupItem onClick={this.toggle}>CCGK</ListGroupItem>
                <Collapse isOpen={this.state.collapse}>
                    <p>Funciona :v</p>
                </Collapse>
            </div>
        )
    }
}