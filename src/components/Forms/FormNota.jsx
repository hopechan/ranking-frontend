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

    componentDidUpdate(){
        API.get(`nota/notasPorMateria/${this.props.anio}/${this.props.tipo}/${this.props.materia}`)
            .then(res => {
                const notas = res.data
                this.setState({ notas })
            }
        )
    }

    //alertas
    notify(place, color, message, icon) {
        //this.props.notify(place, color, message, icon);
        alert('Notas actualizadas')
    }

    accion(e){
        e.preventDefault();
    }

    toggle() {
        this.props.toggle();
    }

    editar = (data) => {
        //let campos = document.querySelectorAll(`.campo-${data.idestudiante}`)
        Array.from(document.querySelectorAll(`.campo-${data.idestudiante}`)).forEach(c => {c.removeAttribute('disabled', '')})
    }

    guardar = (data) => {
        let n1 = document.querySelector(`#n1-${data.idestudiante}`).value
        let n2 = document.querySelector(`#n2-${data.idestudiante}`).value
        let n3 = document.querySelector(`#n3-${data.idestudiante}`).value
        let n4 = document.querySelector(`#n4-${data.idestudiante}`).value
        const nota = {
            idestudiante : data.idestudiante,
            idmateria: data.idmateria,
            nota_p1 : n1,
            nota_p2 : n2,
            nota_p3 : n3,
            nota_p4 : n4
        }
        console.log(nota);
        
        const headers = {
            'Content-Type': 'application/json',
        };
        console.log(`nota/${data.idnota}`);
        API.put(`nota/${data.idnota}`, JSON.stringify(nota), {headers})
            .then(response => alert(response.data))
            .catch(error => console.log(error))
    }

    onChange(e){}

    render(){
        const notas = this.state.notas;
        //console.log(`${this.props.anio}/${this.props.tipo}/${this.props.materia}`);
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
                                <td><Input defaultValue = {n.nota_p1} type = "number" step = "0.01" min = "0.0" max = "10.0" required className = {`campo-${n.idestudiante}`} id={`n1-${n.idestudiante}`} /></td>
                                <td><Input defaultValue = {n.nota_p2} type = "number" step = "0.01" min = "0.0" max = "10.0" required className = {`campo-${n.idestudiante}`} id={`n2-${n.idestudiante}`}/></td>
                                <td><Input defaultValue = {n.nota_p3} type = "number" step = "0.01" min = "0.0" max = "10.0" required className = {`campo-${n.idestudiante}`} id={`n3-${n.idestudiante}`}/></td>
                                <td><Input defaultValue = {n.nota_p4} type = "number" step = "0.01" min = "0.0" max = "10.0" required className = {`campo-${n.idestudiante}`} id={`n4-${n.idestudiante}`}/></td>
                                <td><Input defaultValue = '00.0' type = "number" step = "0.01" min = "0.0" max = "10.0" required disabled/></td>
                                <td>
                                    <Row>
                                        <Col sm = "6" md = "6"><Button color="success" onClick={() => this.editar(n)}>G</Button></Col>
                                        <Col sm = "6" md = "6"><Button color="warning" onClick={() => this.guardar(n)}>E</Button></Col>
                                    </Row>
                                </td>
                            </tr>
                    })}
                </tbody>
            </Table>
        );
    }

}