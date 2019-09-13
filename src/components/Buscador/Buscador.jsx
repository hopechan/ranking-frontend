import React, { Component } from "react";
import AsyncSelect from 'react-select/async';
import API from "../server/api";

export default class Buscador extends React.Component{
    constructor(props) {
        super(props);
        this.state = { busqueda: '' }
    }

    onInputChange = (nuevoValor) =>{
        const inputValue = nuevoValor.replace(/\W/g, '');
        this.setState({inputValue});
        console.log(inputValue);
        return inputValue;
    }

    filtrar = (inputValue) => {
        API.get(`estudiante`)
    }

    cargarOpciones = (inputValue, callback) => {
        setTimeout(() => {
            callback(this.filtrar(inputValue))
        }, 1000)
    }

    render() {
        return (
            <div>
                <AsyncSelect
                    cacheOptions
                    loadOptions = {this.cargarOpciones}
                    defaultOptions
                    onInputChange = {this.onInputChange}
                    placeholder = "Buscar..."
                >
                </AsyncSelect>
            </div>
        )
    }
}