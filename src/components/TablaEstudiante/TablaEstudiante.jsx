import React from "react";
import { Button, Card, CardBody, CardHeader, Table} from 'reactstrap';
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
                <div>
                    <Card>
                        <CardHeader tag="h4">Listado Completo</CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th className="text-center">Nombre</th>
                                        <th className="text-center">Apellidos</th>
                                        <th className="text-center">Fecha de Nacimiento</th>
                                        <th className="text-center">Telefono</th>
                                        <th className="text-center">email</th>
                                        <th className="text-center">Direccion</th>
                                        <th className="text-center">Año</th>
                                        <th className="text-center">Seccion</th>
                                        <th className="text-center">Centro Escolar</th>
                                        <th colSpan="2" className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.estudiantes.map(e =>
                                        <tr>
                                            <td className="text-center">{e.nombre}</td>
                                            <td className="text-center">{e.apellidos}</td>
                                            <td className="text-center">{e.fecha_nacimiento}</td>
                                            <td className="text-center">{e.telefono}</td>
                                            <td className="text-center">{e.email}</td>
                                            <td className="text-center">{e.direccion}</td>
                                            <td className="text-center">{e.anio}</td>
                                            <td className="text-center">{e.seccion}</td>
                                            <td className="text-center">{e.centro_escolar}</td>
                                            <td className="text-center">
                                                <Button color="warning">Editar</Button>
                                            </td>
                                            <td className="text-center">
                                                <Button color="danger">Borrar</Button>
                                            </td>
                                        </tr>
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

export default TablaEstudiante;