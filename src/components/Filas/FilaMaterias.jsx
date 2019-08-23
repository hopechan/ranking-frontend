import React from "react";
import { Button } from 'reactstrap';
import API from "../server/api";


export default class FilaMaterias extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.getById = this.getById.bind(this);
    }

    //Metodo para eliminar los datos de la api
    delete() {
        API.delete(`materia/` + this.props.user.idmateria)
            .then(response => this.props.refresh(response.data))
            .catch(error => console.log(error));
    }

    getById() {
        API.get('materia/' + this.props.user.idmateria)
            .then(response => {
                this.props.cargar({
                    idmateria: response.data.idmateria,
                    materia: response.data.materia,
                    descripcion: response.data.descripcion
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