import React from "react";
import Barra from "../components/Grafico/Barra";
import { Col, Row } from "reactstrap";
import LandingNavbar from "../components/Navbars/LandingNavbar"
//import { Route, Switch } from "react-router-dom";
//import routes from "routes.js";

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.mainPanel = React.createRef();
  }
  render() {
    return (
      <div className="wrapper">
        <LandingNavbar/>
        <Row className="justify-content-center">
          <Col sm="12" md="10"><Barra/></Col>
        </Row>
      </div>
    );
  }
}

export default Principal;
