import React from "react";
import {Card, CardBody, CardTitle, Col, Row} from 'reactstrap';
import { Chart } from "chart.js";
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
    {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
    }
    ]
};
class Barra extends React.Component { 
    chartRef = React.createRef();
    componentDidMount(){
        const grafico = this.chartRef.current.getContext("2d");
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
                    <CardBody><canvas id="myChart" ref={this.chartRef}></canvas></CardBody>
                </Card>
            </div>
        )
    }
}

export default Barra;