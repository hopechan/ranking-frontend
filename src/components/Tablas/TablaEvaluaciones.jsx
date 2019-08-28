import React from "react";
import { Card, CardBody, Table } from 'reactstrap';
import FilaEvaluaciones from '../Filas/FilaEvaluaciones';

export default class TablaEvaluaciones extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.cargar = this.cargar.bind(this);
        this.notify = this.notify.bind(this);
    }

    cargar(tipo) {
        this.props.cargar(tipo)
    }

    //alertas
    notify(place, color, message, icon) {
        this.props.notify(place, color, message, icon);
    }

    refresh(tipo) {
        this.props.refresh(tipo)
    }

    render() {
        return (
            <Card>
                <h4 className="text-center">Tipos de Evaluaciones</h4>
                <CardBody>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="text-center">Tipo</th>
                                <th className="text-center">Descripción</th>
                                <th colSpan="2" className="text-center">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tipos.map(
                                (user, i) => (
                                    <FilaEvaluaciones key={i} user={user} refresh={this.refresh} cargar={this.cargar} notify={this.notify} />
                                )
                            )}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        )
    }
}