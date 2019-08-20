import React from "react";
import { Button } from 'reactstrap';
import API from "../server/api";


export default class FilaEvaluaciones extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    //Metodo para eliminar los datos de la api
    delete() {
        API.delete(`Tipo/` + this.props.user.idtipo)
            .then(response => this.props.refresh(response.data))
            .catch(error => console.log(error));
    }
    

    render() {
        return (
            <tr>
                <td className="text-center">{this.props.user.tipo}</td>
                <td className="text-center">{this.props.user.descripcion}</td>
                <td className="text-center">
                    <Button color="warning">Editar</Button>
                </td>
                <td className="text-center">
                    <Button color="danger" onClick={this.delete}>Borrar</Button>
                </td>
            </tr>
        );
    }
}