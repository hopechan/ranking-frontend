import React from "react";
import TablaEstudiante from '../components/Tablas/TablaEstudiante'

// reactstrap components
import { Row, Col, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
//import API from "../components/server/api";

class Estudiantes extends React.Component {
  
  constructor(props) {
    super(props); 
    this.state = { 
      estudiantes: [],
      idestudiante: '',
      nombre: '',
      apellidos: '',
      fecha_nacimiento: '',
      telefono: '',
      email: '',
      direccion: '',
      anio: '',
      seccion: '',
      centro_escolar: '',
      modal: false,
      visible: true
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col sm="12" md="12">
              <Button className="text-center" color="success"  onClick={this.toggle}>{this.props.buttonLael} Agrega un Estudiante</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader align="center" toggle={this.toggle} className="text-center">{!this.props.editar ? "Agrega un Estudiante" : "Editar Estudiante"}
                </ModalHeader>
                <ModalBody>

                </ModalBody>
              </Modal>
              <TablaEstudiante responsive/>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Estudiantes;
