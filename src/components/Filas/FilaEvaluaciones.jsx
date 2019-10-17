import React from "react";
import { Button,Modal, ModalHeader, ModalBody } from 'reactstrap';
import API from "../server/api";


export default class FilaEvaluaciones extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            modal:false
        }
        this.delete = this.delete.bind(this);
        this.getById = this.getById.bind(this);
        this.notify = this.notify.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    //Metodo para eliminar los datos de la api
    delete() {
        API.delete(`Tipo/` + this.props.user.idtipo)
            .then(response => this.props.refresh(response.data),this.notify("tr","danger","Tipo de evaluación eliminada","nc-icon nc-simple-remove"))
            .catch(error => console.log(error));
            this.toggle()
    }

    //alertas
    notify(place, color, message, icon) {
        this.props.notify(place, color, message, icon);
    }

    getById() {
        API.get('Tipo/' + this.props.user.idtipo)
            .then(response => {
                this.props.cargar({
                    idtipo: response.data.idtipo,
                    tipo: response.data.tipo,
                    descripcion: response.data.descripcion
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
            <tr>
                <td className="text-center">{this.props.user.tipo}</td>
                <td className="text-center">{this.props.user.descripcion}</td>
                <td className="text-center">
                    <Button color="warning" onClick={this.getById}>Editar</Button>
                    {" "}
                    <Button color="danger" onClick={this.toggle}>Borrar</Button>
                </td>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader align="center" toggle={this.toggle} className="text-center">Confirmar eliminacion</ModalHeader>
                    <ModalBody className="text-center">
                    <Button className="btn btn-danger" onClick={this.delete}>Si</Button>
                        <Button className="btn btn-warning" onClick={this.toggle}>No</Button></ModalBody>
                </Modal>
            </tr>
        );
    }
}