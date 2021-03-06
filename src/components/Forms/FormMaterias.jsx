import React from "react";
import { Button, Input, Label, Form, FormGroup } from "reactstrap";// reactstrap components
import API from "../server/api";
import Select from 'react-select';

export default class FormEvaluaciones extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            algo: [],
            materia:{ "clase": "", "div": "" },
            tipo:{ "clase": "", "div": "" }
        };
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
        var materia=e.target.value.trim()
        if (materia.length < 4) {
            this.setState({
                materia: { "clase": "is-invalid", "div": "* La materia debe contener 4 o más caracteres" }
            })
        }else{
            this.setState({
                materia: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.onmateriaChange(e.target.value);
    }

    onChangeidtipo(id) {
        this.props.onidtipoChange(id);
    }
    onChangeidmateria(e) {
        this.props.onidmateriaChange(e.target.value);
    }

    accion(e) {
        e.preventDefault();
        var materia=this.props.materia.trim()
        if(materia.length===0){
            this.setState({
                materia: { "clase": "is-invalid", "div": "* El campo de materia no puede ir vacio" }
            })
        }
        if (materia.length < 4) {
            this.notify("tr", "danger", "Materia no agregada", "nc-icon nc-zoom-split")
            return;
        }


        if (this.props.editar) {
            e.preventDefault();
            if (this.state.selectedOption === null) {
                var user = {
                    idmateria: this.props.idmateria,
                    idtipo: this.props.defaultValue.value,
                    materia: this.props.materia
                };
            } else {
                 user = {
                    idmateria: this.props.idmateria,
                    idtipo: this.state.algo.value,
                    materia: this.props.materia
                };
            }
            API.put('materia/', user)
                .then(response => this.props.refresh(response.data), this.notify("tr", "warning", "Materia editada con exito", "nc-icon nc-refresh-69"))
                .catch(error => console.log(error))
            this.toggle();
            this.clear();
        } else {
            
            if (this.state.selectedOption ===null) {
                this.notify("tr", "danger", "Materia no agregada", "nc-icon nc-zoom-split")
                this.setState({
                    tipo: { "clase": "is-invalid", "div": "* El campo no puede ir vacio" }
                })
                return;
            }else{
                this.setState({
                    tipo: { "clase": "is-valid", "div": "" }
                })
            }
            const user = {
                materia: this.props.materia,
                idtipo: this.state.selectedOption.value
            };
            API.post('materia/', user)
                .then(response => this.props.refresh(response.data), this.notify("tr", "success", "Materia agregada con exito", "nc-icon nc-simple-add"))
                .catch(error => console.log(error))
            this.toggle();
            this.clear();

        }
    }
    handleChange = selectedOption => {
        this.setState({
            selectedOption: selectedOption,
            algo: selectedOption
        });
    };

    render() {
        let i = 0;
        let array = [];
        this.props.tipos.forEach(a => {
            array[i] = { "value": a.idtipo, "label": a.tipo };
            i++;
        });
        return (
            <div>
                <Form onSubmit={this.accion}>
                    <FormGroup>
                        <Label for="materia">Materia:</Label>
                        <Input type="text" name="materia" id="materia" placeholder="Matematicas" value={this.props.materia} onChange={this.onChangemateria} className={this.state.materia.clase} />{<div className='invalid-feedback'>{this.state.materia.div}</div>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="idtipo">Tipo:</Label>
                        <Select placeholder="Seleccione un tipo" defaultValue={this.props.defaultValue} onChange={this.handleChange} options={array} />
                        {<div className='invalid-feedback'>{this.state.tipo.div}</div>}
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