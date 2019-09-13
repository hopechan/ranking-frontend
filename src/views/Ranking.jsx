import React from "react";
import { Row, Col, } from "reactstrap";// reactstrap components
import TablaRanking from '../components/Tablas/TablaRanking'
import paginate from 'paginate-array';

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
            totalpag: null
        }
        this.siguiente = this.siguiente.bind(this);
        this.anterior = this.anterior.bind(this);
        this.primerapag = this.primerapag.bind(this);
        this.ultimapag = this.ultimapag.bind(this);
        this.numero = this.numero.bind(this);
        this.filtrar = this.filtrar.bind(this);
        this.ordenar = this.ordenar.bind(this);
    }

    componentDidMount() {
        this.getData()
            .then(data => {
                 this.filtrar(data)
                const { page, size } = this.state;
                const currPage = paginate( page, size);
                this.setState({ ...this.state,  currPage });
                this.setState({
                    totalpag: this.state.currPage.totalPages
                })
            })
            .then(filtro => {return this.ordenar(filtro)})
    }

    async getData() {
        let data =
            fetch(`http://localhost/ROp/api/Nota/ranking/2018`)
                .then(res => { return res.json() })
                .catch(error => console.log(`Ha ocurrido el error: ${error}`));
        return data;
    }

    filtrar(data){
        return data.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj.estudiante).indexOf(obj.estudiante) === pos;
        })
    }

    ordenar(data){
        return data.sort((a,b) =>(b.promedio > a.promedio) ? 1 : -1).filter(e => e.estudiante !== '');
    }

    obtenerNombre(data){
        return data.map(items => items.estudiante);
    }

    obtenerProm(data){
        return data.map(items => items.promedio);
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

    //metodo para renderizar la vista
    render() {
        return (
            <div className="content">
                <Row>
                    <Col sm="12" md="12" lg="12">
                        <TablaRanking page={this.state.page} totalpag={this.state.totalpag} />
                        {console.log(this.state.estudiantes)}
                    </Col>
                </Row>
            </div>
        );
    }
}
