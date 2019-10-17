import React from "react";
import { Button } from 'reactstrap';


export default class FilaEstudiantes extends React.Component {

    render() {
        return (
            <tr>
                <td className="text-center">{this.props.user.nombre} {this.props.user.apellidos}</td>
                <td className="text-center">{this.props.user.email}</td>
                <td className="text-center"padding="2px">{this.props.user.anio}</td>
                <td className="text-center" padding="2px">{this.props.user.seccion}</td>
                <td className="text-center">
                    <Button color="primary">Ver más</Button>
                </td>
            </tr>
        );
    }
}