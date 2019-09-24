import React from "react";
import { Row, Col, } from "reactstrap";// reactstrap components
import TablaRanking from '../components/Tablas/TablaRanking'
import paginate from 'paginate-array';
import API from "../components/server/api";
import Select from 'react-select';

export default class Ranking extends React.Component {

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
            selectedOption: { value: 2018 },
            algo:null,
        }
        this.siguiente = this.siguiente.bind(this);
        this.anterior = this.anterior.bind(this);
        this.primerapag = this.primerapag.bind(this);
        this.ultimapag = this.ultimapag.bind(this);
        this.numero = this.numero.bind(this);
        this.refresh = this.refresh.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        API.get(`/estudiante/getByYear/` + this.state.selectedOption.value)
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

    handleChange = selectedOption => {
        this.setState({ selectedOption : selectedOption}); 
        this.refresh()
    };

    //metodo para renderizar la vista
    render() {
        let a = 1;
        let año = [];
        while (a <= 3) {
            año[a] = { value: new Date().getFullYear() - a, label: new Date().getFullYear() - a }
            a++;
        }
        return (
            <div className="content">
                <Row>
                    <Col sm="12" md="12" lg="12">
                        <Select onChange={this.handleChange} value={this.state.selectedOption} options={año} />
                        <TablaRanking page={this.state.page} totalpag={this.state.totalpag} currPage={this.state.currPage} numero={this.numero} refresh={this.refresh} cargar={this.cargar} notify={this.notify} siguiente={this.siguiente} anterior={this.anterior} primerapag={this.primerapag} ultimapag={this.ultimapag} responsive />
                    </Col>
                </Row>
            </div>
        );
    }
}
