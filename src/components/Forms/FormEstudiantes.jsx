import React from "react";
import { Button, Input, Label, Form, FormGroup, Row, Col } from "reactstrap";// reactstrap components
import API from "../server/api";

export default class FormEvaluaciones extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.state = {
            nombre: { "clase": "", "div": "" },
            apellido: { "clase": "", "div": "" },
            fecha: { "clase": "", "div": "" },
            telefono: { "clase": "", "div": "" },
            email: { "clase": "", "div": "" },
            direccion: { "clase": "", "div": "" },
            anio: { "clase": "", "div": "" },
            seccion: { "clase": "", "div": "" },
            centroe: { "clase": "", "div": "" },
        }
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
        this.validartipo = this.validartipo.bind(this);
    }

    clear(e) {
        this.props.clear();
    }

    validartipo(e) {
        this.props.validartipo();
    }

    //alertas
    notify(place, color, message, icon) {
        this.props.notify(place, color, message, icon);
    }

    toggle() {
        this.props.toggle();
    }

    onnombreChange(e) {
        var nombre = e.target.value.trim()

        if (nombre.length < 4) {
            this.setState({
                nombre: { "clase": "is-invalid", "div": "* El nombre debe contener 4 o más caracteres" }
            })
        } else {
            this.setState({
                nombre: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.onnombreChange(e.target.value);
    }

    onapellidosChange(e) {
        var apellido = e.target.value.trim()

        if (apellido.length < 4) {
            this.setState({
                apellido: { "clase": "is-invalid", "div": "* El apellido debe contener 4 o más caracteres" }
            })
        } else {
            this.setState({
                apellido: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.onapellidosChange(e.target.value);
    }

    onfecha_nacimientoChange(e) {
        //fecha que recibimos
        var fecha = e.target.value
        var array_fecha_r = fecha.split("-")
        var ano_r = (array_fecha_r[0])
        //fecha actual
        var hoy = new Date();
        var yyyy = hoy.getFullYear();
        var maximo= yyyy-10;
        var minimo=yyyy-19

        if (ano_r > maximo || ano_r <minimo) {
            this.setState({
                fecha: { "clase": "is-invalid", "div": "* El año de la fecha no puede ser mayor a 2009 ni menor a 2000"}
            })
        }else{
            this.setState({
                fecha: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.onfecha_nacimientoChange(e.target.value);
    }

    ontelefonoChange(e) {
        var telefono = e.target.value.trim()

        if (telefono.length < 8) {
            this.setState({
                telefono: { "clase": "is-invalid", "div": "* El telefono debe contener 7 o más caracteres (sin guion)" }
            })
        } else {
            this.setState({
                telefono: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.ontelefonoChange(e.target.value);
    }

    onemailChange(e) {
        //algo
        this.props.onemailChange(e.target.value);
    }

    ondireccionChange(e) {
        var direccion = e.target.value.trim()

        if (direccion.length < 10) {
            this.setState({
                direccion: { "clase": "is-invalid", "div": "* El direccion debe contener 10 o más caracteres" }
            })
        } else {
            this.setState({
                direccion: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.ondireccionChange(e.target.value);
    }

    onanioChange(e) {
        var anio = e.target.value.trim()

        if (anio.length < 4) {
            this.setState({
                anio: { "clase": "is-invalid", "div": "* El año debe contener 4 o más caracteres" }
            })
        } else {
            this.setState({
                anio: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.onanioChange(e.target.value);
    }

    onseccionChange(e) {
        var seccion = e.target.value.trim()

        if (seccion.length < 2) {
            this.setState({
                seccion: { "clase": "is-invalid", "div": "* La seccion debe contener 2 o más caracteres" }
            })
        } else {
            this.setState({
                seccion: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.onseccionChange(e.target.value);
    }

    oncentro_escolarChange(e) {
        var centroe = e.target.value.trim()

        if (centroe.length < 4) {
            this.setState({
                centroe: { "clase": "is-invalid", "div": "* El centro escolar debe contener 4 o más caracteres" }
            })
        } else {
            this.setState({
                centroe: { "clase": "is-valid", "div": "" }
            })
        }
        this.props.oncentro_escolarChange(e.target.value);
    }


    accion(e) {
        e.preventDefault();
        var nombre = this.props.nombre.trim()
        var apellidos = this.props.apellidos.trim()
        var fecha = this.props.fecha_nacimiento.trim()
        var telefono = this.props.telefono.trim()
        var email = this.props.email.trim()
        var direccion = this.props.direccion.trim()
        var anio = this.props.anio.trim()
        var seccion = this.props.seccion.trim()
        var centro_escolar = this.props.centro_escolar.trim()


        if (nombre.length === 0) {
            this.setState({
                nombre: { "clase": "is-invalid", "div": "* El nombre no puede ir vacio" }
            })
        }
        if (apellidos.length === 0) {
            this.setState({
                apellido: { "clase": "is-invalid", "div": "* El apellido no puede ir vacio" }
            })
        }
        if (fecha.length === 0) {
            this.setState({
                fecha: { "clase": "is-invalid", "div": "* El fecha no puede ir vacia" }
            })
        }
        if (telefono.length === 0) {
            this.setState({
                telefono: { "clase": "is-invalid", "div": "* El telefono no puede ir vacio" }
            })
        }
        if (email.length === 0) {
            this.setState({
                email: { "clase": "is-invalid", "div": "* El email no puede ir vacio" }
            })
        }
        if (direccion.length === 0) {
            this.setState({
                direccion: { "clase": "is-invalid", "div": "* La direccion no puede ir vacia" }
            })
        }
        if (anio.length === 0) {
            this.setState({
                anio: { "clase": "is-invalid", "div": "* El año no puede ir vacio" }
            })
        }
        if (seccion.length === 0) {
            this.setState({
                seccion: { "clase": "is-invalid", "div": "* La seccion no puede ir vacia" }
            })
        }
        if (centro_escolar.length === 0) {
            this.setState({
                centroe: { "clase": "is-invalid", "div": "* El centro escolar no puede ir vacio" }
            })
            return;
        }
        if (nombre.length < 4) {
            this.notify("tr", "danger", "Tipo de evaluación no agregada", "nc-icon nc-zoom-split")
            return;
        }
        if (apellidos.length < 4) {
            this.notify("tr", "danger", "Tipo de evaluación no agregada", "nc-icon nc-zoom-split")
            return;
        }
        // Fecha

        if (telefono.length < 8) {
            this.notify("tr", "danger", "Tipo de evaluación no agregada", "nc-icon nc-zoom-split")
            return;
        }
        if (direccion.length < 10) {
            this.notify("tr", "danger", "Tipo de evaluación no agregada", "nc-icon nc-zoom-split")
            return;
        }
        //email
        if (anio.length < 4) {
            this.notify("tr", "danger", "Tipo de evaluación no agregada", "nc-icon nc-zoom-split")
            return;
        }
        if (seccion.length < 2) {
            this.notify("tr", "danger", "Tipo de evaluación no agregada", "nc-icon nc-zoom-split")
            return;
        }
        if (centro_escolar.length < 4) {
            this.notify("tr", "danger", "Tipo de evaluación no agregada", "nc-icon nc-zoom-split")
            return;
        }



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

        var hoy = new Date();
        var yyyy = hoy.getFullYear();
        var maximo= yyyy-10+"-12-31"
        var minimo= yyyy-19+"-01-01"
        
        
        return (
            <div>
                <Form onSubmit={this.accion}>
                    <Row form>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="nombre">Nombre:</Label>
                                <Input type="text" className={this.state.nombre.clase} placeholder="Juan" value={this.props.nombre} onChange={this.onnombreChange} />
                                {<div className='invalid-feedback'>{this.state.nombre.div}</div>}
                            </FormGroup>
                            <FormGroup>
                                <Label for="apellidos">Apellido:</Label>
                                <Input type="text" className={this.state.apellido.clase} placeholder="Perez" value={this.props.apellidos} onChange={this.onapellidosChange} />
                                {<div className='invalid-feedback'>{this.state.apellido.div}</div>}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>

                                <Label for="fecha_nacimiento">Fecha de nacimiento:</Label>
                                <Input type="date" min={minimo} max={maximo} className={this.state.fecha.clase} value={this.props.fecha_nacimiento} onChange={this.onfecha_nacimientoChange} />
                                {<div className='invalid-feedback'>{this.state.fecha.div}</div>}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="telefono">Telefono:</Label>
                                <Input type="number" className={this.state.telefono.clase} placeholder="12345678" value={this.props.telefono} onChange={this.ontelefonoChange} />
                                {<div className='invalid-feedback'>{this.state.telefono.div}</div>}
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="email">Email:</Label>
                                <Input type="email" className={this.state.email.clase} placeholder="" value={this.props.email} onChange={this.onemailChange} />
                                {<div className='invalid-feedback'>{this.state.email.div}</div>}
                            </FormGroup>
                            <FormGroup>
                                <Label for="direccion">Dirección:</Label>
                                <Input type="text" className={this.state.direccion.clase} placeholder="" value={this.props.direccion} onChange={this.ondireccionChange} />
                                {<div className='invalid-feedback'>{this.state.direccion.div}</div>}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="anio">Año:</Label>
                                <Input type="number" className={this.state.anio.clase} placeholder="" value={this.props.anio} onChange={this.onanioChange} />
                                {<div className='invalid-feedback'>{this.state.anio.div}</div>}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="seccion">Sección:</Label>
                                <Input type="text" className={this.state.seccion.clase} placeholder="" value={this.props.seccion} onChange={this.onseccionChange} />
                                {<div className='invalid-feedback'>{this.state.seccion.div}</div>}
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="centro_escolar">Centro Escolar:</Label>
                                <Input type="text" className={this.state.centroe.clase} placeholder="" value={this.props.centro_escolar} onChange={this.oncentro_escolarChange} />
                                {<div className='invalid-feedback'>{this.state.centroe.div}</div>}
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