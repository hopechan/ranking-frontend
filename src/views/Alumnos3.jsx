import React from "react";
import { Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";// reactstrap components
import TablaRanking from '../components/Tablas/TablaRanking'
import paginate from 'paginate-array';
import API from "../components/server/api";

export default class Alumnos3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            estudiantes: [],
            idestudiante: '',
            nombre: '',
            apellidos: '',
            fecha_nacimiento: '',
            telefono: '',
            email: '',
            direccion: '',
            anio: '',
            seccion: '',
            centro_escolar: '',
            visible: true,
            size: 4,
            page: 1,
            currPage: null,
            totalpag: null,
            modal: false,
        }
        this.siguiente = this.siguiente.bind(this);
        this.anterior = this.anterior.bind(this);
        this.primerapag = this.primerapag.bind(this);
        this.ultimapag = this.ultimapag.bind(this);
        this.numero = this.numero.bind(this);
        this.refresh = this.refresh.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cargar = this.cargar.bind(this);
        this.toggle = this.toggle.bind(this);
    }



    cargar(anio = 2017) {
        API.get(`/estudiante/getByYear/` + anio)
            .then(res => {
                const estudiantes = res.data;
                const { page, size } = this.state;
                const currPage = paginate(estudiantes, page, size);
                this.setState({ ...this.state, estudiantes, currPage });
                this.setState({
                    totalpag: this.state.currPage.totalPages
                })
            })
    }

    componentDidMount() {
        this.cargar()
    }
    //para recargar los datos
    refresh() {
        this.componentDidMount();
    }

    anterior() {
        const { page, size, estudiantes } = this.state;
        if (page > 1) {
            const newPage = page - 1;
            const newCurrPage = paginate(estudiantes, newPage, size);
            this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
        }
    }

    siguiente() {
        const { currPage, page, size, estudiantes } = this.state;
        if (page < currPage.totalPages) {
            const newPage = page + 1;
            const newCurrPage = paginate(estudiantes, newPage, size);
            this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
        }
    }

    primerapag() {
        const { size, estudiantes } = this.state;
        const newPage = 1;
        const newCurrPage = paginate(estudiantes, newPage, size);
        this.setState({ page: newPage, currPage: newCurrPage });
    }

    ultimapag() {
        const { size, estudiantes, currPage } = this.state;
        const newPage = currPage.totalPages;
        const newCurrPage = paginate(estudiantes, newPage, size);
        this.setState({ page: newPage, currPage: newCurrPage });
    }

    numero(numero) {
        const { size, estudiantes } = this.state;
        const newPage = numero;
        const newCurrPage = paginate(estudiantes, newPage, size);
        this.setState({ page: newPage, currPage: newCurrPage });
    }

    handleChange(e) {
        this.cargar(e.target.value)
    };

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    //metodo para renderizar la vista
    render() {
        let a = 0;
        let año = [];
        while (a <= 3) {
            año[a] = { value: new Date().getFullYear() - a, label: new Date().getFullYear() - a }
            a++;
        }
        var anio = new Date().getFullYear()-2
        return (
            <div className="content">
                <Row>
                    <Col sm="12" md="12" lg="12">
                        <label>Año:</label>
                        <select className="form-control" defaultValue={anio} onChange={this.handleChange}>
                            {año.map((prop, key) => (
                                <option key={key} value={prop.value}>{prop.label}</option>
                            ))}
                        </select>
                        <p className="text-white">a</p>
                        <TablaRanking page={this.state.page} toggle={this.toggle} totalpag={this.state.totalpag} currPage={this.state.currPage} numero={this.numero} refresh={this.refresh} cargar={this.cargar} notify={this.notify} siguiente={this.siguiente} anterior={this.anterior} primerapag={this.primerapag} ultimapag={this.ultimapag} responsive />
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader align="center" toggle={this.toggle} className="text-center">Nombre</ModalHeader>
                            <ModalBody className="text-center">
                                <table>

                                </table>
                                </ModalBody>
                        </Modal>
                    </Col>
                </Row>
            </div>
        );
    }
}
