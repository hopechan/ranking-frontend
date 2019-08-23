import React from "react";
import { Button, Input, Label, Form, FormGroup } from "reactstrap";// reactstrap components
import API from "../server/api";

export default class FormEvaluaciones extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.onChangemateria = this.onChangemateria.bind(this);
        this.onChangeidtipo = this.onChangeidtipo.bind(this);
        this.onChangeidmateria = this.onChangeidmateria.bind(this);
        this.accion = this.accion.bind(this);
        this.clear = this.clear.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    clear(e) {
        this.props.clear();
    }

    toggle() {
        this.props.toggle();
    }

    onChangemateria(e) {
        this.props.onmateriaChange(e.target.value);
    }

    onChangeidtipo(e) {
        this.props.onidtipoChange(e.target.value);
    }
    onChangeidmateria(e) {
        this.props.onidmateriaChange(e.target.value);
    }

    accion(e) {
        e.preventDefault();
        if (this.props.materia.length === 0 || this.props.idtipo.length === 0) {
            return;
        }
        if (this.props.editar) {
            const user = {
                idmateria: this.props.idmateria,
                materia: this.props.materia,
                idtipo: this.props.idtipo
            };
            API.put('materia/', user)
                .then(response => this.props.refresh(response.data))
                .catch(error => console.log(error))
            this.clear();
        } else {
            const user = {
                materia: this.props.materia,
                idtipo: this.props.idtipo
            };
            API.post('materia/', user)
                .then(response => this.props.refresh(response.data))
                .catch(error => console.log(error))
            this.clear();
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.accion}>
                    <FormGroup>
                        <Label for="materia">Materia:</Label>
                        <Input type="text" name="materia" id="materia" placeholder="Matematicas" value={this.props.materia} onChange={this.onChangemateria} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="idtipo">Tipo:</Label>
                        <Input type="select" name="idtipo" id="idtipo" onChange={this.onChangeidtipo}>
                            <option value="">Seleccione un tipo</option>
                             {this.props.tipos.map(
                                    (user,i) => (
                                        <option key={i} value={user.idtipo}>{user.tipo}</option>
                                    )
                                )
                            } 
                        </Input>
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