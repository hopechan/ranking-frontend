import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import API from "../server/api";

export default class FilaEstudiantes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
        this.delete = this.delete.bind(this);
        this.getById = this.getById.bind(this);
        this.notify = this.notify.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    //Metodo para eliminar los datos de la api
    delete() {
            API.delete(`estudiante/` + this.props.user.idestudiante)
                .then(response => this.props.refresh(response.data), this.notify("tr", "danger", "Estudiante eliminado", "nc-icon nc-simple-remove"))
                .catch(error => console.log(error));
                this.toggle()
    }

    //alertas
    notify(place, color, message, icon) {
        this.props.notify(place, color, message, icon);
    }

    //Metodo para ver los datos por un id
    getById() {
        API.get('estudiante/' + this.props.user.idestudiante)
            .then(response => {
                this.props.cargar({
                    idestudiante: response.data.idestudiante,
                    nombre: response.data.nombre,
                    apellidos: response.data.apellidos,
                    fecha_nacimiento: response.data.fecha_nacimiento,
                    telefono: response.data.telefono,
                    email: response.data.email,
                    direccion: response.data.direccion,
                    anio: response.data.anio,
                    seccion: response.data.seccion,
                    centro_escolar: response.data.centro_escolar,
                });
            }).catch(error => console.log(error))
    }
      //metodo para abrir el modal
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

    render() {
        return (
            <tr id="algo">
                <td className="text-center">{this.props.user.nombre}</td>
                <td className="text-center">{this.props.user.apellidos}</td>
                <td className="text-center">{this.props.user.fecha_nacimiento}</td>
                <td className="text-center">{this.props.user.telefono}</td>
                <td className="text-center">{this.props.user.email}</td>
                <td className="text-center">{this.props.user.direccion}</td>
                <td className="text-center">{this.props.user.anio}</td>
                <td className="text-center">{this.props.user.seccion}</td>
                <td className="text-center">{this.props.user.centro_escolar}</td>
                <td className="text-right" id="opcion">
                    <Button color="warning" onClick={this.getById}>Editar</Button>
                    <p className="text-white">.</p>
                    <Button color="danger" onClick={this.toggle}>Borrar</Button>
                </td>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader align="center" toggle={this.toggle} className="text-center">Confirmar</ModalHeader>
                    <ModalBody className="text-center">
                    <Button className="btn btn-danger" onClick={this.delete}>Si</Button>
                        <Button className="btn btn-warning" onClick={this.toggle}>No</Button></ModalBody>
                </Modal>
            </tr>
        );
    }
}