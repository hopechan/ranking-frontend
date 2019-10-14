import React from "react";
import { Button, Col, Input, Row, Table } from "reactstrap"
import API from "../server/api";

export default class FormNota extends React.Component { 
    //Metodo constructor
    constructor(props) {
        super(props);
        this.state={
            notas: [],
            nota_p1:"",
            nota_p2:"",
            nota_p3:"",
            nota_p4:"",
        }
        this.accion = this.accion.bind(this);
        this.clear = this.clear.bind(this);
        this.toggle = this.toggle.bind(this);
        this.notify = this.notify.bind(this);
    }

    clear() {
        this.props.clear();
    }

    componentDidMount(){
        API.get(`nota/notasPorMateria/${this.props.anio}/${this.props.tipo}/${this.props.materia}`)
            .then(res => {
                const notas = res.data
                this.setState({ notas })
            }
        )
    }

    //alertas
    notify(place, color, message, icon) {
        this.props.notify(place, color, message, icon);
    }

    accion(e){
        e.preventDefault();
    }

    toggle() {
        this.props.toggle();
    }

    render(){
        const notas = this.state.notas;
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>1° Periodo</th>
                        <th>2° Periodo</th>
                        <th>3° Periodo</th>
                        <th>4° Periodo</th>
                        <th>Total</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {notas.map((n, i) =>{
                        return <tr key={i}>
                                <td>{n.Estudiante}</td>
                                <td><Input value = {n.nota_p1} type = "number" step = "0.01" min = "0.0" max = "10.0" required disabled/></td>
                                <td><Input value = {n.nota_p2} type = "number" step = "0.01" min = "0.0" max = "10.0" required disabled/></td>
                                <td><Input value = {n.nota_p3} type = "number" step = "0.01" min = "0.0" max = "10.0" required disabled/></td>
                                <td><Input value = {n.nota_p4} type = "number" step = "0.01" min = "0.0" max = "10.0" required disabled/></td>
                                <td><Input value = {n.nota_p4} type = "number" step = "0.01" min = "0.0" max = "10.0" required disabled/></td>
                                <td>
                                    <Row>
                                        <Col sm = "6" md = "6"><Button color="success">G</Button></Col>
                                        <Col sm = "6" md = "6"><Button color="warning">E</Button></Col>
                                    </Row>
                                </td>
                            </tr>
                    })}
                </tbody>
            </Table>
        );
    }

}