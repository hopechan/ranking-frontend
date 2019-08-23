import React from "react";
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import FilaMaterias from '../Filas/FilaMaterias';

export default class TablaMaterias extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.cargar = this.cargar.bind(this);
    }

    cargar(materia) {
        this.props.cargar(materia)
    }

    refresh(materia) {
        this.props.refresh(materia)
    }

    render() {
        return (
            <div>
                <div>
                    <Card>
                        <CardHeader tag="h4" className="text-center">Tabla de Materias</CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th className="text-center">Materia</th>
                                        <th className="text-center">Tipo</th>
                                        <th colSpan="2" className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.materias.map(
                                        (user, i) => (
                                            <FilaMaterias key={i} user={user} refresh={this.refresh} cargar={this.cargar} />
                                        )
                                    )}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}