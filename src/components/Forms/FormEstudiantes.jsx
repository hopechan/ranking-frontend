import React from "react";
import { Button, Input, Label, Form, FormGroup, Row, Col } from "reactstrap";// reactstrap components
import API from "../server/api";

export default class FormEvaluaciones extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.accion = this.accion.bind(this);
        this.clear = this.clear.bind(this);
        this.toggle = this.toggle.bind(this);
        this.notify = this.notify.bind(this);
        this.onnombreChange = this.onnombreChange.bind(this);
        this.onapellidosChange = this.onapellidosChange.bind(this);
        this.onfecha_nacimientoChange = this.onfecha_nacimientoChange.bind(this);
        this.ontelefonoChange = this.ontelefonoChange.bind(this);
        this.onemailChange = this.onemailChange.bind(this);
        this.ondireccionChange = this.ondireccionChange.bind(this);
        this.onanioChange = this.onanioChange.bind(this);
        this.onseccionChange = this.onseccionChange.bind(this);
        this.oncentro_escolarChange = this.oncentro_escolarChange.bind(this);
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

    onnombreChange(e) {
        this.props.onnombreChange(e.target.value);
    }

    onapellidosChange(e) {
        this.props.onapellidosChange(e.target.value);
    }

    onfecha_nacimientoChange(e) {
        this.props.onfecha_nacimientoChange(e.target.value);
    }

    ontelefonoChange(e) {
        this.props.ontelefonoChange(e.target.value);
    }

    onemailChange(e) {
        this.props.onemailChange(e.target.value);
    }

    ondireccionChange(e) {
        this.props.ondireccionChange(e.target.value);
    }

    onanioChange(e) {
        this.props.onanioChange(e.target.value);
    }

    onseccionChange(e) {
        this.props.onseccionChange(e.target.value);
    }

    oncentro_escolarChange(e) {
        this.props.oncentro_escolarChange(e.target.value);
    }


    accion(e) {
        e.preventDefault();
        if (this.props.editar) {
            const user = {
                idestudiante: this.props.idestudiante,
                nombre: this.props.nombre,
                apellidos: this.props.apellidos,
                fecha_nacimiento: this.props.fecha_nacimiento,
                telefono: this.props.telefono,
                email: this.props.email,
                direccion: this.props.direccion,
                anio: this.props.anio,
                seccion: this.props.seccion,
                centro_escolar: this.props.centro_escolar,
            };
            API.put('estudiante/', user)
                .then(response => this.props.refresh(response.data), this.notify("tr", "warning", "Estudiante editado con exito", "nc-icon nc-refresh-69"))
                .catch(error => console.log(error))
            this.toggle();
            this.clear();
        } else {
            const user = {
                nombre: this.props.nombre,
                apellidos: this.props.apellidos,
                fecha_nacimiento: this.props.fecha_nacimiento,
                telefono: this.props.telefono,
                email: this.props.email,
                direccion: this.props.direccion,
                anio: this.props.anio,
                seccion: this.props.seccion,
                centro_escolar: this.props.centro_escolar
            };
            API.post('estudiante/', user)
                .then(response => this.props.refresh(response.data), this.notify("tr", "success", "Estudiante agregado con exito", "nc-icon nc-simple-add"))
                .catch(error => console.log(error))
            this.toggle();
            this.clear();
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.accion}>
                    <Row form>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="nombre">Nombre:</Label>
                                <Input type="text" name="nombre" id="nombre" placeholder="" value={this.props.nombre} onChange={this.onnombreChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="apellidos">Apellido:</Label>
                                <Input type="text" name="apellidos" id="apellidos" placeholder="" value={this.props.apellidos} onChange={this.onapellidosChange}/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="fecha_nacimiento">Fecha de nacimiento:</Label>
                                <Input type="date" name="fecha_nacimiento" id="fecha_nacimiento" placeholder="" value={this.props.fecha_nacimiento} onChange={this.onfecha_nacimientoChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="telefono">Telefono:</Label>
                                <Input type="number" name="telefono" id="telefono" placeholder="" value={this.props.telefono} onChange={this.ontelefonoChange}/>
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="email">Email:</Label>
                                <Input type="email" name="email" id="email" placeholder="" value={this.props.email} onChange={this.onemailChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="direccion">Dirección:</Label>
                                <Input type="text" name="direccion" id="direccion" placeholder="" value={this.props.direccion} onChange={this.ondireccionChange}/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="anio">Año:</Label>
                                <Input type="number" name="anio" id="anio" placeholder="" value={this.props.anio} onChange={this.onanioChange}/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="seccion">Sección:</Label>
                                <Input type="text" name="seccion" id="seccion" placeholder="" value={this.props.seccion} onChange={this.onseccionChange}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="centro_escolar">Centro Escolar:</Label>
                                <Input type="text" name="centro_escolar" id="centro_escolar" placeholder="" value={this.props.seccion} onChange={this.onseccionChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" color="success" value={!this.props.editar ? "Agregar" : "Modificar"}>{!this.props.editar ? "Agregar" : "Modificar"}</Button>{' '}
                                <Button color="danger" onClick={this.toggle}>Cancelar</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}