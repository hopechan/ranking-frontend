import React from "react";
import AsyncSelect from "react-select/async";
import API from "../server/api";
import { resolve } from "path";

export default class Buscador extends React.Component{
    constructor(props) {
        super(props);
        this.state = { busqueda: {} }
    }

    buscar = (inputValue, callback) => {
        if (!inputValue) {
            callback([])
        }else{
            setTimeout(() => {
                fetch(`http://localhost/ROp/api/estudiante/${inputValue}`, {method: "GET"})
                .then((res) => {return res.json()})
                .then((data) => {
                    const tempArray = [];
                    data.forEach((element) => {
                        tempArray.push({ label: `${element.nombre} ${element.apellidos}`, value: element.idestudiante });
                    })
                    callback(tempArray);
                })
                .catch((error) => {console.log(error, "Ha ocurrido un error")})
            }, 1000);
        }
    }

    onSearchChange = (busqueda) => {
        if (busqueda) {
            this.setState({ busqueda })
        }
    }

    render() {
        return (
            <div>
                <AsyncSelect
                    placeholder = "Buscar..."
                    value = {this.state.busqueda}
                    loadOptions = {this.buscar}
                    onChange = {(e) => {this.onSearchChange(e)}}
                    defaultOptions = {false}
                >
                </AsyncSelect>
            </div>
        )
    }
}