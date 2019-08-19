import React from "react";
import { Button, Table } from 'reactstrap';
import API from "../server/api";

class TablaEstudiante extends React.Component{
    state = {
        estudiantes : []
    }

    componentDidMount(){
        API.get(`Estudiante`)
            .then(res => {
                const estudiantes = res.data;
                this.setState({estudiantes})
                console.log(this.state);
            })
    }

    render() {
        return (
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Telefono</th>
                            <th>email</th>
                            <th>Direccion</th>
                            <th>Año</th>
                            <th>Seccion</th>
                            <th>Centro Escolar</th>
                            <th colspan="2">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.estudiantes.map(e =>
                            <tr>
                                <td>{e.nombre}</td>
                                <td>{e.apellidos}</td>
                                <td>{e.fecha_nacimiento}</td>
                                <td>{e.telefono}</td>
                                <td>{e.email}</td>
                                <td>{e.direccion}</td>
                                <td>{e.anio}</td>
                                <td>{e.seccion}</td>
                                <td>{e.centro_escolar}</td>
                                <td>
                                    <Button color="warning">Editar</Button>
                                </td>
                                <td>
                                    <Button color="danger">Borrar</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TablaEstudiante;