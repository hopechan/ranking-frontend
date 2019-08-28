import React from "react";
import { Button, Input, Label, Form, FormGroup } from "reactstrap";// reactstrap components
import API from "../server/api";

export default class FormEvaluaciones extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.onChangetipo = this.onChangetipo.bind(this);
        this.onChangedescripcion = this.onChangedescripcion.bind(this);
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

    toggle() {
        this.props.toggle();
    }

    onChangetipo(e) {
        this.props.ontipoChange(e.target.value);
    }

    onChangedescripcion(e) {
        this.props.ondescripcionChange(e.target.value);
    }

    accion(e) {
        e.preventDefault();
        if (this.props.tipo.length === 0 || this.props.descripcion.length === 0) {
            return;
        }
        if (this.props.editar) {
            const user = {
                idtipo: this.props.idtipo,
                tipo: this.props.tipo,
                descripcion: this.props.descripcion
            };
            API.put('tipo/', user)
                .then(response => this.props.refresh(response.data),this.notify("tr","warning","Tipo de evaluación editado con exito","nc-icon nc-refresh-69"))
                .catch(error => console.log(error))
            this.clear();
        } else {
            const user = {
                tipo: this.props.tipo,
                descripcion: this.props.descripcion
            };
            API.post('tipo/', user)
                .then(response => this.props.refresh(response.data),this.notify("tr","success","Tipo de evaluación agregado con exito","nc-icon nc-simple-add"))
                .catch(error => console.log(error))
            this.clear();
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.accion}>
                    <FormGroup>
                        <Label for="tipo">Tipo:</Label>
                        <Input type="text" name="tipo" id="tipo" placeholder="Centro escolar" value={this.props.tipo} onChange={this.onChangetipo} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="descripción">Descripción:</Label>
                        <Input type="text" name="descripción" id="descripción" placeholder="Esta es un prueba de un centro escolar" value={this.props.descripcion} onChange={this.onChangedescripcion} />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" color="success" onClick={this.toggle} value={!this.props.editar ? "Agregar" : "Modificar"}>{!this.props.editar ? "Agregar" : "Modificar"}</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancelar</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}