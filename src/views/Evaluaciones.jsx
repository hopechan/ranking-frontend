import React from "react";
import TablaEvaluaciones from '../components/Tablas/TablaEvaluaciones'
import FormEvaluaciones from '../components/Forms/FormEvaluaciones'
import { Row, Col } from "reactstrap";// reactstrap components
import API from "../components/server/api";

export default class Evaluaciones extends React.Component {

  //Metodo Constructor
  constructor(props) {
    super(props);
    this.state = {
      tipos: [],
      idtipo: '',
      tipo: '',
      descripcion: '',
      editar: false,
    }
    this.ontipoChange = this.ontipoChange.bind(this);
    this.ondescripcionChange = this.ondescripcionChange.bind(this);
    this.refresh = this.refresh.bind(this);
    this.cargar = this.cargar.bind(this);
    this.clear = this.clear.bind(this);
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

  toggle() {
    this.props.toggle()
  }

  refresh(datos) {
    this.componentDidMount();
  }
  ontipoChange(tipo) {
    this.setState({ tipo: tipo });
  }

  ondescripcionChange(descripcion) {
    this.setState({ descripcion: descripcion });
  }

  clear() {
    this.setState({
      idtipo: '',
      tipo: '',
      descripcion: '',
      editar: false
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col sm="12" md="12">
              <FormEvaluaciones ontipoChange={this.ontipoChange} ondescripcionChange={this.ondescripcionChange} tipo={this.state.tipo} descripcion={this.state.descripcion} refresh={this.refresh} idtipo={this.state.idtipo} editar={this.state.editar} clear={this.clear} cargar={this.cargar} toggle={this.toggle} />
              <TablaEvaluaciones tipos={this.state.tipos} refresh={this.refresh} cargar={this.cargar} toggle={this.toggle} responsive />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

