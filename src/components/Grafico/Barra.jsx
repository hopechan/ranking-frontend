import React from "react";
import {Card, CardBody} from 'reactstrap';
import { Chart } from "chart.js";
import API from "../server/api.js";
class Barra extends React.Component { 
    chartRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {ranking : []};
        this.grafico = this.grafico.bind(this);
        this.diezPorCiento = this.grafico.bind(this);
    }

    componentDidMount(){
        let ranking = this.getData()
            .then(data => this.filtrar(data))
            .then(filtro => {return this.ordenar(filtro)})
            .then(r => this.grafico(r));
    }

    async getData(){
        let data = 
        fetch(`http://localhost/ROp/api/Nota/ranking/2018`)
        .then(res => {return res.json()})
        .catch(error => console.log(`Ha ocurrido el error: ${error}`));
        return data;
    }

    filtrar(data){
        return data.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj.estudiante).indexOf(obj.estudiante) == pos;
        })
    }

    obtenerNombre(data){
        return data.map(items => items.estudiante);
    }

    obtenerProm(data){
        return data.map(items => items.promedio);
    }

    ordenar(data){
        return data.sort((a,b) =>(b.promedio > a.promedio) ? 1 : -1).filter(e => e.estudiante !== '');
    }

    grafico(ranking) {
        const grafico = this.chartRef.current.getContext("2d");
        new Chart(grafico, {
            type: "bar",
            data: {
                labels: this.obtenerNombre(ranking),
                datasets :  [
                    {
                        label: "Top 10 Ranking Oportunidades",
                        data: this.obtenerProm(ranking),
                        backgroundColor: ['#FF1000', '#808080', '#000000', '#FF0000', '#808080', '#000000', '#FF0000', '#808080', '#000000', '#FF0000'],
                    }
                ]
            },
            options:{
                responsive: true,
                legend:{display:false},
                title:{
                    display: true,
                    text: "Top Ranking Oportunidades"
                },
                scales:{
                    yAxes:[{
                        display: true,
                        ticks: {
                            suggestedMin: 0, 
                            suggestedMax: 10,
                            beginAtZero: true,
                            stepSize: 2
                        }
                    }]
                }
            }
        });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody><canvas id="graficoBarra" ref={this.chartRef}></canvas></CardBody>
                </Card>
            </div>
        )
    }
}

export default Barra;