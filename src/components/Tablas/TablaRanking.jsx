import React from "react";
import { Card, CardBody, CardFooter, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import FilaRanking from "components/Filas/FilaRanking";

export default class TablaEstudiantes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
        this.refresh = this.refresh.bind(this);
        this.cargar = this.cargar.bind(this);
        this.siguiente = this.siguiente.bind(this);
        this.anterior = this.anterior.bind(this);
        this.primerapag = this.primerapag.bind(this);
        this.ultimapag = this.ultimapag.bind(this);
        this.numero = this.numero.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    cargar(estudiante) {
        this.props.cargar(estudiante)
    }

    toggle() {
        this.props.toggle();
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
            <div>
                <div>
                    <Card>
                        <CardBody>
                            <Table responsive>
                                <thead >
                                    <tr>
                                        <th className="text-center" id="tabla">Nombre Completo</th>
                                        <th className="text-center">email</th>
                                        <th className="text-center">Año</th>
                                        <th className="text-center">Seccion</th>
                                        {/* <th colSpan="2" className="text-center">Opciones</th> */}
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.props.currPage &&
                                        this.props.currPage.data.map(
                                            (user, i) => (
                                                <FilaRanking key={i} user={user} refresh={this.refresh} toggle={this.toggle} cargar={this.cargar} notify={this.notify} />
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
                </div>
            </div>
        )
    }
}