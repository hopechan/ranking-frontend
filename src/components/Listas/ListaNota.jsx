import React from "react";
import { Collapse, ListGroup, ListGroupItem } from "reactstrap";
import ListaMateria from "./ListaMateria";

export default class ListaNota extends React.Component{
    constructor(props){
        super(props);
        this.state = {collapse: false, materia: ''};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    getMateria(valor){
        return () => {
            this.setState({materia: valor})
            console.log(this.state.materia);
        }
    }

    updateMateria = materia => { this.setState({materia}) }

    handleChange = event => {
        const { onClick } = this.props;
        const value = event.target.innerText;
        onClick(value);
    };

    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem onClick={this.toggle}>{this.props.tipo}</ListGroupItem>
                    <Collapse isOpen={this.state.collapse}>
                        <ListaMateria tipo={this.props.tipo} materia = {this.state.materia} onClick = {this.updateMateria}/>
                    </Collapse>
                </ListGroup>
            </div>
        )
    }
}