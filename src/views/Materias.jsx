import React from "react";
import TablaMaterias from '../components/Tablas/TablaMaterias'
import FormMaterias from '../components/Forms/FormMaterias'
import { Row, Col, Modal, ModalHeader, ModalBody, Button } from "reactstrap";// reactstrap components
import API from "../components/server/api";
import NotificationAlert from 'react-notification-alert';
import paginate from 'paginate-array';
import '../assets/css/Materia.css';

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
      tipo: '',
      editar: false,
      modal: false,
      visible: true,
      size: 4,
      page: 1,
      currPage: null,
      totalpag: null
    }
    this.onidmateriaChange = this.onidmateriaChange.bind(this);
    this.onidtipoChange = this.onidtipoChange.bind(this);
    this.onmateriaChange = this.onmateriaChange.bind(this);
    this.refresh = this.refresh.bind(this);
    this.cargar = this.cargar.bind(this);
    this.clear = this.clear.bind(this);
    this.toggle = this.toggle.bind(this);
    this.tipo = this.tipo.bind(this);
    this.notify = this.notify.bind(this);
    this.siguiente = this.siguiente.bind(this);
    this.anterior = this.anterior.bind(this);
    this.primerapag = this.primerapag.bind(this);
    this.ultimapag = this.ultimapag.bind(this);
    this.numero = this.numero.bind(this);
  }

  //Metodos para las Alertas
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
    API.get(`materia`)
      .then(res => {
        const materias = res.data;
        const { page, size } = this.state;
        const currPage = paginate(materias, page, size);
        this.setState({ ...this.state, materias, currPage});
        this.setState({
          totalpag: this.state.currPage.totalPages
        })
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
    if (this.state.modal === false) {
      this.clear()
    }
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

  anterior() {
    const { page, size, materias } = this.state;
    if (page > 1) {
      const newPage = page - 1;
      const newCurrPage = paginate(materias, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  }

  siguiente() {
    const { currPage, page, size, materias } = this.state;
    if (page < currPage.totalPages) {
      const newPage = page + 1;
      const newCurrPage = paginate(materias, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  }

  primerapag() {
    const { size, materias } = this.state;
    const newPage = 1;
    const newCurrPage = paginate(materias, newPage, size);
    this.setState({ page: newPage, currPage: newCurrPage });
  }

  ultimapag() {
    const { size, materias,currPage } = this.state;
    const newPage = currPage.totalPages;
    const newCurrPage = paginate(materias, newPage, size);
    this.setState({ page: newPage, currPage: newCurrPage });
  }

  numero(numero) {
    const { size, materias } = this.state;
    const newPage = numero;
    const newCurrPage = paginate(materias, newPage, size);
    this.setState({ page: newPage, currPage: newCurrPage });
  }

  //metodo para renderizar la vista
  render() {
    return (
      <div className="content">
        <Row>
          <Col sm="12" md="12">
          <NotificationAlert ref="notify" />
            <Button className="text-center" color="success" onClick={this.toggle}>{this.props.buttonLabel} Agregar una Materia</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader align="center" toggle={this.toggle} className="text-center">{!this.state.editar ? "Agregar Nueva materia" : "Editar materia"}</ModalHeader>
              <ModalBody >
                <FormMaterias tipos={this.state.tipos} onmateriaChange={this.onmateriaChange} onidmateriaChange={this.onidmateriaChange} onidtipoChange={this.onidtipoChange} materia={this.state.materia} idtipo={this.state.idtipo} tipo={this.state.tipo} refresh={this.refresh} idmateria={this.state.idmateria} editar={this.state.editar} clear={this.clear} cargar={this.cargar} toggle={this.toggle} notify={this.notify} />
              </ModalBody>
            </Modal>
            <div className="table-resposive">
              <TablaMaterias materias={this.state.materias} page={this.state.page} currPage={this.state.currPage} numero={this.numero} totalpag={this.state.totalpag} refresh={this.refresh} cargar={this.cargar} notify={this.notify} siguiente={this.siguiente} anterior={this.anterior} primerapag={this.primerapag} ultimapag={this.ultimapag} responsive />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

