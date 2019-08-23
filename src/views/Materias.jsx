import React from "react";
import TablaMaterias from '../components/Tablas/TablaMaterias'
import FormMaterias from '../components/Forms/FormMaterias'
import { Row, Col, Modal, ModalHeader, ModalBody, Button } from "reactstrap";// reactstrap components
import API from "../components/server/api";

export default class Materias extends React.Component {

  //Metodo Constructor
  constructor(props) {
    super(props);
    this.state = {
      materias: [],//arreglo para las materias
      tipos: [],//arreglo para los tipos
      idmateria: '',
      idtipo: '',
      materia: '',
      editar: false,
      modal: false
    }
    this.onidmateriaChange = this.onidmateriaChange.bind(this);
    this.onidtipoChange = this.onidtipoChange.bind(this);
    this.onmateriaChange = this.onmateriaChange.bind(this);
    this.refresh = this.refresh.bind(this);
    this.cargar = this.cargar.bind(this);
    this.clear = this.clear.bind(this);
    this.toggle = this.toggle.bind(this);
    this.tipo = this.tipo.bind(this);
  }

  //para cargar la informacion en el modal de editar
  cargar(user) {
    this.toggle();
    this.setState({
      idmateria: user.idmateria,
      materia: user.materia,
      idtipo: user.idtipo,
      editar: true
    });

  }

  //Metodo para obtener los datos de la api
  componentDidMount() {
    API.get('Materia')
      .then(res => {
        const materias = res.data;
        this.setState({ materias })
      })
  }

  //Metodo para obtener los datos de la api 
  tipo() {
    API.get('tipo')
      .then(res => {
        const tipos = res.data;
        this.setState({ tipos })
      })
  }

  //metodo para abrir el modal
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    this.tipo()
  }

  //para recargar los datos
  refresh(datos) {
    this.componentDidMount();
  }

  //cuando haya cambios en materia
  onmateriaChange(materia) {
    this.setState({ materia: materia });
  }

  //cuando haya cambios en tipo
  onidtipoChange(idtipo) {
    this.setState({ idtipo: idtipo });
  }

  //cuando haya cambios en idmateria
  onidmateriaChange(idmateria) {
    this.setState({ idmateria: idmateria });
  }

  //metodo para limpiar los campos y el editar
  clear() {
    this.setState({
      idmateria: '',
      materia: '',
      idtipo: '',
      editar: false
    });
  }

  //metodo para renderizar la vista
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col sm="12" md="12">
              <Button className="text-center" color="success" onClick={this.toggle}>{this.props.buttonLabel} Agregar un materia de Evaluación</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader align="center" toggle={this.toggle} className="text-center">{!this.props.editar ? "Agregar Nuevo materia" : "Editar materia"}</ModalHeader>
                <ModalBody >
                  <FormMaterias tipos={this.state.tipos} onmateriaChange={this.onmateriaChange} onidmateriaChange={this.onidmateriaChange} onidtipoChange={this.onidtipoChange} materia={this.state.materia} idtipo={this.state.idtipo} refresh={this.refresh} idmateria={this.state.idmateria} editar={this.state.editar} clear={this.clear} cargar={this.cargar} toggle={this.toggle} />
                </ModalBody>
              </Modal>
              <div className="table-resposive">
                <TablaMaterias materias={this.state.materias} refresh={this.refresh} cargar={this.cargar} responsive />
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

