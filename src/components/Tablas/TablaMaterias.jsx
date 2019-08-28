import React from "react";
import { Card, CardBody, CardFooter, Table } from 'reactstrap';
import FilaMaterias from '../Filas/FilaMaterias';
//import Paginacion from '../Paginacion/Paginacion';

export default class TablaMaterias extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.cargar = this.cargar.bind(this);
        this.notify = this.notify.bind(this);
    }

    //alertas
    notify(place, color, message, icon) {
        this.props.notify(place, color, message, icon);
    }

    cargar(materia) {
        this.props.cargar(materia)
    }

    refresh(materia) {
        this.props.refresh(materia)
    }

    render() {
        return (
            <Card>
                <h4 className="text-center">Tabla de Materias</h4>
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
                                    <FilaMaterias key={i} user={user} refresh={this.refresh} cargar={this.cargar} notify={this.notify}/>
                                )
                            )}
                        </tbody>
                    </Table>
                </CardBody>
                <CardFooter className="text-center">
                    {/* <Paginacion /> */}
                </CardFooter>
            </Card>
        )
    }
}