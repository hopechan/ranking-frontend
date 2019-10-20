import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import TabsNotas  from "../components/Tabs/TabsNotas";
import API from "../components/server/api";

class Nota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {materias: [], idmateria : '', materia: 'FormacionLinguistica', tipo: 'CCGK'}
    this.materiasConTipo = this.materiasConTipo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.refresh = this.refresh.bind(this);
  }

  materiasConTipo(){
    fetch("http://localhost/ROp/api/Materia/materiasConTipo")
    .then(res => res.json())
    .then(data => {
      this.setState({materias : data})
    })
  }

  getById(id){
    API.get(`Materia/${id}`)
    .then(res => res.data)
    .then(data => {
        this.setState({materia: data.materia, tipo: data.tipo})
    })
  }

  componentDidMount(){
    this.materiasConTipo()
  }

  handleChange(e) {
    //this.setState({idmateria : e.target.value})
    this.getById(e.target.value)
  }

  //para recargar los datos
  refresh(datos) {
    this.componentDidMount();
  }

  render() {
    const materias = this.state.materias;
    let arreglo = [];
    for (let i = 0; i < materias.length; i++) {
      arreglo[i] = { value: materias[i].idmateria, label: materias[i].materia }
    }
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12" sm="12">
              <select className="form-control" onChange={this.handleChange}>
                {arreglo.map((prop, key) => (
                  <option key={key} value={prop.value}>{prop.label}</option>
                ))}
              </select>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col md="12" sm="12">
              <Card>
                <CardBody>
                  <TabsNotas materia = {this.state.materia} tipo = {this.state.tipo} notify={this.notify}/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Nota;