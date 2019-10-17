import React from "react";
import { Button,Container,Row,Col} from "reactstrap";
import ExamplesNavbar from "components/landingPage/LandingNavbar";
import LandingHeader from "components/landingPage/LandingHeader";
import LandingFooter from "components/landingPage/LandingFooter";
import Barra from "components/Grafico/Barra"

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Top 10 Ranking Oportunidades</h2>
                <h5 className="description">
                  <Barra/>
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Complemento Académico</h4>
                    <p className="description">
                    Refuerzo complementario al instituto público con el objetivo de lograr la nivelación académica 
                    y un mejor desarrollo de habilidades y destrezas de vida durante el bachillerato.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      Ver mas
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Estudios Superiores</h4>
                    <p>
                    Financiamiento de la educación superior y acompañamiento personalizado para 
                    garantizar la culminación exitosa de los estudios técnicos o universitarios.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      Ver mas
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Intermediación Laboral</h4>
                    <p>
                    Apoyo para facilitar el acceso al mercado laboral, 
                    o al emprendimiento de proyectos propios, constituido por un programa de pasantías, 
                    prácticas y “coaching” para la empleabilidad.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      Ver mas
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
        </div>
      </div>
      <LandingFooter />
    </>
  );
}

export default LandingPage;
