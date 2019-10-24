import React from "react";
import AsyncSelect from "react-select/async";

export default class Buscador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: {},
            bestudiantes:[]
        }
    }

    buscar = (inputValue, callback) => {
        if (!inputValue) {
            callback([])
        } else {
            setTimeout(() => {
                fetch(`http://localhost/ROp/api/estudiante/buscar/${inputValue}`, { method: "GET" })
                    .then((res) => { return res.json() })
                    .then((data) => {
                        const tempArray = [];
                        data.forEach((element) => {
                            tempArray.push({ label: `${element.nombre} ${element.apellidos}`, value: element.idestudiante });
                        })
                        callback(tempArray);
                        this.setState({ bestudiantes:tempArray })
                    })
                    .catch((error) => { console.log(error, "Ha ocurrido un error") })
            }, 1000);
        }
    }

    onSearchChange = (busqueda) => {
        if (busqueda) {
            this.setState({ busqueda })
        }
        console.log(this.state.bestudiantes);
    }

    render() {
        return (
            <div>
                <AsyncSelect bestudiantes={this.state.bestudiantes}
                    placeholder="Buscar..."
                    value={this.state.busqueda}
                    loadOptions={this.buscar}
                    onChange={(e) => { this.onSearchChange(e) }}
                    defaultOptions={false}
                >
                </AsyncSelect>
            </div>
        )
    }
}