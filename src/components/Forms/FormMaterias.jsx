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
        this.notify = this.notify.bind(this);
    }
    
    notify(place, color, message, icon) {
        this.props.notify(place, color, message, icon);
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
        if (this.props.materia.length < 4 ) {
            this.notify("tr","danger","Materia no agregada","nc-icon nc-zoom-split")
            return;
        }
        if (this.props.editar) {
            const user = {
                idmateria: this.props.idmateria,
                idtipo: this.props.idtipo,
                materia: this.props.materia
                
            };
            API.put('materia/', user)
                .then(response => this.props.refresh(response.data),this.notify("tr","warning","Materia editada con exito","nc-icon nc-refresh-69"))
                .catch(error => console.log(error))
            this.toggle();
            this.clear();
        } else {
            const user = {
                materia: this.props.materia,
                idtipo: this.props.idtipo
            };
            API.post('materia/', user)
                .then(response => this.props.refresh(response.data),this.notify("tr","success","Materia agregada con exito","nc-icon nc-simple-add"))
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
                        <Label for="materia">Materia:</Label>
                        <Input type="text" name="materia" id="materia" placeholder="Matematicas" value={this.props.materia} onChange={this.onChangemateria} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="idtipo">Tipo:</Label>
                        <Input type="select" name="idtipo" id="idtipo" onChange={this.onChangeidtipo} >
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
                        <Button type="submit" color="success" value={!this.props.editar ? "Agregar" : "Modificar"}>{!this.props.editar ? "Agregar" : "Modificar"}</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancelar</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}