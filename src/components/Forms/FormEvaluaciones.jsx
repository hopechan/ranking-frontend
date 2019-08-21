import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from "reactstrap";// reactstrap components
import API from "../server/api";

export default class FormEvaluaciones extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
        this.onChangetipo = this.onChangetipo.bind(this);
        this.onChangedescripcion = this.onChangedescripcion.bind(this);
        this.accion = this.accion.bind(this);
        this.clear = this.clear.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    clear(e) {
        this.props.clear();
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
            API.put('Tipo/', user)
                .then(response => this.props.refresh(response.data))
                .catch(error => console.log(error))
        } else {
            const user = {
                tipo: this.props.tipo,
                descripcion: this.props.descripcion
            };
            API.post('Tipo/', user)
                .then(response => this.props.refresh(response.data))
                .catch(error => console.log(error))
                this.clear();
        }
    }

    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>{this.props.buttonLabel} Agregar un Tipo de Evaluación</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader align="center" toggle={this.toggle} className="text-center">{!this.props.editar ? "Agregar Nuevo Tipo" : "Editar Tipo"}</ModalHeader>
                    <ModalBody >
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
                                <ModalFooter className="center">
                                    <Button type="submit" color="success" onClick={this.toggle} value={!this.props.editar ? "Agregar" : "Modificar"}>Agregar</Button>{' '}
                                    <Button color="danger" onClick={this.toggle}>Cancelar</Button>
                                </ModalFooter>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}