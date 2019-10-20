import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import API from "../server/api";

export default class ListaMateria extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            materias: [],
            materia : ''
        };
    }

    handleChange = event => {
        const { onClick } = this.props;
        const value = event.target.innerText;
        onClick(value)
    }

    componentWillMount() {
        API.get(`materia`)
            .then(res => {
                const materias = res.data;
                this.setState({ materias });
            }
        )
    }

    /**Para que esto funcione hay que dar doble clic :'v pero algo es algo */
    render() {
        const { materias } = this.state;
        return (
            <div>
                <ListGroup>
                    {materias.map((m, i) => {
                        if (this.props.tipo === m.tipo) {
                            return <ListGroupItem color="info" value = {m.materia} key={i} onClick={this.handleChange}>{m.materia}</ListGroupItem>
                        }
                        return null;
                    })}
                </ListGroup>
            </div>
        )
    }
}