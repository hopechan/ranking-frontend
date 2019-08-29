import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";// reactstrap components
import API from "../server/api";

export default class FormEvaluaciones extends React.Component { 
    //Metodo constructor
    constructor(props) {
        super(props);
        this.accion = this.accion.bind(this);
        this.clear = this.clear.bind(this);
        this.toggle = this.toggle.bind(this);
        this.notify = this.notify.bind(this);
    }

    clear(e) {
        this.props.clear();
    }

    //alertas
    notify(place, color, message, icon) {
        this.props.notify(place, color, message, icon);
    }

    accion(e){
        e.preventDefault();
    }

    toggle() {
        this.props.toggle();
    }

    render(){
        return (
            <Form onSubmit={this.accion}>
                <Row>
                    <Col md="4">Nombre Nombre1 Apellido1 Apellido2</Col>
                    <Col md="1"><Input type="number" step="0.1" min="0" max="10"></Input></Col>
                    <Col md="1"><Input type="number" step="0.1" min="0" max="10"></Input></Col>
                    <Col md="1"><Input type="number" step="0.1" min="0" max="10"></Input></Col>
                    <Col md="1"><Input type="number" step="0.1" min="0" max="10"></Input></Col>
                    <Col md="4">
                        <h3>Hola :v</h3>
                    </Col>
                </Row>
            </Form>
        );
    }


}