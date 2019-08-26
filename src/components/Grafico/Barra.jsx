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

    //  componentDidMount(){
    //      API.get(`Nota/ranking/2017`)
    //          .then(res => {
    //              this.setState({ranking: res.data});
    //              //console.log(this.state.ranking.map(e => e.estudiante));
    //              let nombre = this.state.ranking.map(e=>e.estudiante 
    //                  );
    //          })
    //      this.grafico();
    //  }

    diezPorCiento(arreglo){
        let filtro = Math.round(arreglo.length/10);
        if (filtro === 0) {
            return arreglo.length;
        } else {
            return filtro;
        }
    }

    grafico(nombres) {
        console.log(nombres);
        
        const grafico = this.chartRef.current.getContext("2d");
        //let sorted = rawData.sort((a,b) => (b.promedio > a.promedio) ? 1 : -1).filter(e => e.estudiante !== '');
        new Chart(grafico, {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "March"],
                datasets :  [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]
            }, 
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