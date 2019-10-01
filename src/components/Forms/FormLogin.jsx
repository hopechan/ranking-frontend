import React from "react";
import { Button, Input, Label, Form, FormGroup } from "reactstrap";// reactstrap components
import API from "../server/api";

export default class FormLogin extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.accion = this.accion.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear() {
        this.props.clear();
    }

    onChangeUsuario(e) {
        this.props.onChangeUsuario(e.target.value);
    }
    onChangePassword(e) {
        this.props.onChangePassword(e.target.value);
    }

    accion(e) {
        
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.accion}>
                    <FormGroup>
                        <Label for="Usuario">Usuario:</Label>
                        <Input type="text" name="Usuario" id="Usuario" value={this.props.Usuario} onChange={this.onChangeUsuario} onBlur={this.validar} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password:</Label>
                        <Input type="text" name="Password" id="Password" value={this.props.Password} onChange={this.onChangePassword} onBlur={this.validar} required/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" color="primary">Login</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}