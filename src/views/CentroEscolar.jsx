import React from "react";
import TablaCentroEscolar from '../components/Tablas/TablaCentroEscolar'
import FormEvaluaciones from '../components/Forms/FormEvaluaciones'
import { Row, Col, Modal, ModalHeader, ModalBody, Button } from "reactstrap";// reactstrap components
import API from "../components/server/api";
import NotificationAlert from 'react-notification-alert';
import paginate from 'paginate-array';

export default class CentroEscolar extends React.Component {

  //Metodo Constructor
  constructor(props) {
    super(props);
    this.state = {
      tipos: [], //arreglo para los tipos
      idtipo: '',
      tipo: '',
      descripcion: '',
      editar: false,
      modal: false,
      visible: true,
      tipoerror: '',
      size: 4,
      page: 1,
      currPage: null,
      totalpag: null
    }
    this.ontipoChange = this.ontipoChange.bind(this);
    this.ondescripcionChange = this.ondescripcionChange.bind(this);
    this.refresh = this.refresh.bind(this);
    this.cargar = this.cargar.bind(this);
    this.clear = this.clear.bind(this);
    this.toggle = this.toggle.bind(this);
    this.notify = this.notify.bind(this);
    this.siguiente = this.siguiente.bind(this);
    this.anterior = this.anterior.bind(this);
    this.primerapag = this.primerapag.bind(this);
    this.ultimapag = this.ultimapag.bind(this);
    this.numero = this.numero.bind(this);
  }

  //para cargar la informacion en el modal de editar
  cargar(user) {
    this.setState({
      idtipo: user.idtipo,
      tipo: user.tipo,
      descripcion: user.descripcion,
      editar: true
    });
  this.toggle();
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
    API.get(`tipo`)
      .then(res => {
        const tipos = res.data;
        const { page, size } = this.state;
        const currPage = paginate(tipos, page, size);
        this.setState({ ...this.state, tipos, currPage});
        this.setState({
          totalpag: this.state.currPage.totalPages
        })
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

  anterior() {
    const { page, size, tipos } = this.state;
    if (page > 1) {
      const newPage = page - 1;
      const newCurrPage = paginate(tipos, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  }

  siguiente() {
    const { currPage, page, size, tipos } = this.state;
    if (page < currPage.totalPages) {
      const newPage = page + 1;
      const newCurrPage = paginate(tipos, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  }

  primerapag() {
    const { size, tipos } = this.state;
    const newPage = 1;
    const newCurrPage = paginate(tipos, newPage, size);
    this.setState({ page: newPage, currPage: newCurrPage });
  }

  ultimapag() {
    const { size, tipos,currPage } = this.state;
    const newPage = currPage.totalPages;
    const newCurrPage = paginate(tipos, newPage, size);
    this.setState({ page: newPage, currPage: newCurrPage });
  }

  numero(numero) {
    const { size, tipos } = this.state;
    const newPage = numero;
    const newCurrPage = paginate(tipos, newPage, size);
    this.setState({ page: newPage, currPage: newCurrPage });
  }


  //metodo para renderizar la vista
  render() {
    return (
      <div className="content">
        <Row>
          <Col sm="12" md="12" lg="12">
          <NotificationAlert ref="notify" />
            <Button className="text-center" color="danger" onClick={this.toggle}>{this.props.buttonLabel} Agregar un Centro Escolar</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader align="center" toggle={this.toggle} className="text-center">{!this.state.editar ? "Agregar Nuevo Tipo" : "Editar Tipo"}</ModalHeader>
              <ModalBody >
                <FormEvaluaciones validartipo={this.validartipo} ontipoChange={this.ontipoChange} ondescripcionChange={this.ondescripcionChange} tipo={this.state.tipo} descripcion={this.state.descripcion} refresh={this.refresh} idtipo={this.state.idtipo} editar={this.state.editar} clear={this.clear} cargar={this.cargar} toggle={this.toggle} notify={this.notify} />
              </ModalBody>
            </Modal>
            <div className="table-resposive">
              <TablaCentroEscolar tipos={this.state.tipos} page={this.state.page} currPage={this.state.currPage} numero={this.numero} totalpag={this.state.totalpag} refresh={this.refresh} cargar={this.cargar} notify={this.notify} siguiente={this.siguiente} anterior={this.anterior} primerapag={this.primerapag} ultimapag={this.ultimapag} responsive />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

