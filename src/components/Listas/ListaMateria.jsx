import React from "react";
import { ListGroup , ListGroupItem } from "reactstrap";
import API from "../server/api";
export default class ListaNota extends React.Component{
    constructor(props){
        super(props);
        this.state = {collapse: false, materias:[]};
        this.accion = this.accion.bind(this);
    }

    componentWillMount(){
        API.get(`Materia`)
            .then(res => {
                const materias = res.data;
                this.setState({materias});
            })
    }

    accion(){
        console.log(this.props.tipo);
    }

    render() {
        const {materias} = this.state;
        return (
            <div>
                <ListGroup>
                {materias.map((m,i) => {
                    if (this.props.tipo === m.tipo) {
                        return <ListGroupItem color="info" onClick={this.accion} key={i}>{m.materia}</ListGroupItem>
                    }
                    return null;
                })}
                </ListGroup>
            </div>
        )
    }
}