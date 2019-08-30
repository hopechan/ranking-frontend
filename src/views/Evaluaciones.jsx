import React from "react";
import TablaEvaluaciones from '../components/Tablas/TablaEvaluaciones'
import FormEvaluaciones from '../components/Forms/FormEvaluaciones'
import { Row, Col, Modal, ModalHeader, ModalBody, Button } from "reactstrap";// reactstrap components
import API from "../components/server/api";
import NotificationAlert from 'react-notification-alert';

export default class Evaluaciones extends React.Component {

  //Metodo Constructor
  constructor(props) {
    super(props);
    this.state = {
      tipos: [],//arreglo para los tipos
      idtipo: '',
      tipo: '',
      descripcion: '',
      editar: false,
      modal: false,
      visible: true,
      tipoerror: '',
    }
    this.ontipoChange = this.ontipoChange.bind(this);
    this.ondescripcionChange = this.ondescripcionChange.bind(this);
    this.refresh = this.refresh.bind(this);
    this.cargar = this.cargar.bind(this);
    this.clear = this.clear.bind(this);
    this.toggle = this.toggle.bind(this);
    this.notify = this.notify.bind(this);
  }

  //para cargar la informacion en el modal de editar
  cargar(user) {
    this.toggle();
    this.setState({
      idtipo: user.idtipo,
      tipo: user.tipo,
      descripcion: user.descripcion,
      editar: true
    });

  }

    //Metodo para las Alertas
    notify(place, color, message, icon) {
      var options = {};
      options = {
        place: place,
        message: message,
        type: color,
        icon: icon,
        autoDismiss: 5
      };
      this.refs.notify.notificationAlert(options);
    }

  //Metodo para obtener los datos de la api
  componentDidMount() {
    API.get(`Tipo`)
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
    if(this.state.modal===false){
      this.clear()
    }
  }

  //para recargar los datos
  refresh(datos) {
    this.componentDidMount();
  }
  //cuando haya cambios en tipo
  // ontipoChange(tipo) {
  //   this.setState({ tipo: tipo });
  // }

  ontipoChange(tipo) {
    this.setState({ tipo: tipo }, () => {
      this.validartipo();
    });
  };

  validartipo = () => {
    const { tipo } = this.state;
    this.setState({
      tipoerror:
        tipo.length > 3 ? null : `<div className='invalid-feedback'>El tipo de evaluación debe tener más de 3 caracteres.</div>`
    });
  }

  //cuando haya cambios en descripcion
  ondescripcionChange(descripcion) {
    this.setState({ descripcion: descripcion });
  }

  //metodo para limpiar los campos y el editar
  clear() {
    this.setState({
      idtipo: '',
      tipo: '',
      descripcion: '',
      editar: false,
    });
  }


  //metodo para renderizar la vista
  render() {
    return (
      <div className="content">
        <Row>
          <Col sm="12" md="12" lg="12">
          <NotificationAlert ref="notify" />
            <Button className="text-center" color="success" onClick={this.toggle}>{this.props.buttonLabel} Agregar un Tipo de Evaluación</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader align="center" toggle={this.toggle} className="text-center">{!this.state.editar ? "Agregar Nuevo Tipo" : "Editar Tipo"}</ModalHeader>
              <ModalBody >
                <FormEvaluaciones validartipo={this.validartipo} ontipoChange={this.ontipoChange} ondescripcionChange={this.ondescripcionChange} tipo={this.state.tipo} descripcion={this.state.descripcion} refresh={this.refresh} idtipo={this.state.idtipo} editar={this.state.editar} clear={this.clear} cargar={this.cargar} toggle={this.toggle} notify={this.notify} />
              </ModalBody>
            </Modal>
            <div className="table-resposive">
              <TablaEvaluaciones tipos={this.state.tipos} refresh={this.refresh} cargar={this.cargar} notify={this.notify} responsive />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

