import React from "react";
import { Collapse, ListGroup, ListGroupItem } from "reactstrap";
import ListaMateria from "./ListaMateria";

export default class ListaNota extends React.Component{
    constructor(props){
        super(props);
        this.state = {collapse: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem onClick={this.toggle}>{this.props.tipo}</ListGroupItem>
                    <Collapse isOpen={this.state.collapse}>
                        <ListaMateria tipo={this.props.tipo}/>
                    </Collapse>
                </ListGroup>
            </div>
        )
    }
}