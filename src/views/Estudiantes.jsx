import React from "react";
import TablaEstudiantes from '../components/Tablas/TablaEstudiantes'
import FormEstudiantes from '../components/Forms/FormEstudiantes'
import { Row, Col, Modal, ModalHeader, ModalBody, Button } from "reactstrap";// reactstrap components
import API from "../components/server/api";
import NotificationAlert from 'react-notification-alert';
import paginate from 'paginate-array';

export default class Estudiantes extends React.Component {

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
      editar: false,
      modal: false,
      visible: true,
      size: 5,
      page: 1,
      currPage: null,
      totalpag: null
    }
    this.onnombreChange = this.onnombreChange.bind(this);
    this.onapellidosChange = this.onapellidosChange.bind(this);
    this.onfecha_nacimientoChange = this.onfecha_nacimientoChange.bind(this);
    this.ontelefonoChange = this.ontelefonoChange.bind(this);
    this.onemailChange = this.onemailChange.bind(this);
    this.ondireccionChange = this.ondireccionChange.bind(this);
    this.onanioChange = this.onanioChange.bind(this);
    this.onseccionChange = this.onseccionChange.bind(this);
    this.oncentro_escolarChange = this.oncentro_escolarChange.bind(this);
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
    this.toggle();
    this.setState({
      idestudiante: user.idestudiante,
      nombre: user.nombre,
      apellidos: user.apellidos,
      fecha_nacimiento: user.fecha_nacimiento,
      telefono: user.telefono,
      email: user.email,
      direccion: user.direccion,
      anio: user.anio,
      seccion: user.seccion,
      centro_escolar: user.centro_escolar,
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
    API.get(`estudiante`)
      .then(res => {
        const estudiantes = res.data;
        const { page, size } = this.state;
        const currPage = paginate(estudiantes, page, size);
        this.setState({ ...this.state, estudiantes, currPage});
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
    if (this.state.modal === false) {
      this.clear()
    }
  }

  //para recargar los datos
  refresh(datos) {
    this.componentDidMount();
  }

  onnombreChange(nombre) {
    this.setState({ nombre: nombre }, () => {
    });
  };

  //cuando haya cambios en descripcion
  onapellidosChange(apellidos) {
    this.setState({ apellidos: apellidos });
  }

  onfecha_nacimientoChange(fecha_nacimiento) {
    this.setState({ fecha_nacimiento: fecha_nacimiento }, () => {
    });
  };

  ontelefonoChange(telefono) {
    this.setState({ telefono: telefono }, () => {
    });
  };

  onemailChange(email) {
    this.setState({ email: email }, () => {
    });
  };

  ondireccionChange(direccion) {
    this.setState({ direccion: direccion }, () => {
    });
  };

  onanioChange(anio) {
    this.setState({ anio: anio }, () => {
    });
  };

  onseccionChange(seccion) {
    this.setState({ seccion: seccion }, () => {
    });
  };

  oncentro_escolarChange(centro_escolar) {
    this.setState({ centro_escolar: centro_escolar }, () => {
    });
  };


  anterior() {
    const { page, size, estudiantes } = this.state;
    if (page > 1) {
      const newPage = page - 1;
      const newCurrPage = paginate(estudiantes, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  }

  siguiente() {
    const { currPage, page, size, estudiantes } = this.state;
    if (page < currPage.totalPages) {
      const newPage = page + 1;
      const newCurrPage = paginate(estudiantes, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  }

  primerapag() {
    const { size, estudiantes } = this.state;
    const newPage = 1;
    const newCurrPage = paginate(estudiantes, newPage, size);
    this.setState({ page: newPage, currPage: newCurrPage });
  }

  ultimapag() {
    const { size, estudiantes,currPage } = this.state;
    const newPage = currPage.totalPages;
    const newCurrPage = paginate(estudiantes, newPage, size);
    this.setState({ page: newPage, currPage: newCurrPage });
  }

  numero(numero) {
    const { size, estudiantes } = this.state;
    const newPage = numero;
    const newCurrPage = paginate(estudiantes, newPage, size);
    this.setState({ page: newPage, currPage: newCurrPage });
  }

  //metodo para limpiar los campos y el editar
  clear() {
    this.setState({
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
      editar: false
    });
  }

  //metodo para renderizar la vista
  render() {
    return (
      <div className="content">
        <Row>
          <Col sm="12" md="12" lg="12">
            <NotificationAlert ref="notify" />
            <Button className="text-center" color="success" onClick={this.toggle}>{this.props.buttonLabel} Agregar un Estudiante de Evaluación</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader align="center" toggle={this.toggle} className="text-center">{!this.state.editar ? "Agregar Nuevo Estudiante" : "Editar Estudiante"}</ModalHeader>
              <ModalBody >
                <FormEstudiantes onnombreChange={this.onnombreChange}  nombre={this.state.nombre} onapellidosChange={this.onapellidosChange}  apellidos={this.state.apellidos} onfecha_nacimientoChange={this.onfecha_nacimientoChange}  fecha_nacimiento={this.state.fecha_nacimiento} ontelefonoChange={this.ontelefonoChange}  telefono={this.state.telefono} onemailChange={this.onemailChange}  email={this.state.email} ondireccionChange={this.ondireccionChange}  direccion={this.state.direccion} onanioChange={this.onanioChange}  anio={this.state.anio} onseccionChange={this.onseccionChange}  seccion={this.state.seccion} oncentro_escolarChange={this.oncentro_escolarChange}  centro_escolar={this.state.centro_escolar} refresh={this.refresh} idtipo={this.state.idtipo} editar={this.state.editar} clear={this.clear} cargar={this.cargar} toggle={this.toggle} idestudiante={this.state.idestudiante} notify={this.notify} />
              </ModalBody>
            </Modal>
              <TablaEstudiantes estudiantes={this.state.estudiantes} page={this.state.page} currPage={this.state.currPage} numero={this.numero} totalpag={this.state.totalpag} refresh={this.refresh} cargar={this.cargar} notify={this.notify} siguiente={this.siguiente} anterior={this.anterior} primerapag={this.primerapag} ultimapag={this.ultimapag} responsive />
          </Col>
        </Row>
      </div>
    );
  }
}
