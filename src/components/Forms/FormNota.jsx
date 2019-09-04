import React from "react";
import { Button, Form, Input, Table } from "reactstrap";// reactstrap components
import API from "../server/api";

export default class FormNota extends React.Component { 
    //Metodo constructor
    constructor(props) {
        super(props);
        this.accion = this.accion.bind(this);
        this.clear = this.clear.bind(this);
        this.toggle = this.toggle.bind(this);
        this.notify = this.notify.bind(this);
    }

    clear(e) {
        this.props.clear();
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
        return (
            <Form onSubmit={this.accion}>
                <Table responsive bordered>
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
                        <tr>
                            <td>Nombre Nombre1 Apellido1 Apellido2</td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span></span></td>
                            <td><Button>Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Nombre Nombre1 Apellido1 Apellido2</td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span></span></td>
                            <td><Button>Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Nombre Nombre1 Apellido1 Apellido2</td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span></span></td>
                            <td><Button>Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Nombre Nombre1 Apellido1 Apellido2</td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span></span></td>
                            <td><Button>Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Nombre Nombre1 Apellido1 Apellido2</td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span></span></td>
                            <td><Button>Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Nombre Nombre1 Apellido1 Apellido2</td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span></span></td>
                            <td><Button>Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Nombre Nombre1 Apellido1 Apellido2</td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span></span></td>
                            <td><Button>Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Nombre Nombre1 Apellido1 Apellido2</td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span></span></td>
                            <td><Button>Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Nombre Nombre1 Apellido1 Apellido2</td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span contentEditable></span></td>
                            <td><span></span></td>
                            <td><Button>Delete</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Form>
        );
    }


}