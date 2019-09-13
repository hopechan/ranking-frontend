import React from "react";
import { Button } from 'reactstrap';
import API from "../server/api";


export default class FilaMaterias extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.getById = this.getById.bind(this);
        this.notify = this.notify.bind(this);
    }

    //Metodo para eliminar los datos de la api
    delete() {
        API.delete(`materia/` + this.props.user.idmateria)
            .then(response => this.props.refresh(response.data), this.notify("tr","danger","Materia eliminada","nc-icon nc-simple-remove"))
            .catch(error => console.log(error));
    }

    //alertas
    notify(place, color, message, icon) {
        this.props.notify(place, color, message, icon);
    }

    //Metodo para ver los datos por un id
    getById() {
        API.get('materia/' + this.props.user.idmateria)
            .then(response => {
                this.props.cargar({
                    idmateria: response.data.idmateria,
                    idtipo: response.data.idtipo,
                    materia: response.data.materia
                });
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <tr>
                <td className="text-center">{this.props.user.materia}</td>
                <td className="text-center">{this.props.user.tipo}</td>
                <td className="text-center">
                            <Button color="warning" onClick={this.getById}>Editar</Button>
                            {" "}
                            <Button color="danger" onClick={this.delete}>Borrar</Button>
                </td>
            </tr>
        );
    }
}