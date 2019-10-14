import React from "react";
import { Button, Input, Label, Form, FormGroup } from "reactstrap";// reactstrap components
import API from "../server/api";

export default class FormEvaluaciones extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.state = {
            tipo: { "clase": "", "div": "" },
            descripcion: { "clase": "", "div": "" },
        }
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
        var tipo = e.target.value.trim()

        if (tipo.length < 4) {
            this.setState({
                tipo: { "clase": "is-invalid", "div": "* El tipo debe contener 4 o más caracteres" }
            })
        } else {
            this.setState({
                tipo: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.ontipoChange(e.target.value);
    }

    onChangedescripcion(e) {
        var descripcion = e.target.value.trim()

        if (descripcion.length > 80 || descripcion.length < 3) {
            this.setState({
                descripcion: { "clase": "is-invalid", "div": "* La descripcion debe contener 3 o más caracteres y menos de 80 caracteres" }
            })
        } else {
            this.setState({
                descripcion: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.ondescripcionChange(e.target.value);
    }

    accion(e) {
        e.preventDefault();
        var tipo=this.props.tipo.trim()
        var descripcion=this.props.descripcion.trim()
        if(tipo.length===0){
            this.setState({
                tipo: { "clase": "is-invalid", "div": "* El tipo no puede ir vacio" }
            })
        }
        if(descripcion.length===0){
            this.setState({
                descripcion: { "clase": "is-invalid", "div": "* La descripcion no puede ir vacio" }
            })
        }
        if (tipo.length < 4) {
            this.notify("tr", "danger", "Tipo de evaluación no agregada", "nc-icon nc-zoom-split")
            return;
        }
        if (descripcion.length > 80 || descripcion.length < 3) {
            return;
        }
         
        if (this.props.editar) {
            const user = {
                idtipo: this.props.idtipo,
                tipo: this.props.tipo,
                descripcion: this.props.descripcion
            };
            API.put('tipo/', user)
                .then(response => this.props.refresh(response.data), this.notify("tr", "warning", "Tipo de evaluación editado con exito", "nc-icon nc-refresh-69"))
                .catch(error => console.log(error))
            this.toggle();
            this.clear();
        } else {
            const user = {
                tipo: this.props.tipo,
                descripcion: this.props.descripcion
            };
            API.post('tipo/', user)
                .then(response => this.props.refresh(response.data), this.notify("tr", "success", "Tipo de evaluación agregado con exito", "nc-icon nc-simple-add"))
                .catch(error => console.log(error))
            this.toggle();
            this.clear();
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.accion}>
                    <FormGroup>
                        <Label for="tipo">Tipo:</Label>
                        <Input type="text" name="tipo" id="tipo" placeholder="Centro escolar" className={this.state.tipo.clase} value={this.props.tipo} onChange={this.onChangetipo} /> {<div className='invalid-feedback'>{this.state.tipo.div}</div>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="descripción">Descripción:</Label>
                        <Input type="text" name="descripción" id="descripción" placeholder="Esta es un prueba de un centro escolar" className={this.state.descripcion.clase} value={this.props.descripcion} onChange={this.onChangedescripcion} />
                        {<div className='invalid-feedback'>{this.state.descripcion.div}</div>}
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" color="success" value={!this.props.editar ? "Agregar" : "Modificar"}>{!this.props.editar ? "Agregar" : "Modificar"}</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancelar</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}