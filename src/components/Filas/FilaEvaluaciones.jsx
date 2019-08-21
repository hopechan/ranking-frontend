import React from "react";
import { Button, Row, Col } from 'reactstrap';
import API from "../server/api";
import { toggle } from "../Forms/FormEvaluaciones";


export default class FilaEvaluaciones extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.getById = this.getById.bind(this);
    }

    //Metodo para eliminar los datos de la api
    delete() {
        API.delete(`Tipo/` + this.props.user.idtipo)
            .then(response => this.props.refresh(response.data))
            .catch(error => console.log(error));
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
                    <Row>
                        <Col md="12" >
                            <Button color="warning" onClick={this.props.toggle}>Editar</Button>
                            {" "}
                            <Button color="danger" onClick={this.delete}>Borrar</Button>
                        </Col>
                    </Row>
                </td>
            </tr>
        );
    }
}