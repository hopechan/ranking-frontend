import React from "react";
import { Button } from 'reactstrap';
import API from "../server/api";


export default class FilaEvaluaciones extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.getById = this.getById.bind(this);
        this.notify = this.notify.bind(this);
    }

    //Metodo para eliminar los datos de la api
    delete() {
        API.delete(`Tipo/` + this.props.user.idtipo)
            .then(response => this.props.refresh(response.data),this.notify("tr","danger","Tipo de evaluación eliminada","nc-icon nc-simple-remove"))
            .catch(error => console.log(error));
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

    render() {
        return (
            <tr>
                <td className="text-center">{this.props.user.tipo}</td>
                <td className="text-center">{this.props.user.descripcion}</td>
                <td className="text-center">
                    <Button color="warning" onClick={this.getById}>Editar</Button>
                    {" "}
                    <Button color="danger" onClick={this.delete}>Borrar</Button>
                </td>
            </tr>
        );
    }
}