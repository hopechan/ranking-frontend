import React from "react";
import { Button, Card, CardBody, CardHeader, CardFooter, Pagination, PaginationItem, PaginationLink, Table} from 'reactstrap';
import paginate from 'paginate-array';
import API from "../server/api";

class TablaEstudiante extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            estudiantes : [],
            size: 6,
            page: 1,
            currPage: null
        };
        this.anterior = this.anterior.bind(this);
        this.siguiente = this.siguiente.bind(this);
    }

    componentDidMount(){
        API.get(`Estudiante`)
            .then(res => {
                const estudiantes = res.data;
                const {page, size} = this.state;
                const currPage = paginate(estudiantes, page, size);
                this.setState({estudiantes});
                this.setState({
                    ...this.state,
                    estudiantes,
                    currPage
                })
            })
    }

    anterior(){
        console.log("anterior");
        
        const {currPage, page, size, estudiantes} = this.state;
        if (page > 1) {
            const newPage = page - 1;
            const newCurrPage = paginate(estudiantes, newPage, size);
            this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
        }
    }

    siguiente(){
        const {currPage, page, size, estudiantes} = this.state;
        if (page < currPage.totalPages) {
            const newPage = page + 1;
            const newCurrPage = paginate(estudiantes, newPage, size);
            this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
        }
    }

    render() {
        const { page, size, currPage } = this.state;
        return (
            <div>
                <div>
                    <Card>
                        <CardHeader tag="h4" className="text-right">Listado Completo</CardHeader>
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
                                    {currPage &&
                                        currPage.data.map(e =>
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
                        <CardFooter className="text-center">
                            <Button color="link" onClick={this.anterior}>{"<<"}</Button><Button color="link" onClick={this.siguiente}>{">>"}</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        )
    }
}

export default TablaEstudiante;