import React from "react";
import { Card, CardBody, CardHeader, CardFooter, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import FilaEstudiantes from "components/Filas/FilaEstudiantes";

export default class TablaEstudiantes extends React.Component {
    constructor(props) {
        super(props);
        this.anterior = this.anterior.bind(this);
        this.siguiente = this.siguiente.bind(this);
        this.refresh = this.refresh.bind(this);
        this.cargar = this.cargar.bind(this);
        this.notify = this.notify.bind(this);
        this.siguiente = this.siguiente.bind(this);
        this.anterior = this.anterior.bind(this);
        this.primerapag = this.primerapag.bind(this);
    }

    cargar(estudiante) {
        this.props.cargar(estudiante)
    }

    //alertas
    notify(place, color, message, icon) {
        this.props.notify(place, color, message, icon);
    }

    refresh(estudiante) {
        this.props.refresh(estudiante)
    }

    anterior() {
        this.props.anterior()
    }

    siguiente() {
        this.props.siguiente()
    }

    primerapag(){
        this.props.primerapag()
        }

    render() {
        return (
            <div>
                <div>
                    <Card>
                        <CardHeader tag="h4" className="text-center">Listado Completo</CardHeader>
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
                                    {this.props.currPage &&
                                        this.props.currPage.data.map(
                                            (user, i) => (
                                                <FilaEstudiantes key={i} user={user} refresh={this.refresh} cargar={this.cargar} notify={this.notify} />
                                            )
                                        )}
                                </tbody>
                            </Table>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Pagination>
                                <PaginationItem>
                                    <PaginationLink first onClick={this.primerapag}/>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink previous onClick={this.anterior} />
                                </PaginationItem>
                    
                                <PaginationItem>
                                    <PaginationLink>
                                        1
                                    </PaginationLink>
                                </PaginationItem>

                                <PaginationItem>
                                    <PaginationLink next onClick={this.siguiente} />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink last href="#" />
                                </PaginationItem>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        )
    }
}