import React from "react";
import { BootstrapTable } from "react-bootstrap-table-next";
class Tabla extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "black",
            activeColor: "info"
        };
        this.mainPanel = React.createRef();
    }
    render() {
        const products = [{
            id: 1,
            name: 'nombre',
            price: ''
        }];
        const columns = [{
            dataField: 'id',
            text: 'Product ID'
            }, {
            dataField: 'name',
            text: 'Product Name'
            }, {
            dataField: 'price',
            text: 'Product Price'
        }];
        return (
            <div>
                <BootstrapTable keyField = 'id'></BootstrapTable>
            </div>
        )
    }
}
export default Tabla;