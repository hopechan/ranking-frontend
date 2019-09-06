import React from "react";
import { Card, CardBody, CardFooter, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import FilaMaterias from '../Filas/FilaMaterias';
//import Paginacion from '../Paginacion/Paginacion';

export default class TablaMaterias extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
        this.refresh = this.refresh.bind(this);
        this.cargar = this.cargar.bind(this);
        this.notify = this.notify.bind(this);
        this.siguiente = this.siguiente.bind(this);
        this.anterior = this.anterior.bind(this);
        this.primerapag = this.primerapag.bind(this);
        this.ultimapag = this.ultimapag.bind(this);
        this.numero = this.numero.bind(this);
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

    anterior() {
        this.props.anterior()
    }

    siguiente() {
        this.props.siguiente()
    }

    primerapag() {
        this.props.primerapag()
    }

    ultimapag() {
        this.props.ultimapag()
    }
    numero(numero) {
        this.props.numero(numero)
    }

    render() {
        //el array para los numeros de la paginación
        let i = 1;
        let array = [];
        while (i <= this.props.totalpag) {
            array[i] = i;
            i++;
        }
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
                            {this.props.currPage &&
                                this.props.currPage.data.map(
                                    (user, i) => (
                                        <FilaMaterias key={i} user={user} refresh={this.refresh} cargar={this.cargar} notify={this.notify} />
                                    )
                                )}
                        </tbody>
                    </Table>
                </CardBody>
                <CardFooter className="mx-auto">
                    <Pagination>
                        <PaginationItem className={this.props.page <= 2 ? "disabled" : ""}>
                            <PaginationLink first onClick={this.primerapag} className="bg-dark text-white" />
                        </PaginationItem>
                        <PaginationItem className={this.props.page === 1 ? "disabled" : ""} >
                            <PaginationLink previous onClick={this.anterior} className="bg-dark text-white" />
                        </PaginationItem>
                        {/* Para los numeros dinamicos de la paginación */}
                        {array.map((item, i) => (
                            <PaginationItem key={i} className={this.props.page === item ? "active" : ""}>
                                <PaginationLink onClick={() => this.numero(item)} className="bg-dark text-white">{item}</PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem className={this.props.page === this.props.totalpag ? "disabled" : ""}>
                            <PaginationLink next onClick={this.siguiente} className="bg-dark text-white" />
                        </PaginationItem>
                        <PaginationItem className={this.props.page === this.props.totalpag ? "disabled" : ""}>
                            <PaginationLink last onClick={this.ultimapag} className="bg-dark text-white" />
                        </PaginationItem>
                    </Pagination>
                </CardFooter>
            </Card>
        )
    }
}