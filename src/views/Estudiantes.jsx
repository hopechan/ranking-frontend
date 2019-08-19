import React from "react";
import TablaEstudiantes from '../components/TablaEstudiante/TablaEstudiante'
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import TablaEstudiante from "components/TablaEstudiante/TablaEstudiante";

class Estudiantes extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <TablaEstudiante></TablaEstudiante>
        </div>
      </>
    );
  }
}

export default Estudiantes;
