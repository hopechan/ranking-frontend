import React from "react";
import TablaEvaluaciones from '../components/Tablas/TablaEvaluaciones'
import { Row, Col } from "reactstrap";// reactstrap components
import API from "../components/server/api";

export default class Evaluaciones extends React.Component {

  //Metodo Constructor
  constructor(props) {
    super(props);
    this.state = {
      tipos: []
    }
    this.refresh = this.refresh.bind(this);
    this.cargar = this.cargar.bind(this);
  }

  cargar(user) {
    this.setState({
      idtipo: user.idtipo,
      tipo: user.tipo,
      descripcion: user.descripcion,
      editar: true
    });
  }

  //Metodo para obtener los datos de la api
  componentDidMount() {
    API.get(`Tipo`)
      .then(res => {
        const tipos = res.data;
        this.setState({ tipos })
        console.log(this.state);
      })
  }

  refresh(datos) {
    this.componentDidMount();
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col sm="12" md="12">
              {/* <FormEvaluaciones /> */}
              <TablaEvaluaciones tipos={this.state.tipos} refresh={this.refresh} cargar={this.cargar} responsive />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

