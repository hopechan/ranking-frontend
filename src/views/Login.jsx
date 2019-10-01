import React from "react";
import { Row, Col } from "reactstrap";
import FormLogin from '../components/Forms/FormLogin'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.nada = this.nada.bind(this);
    }

    nada() {
        console.log("nada");
    }

    render() {
        return (
            <div className="content">
                <Row sm="12" md="12">
                    <Col sm="12" md="12">
                            <div>
                                <img src="" alt=""/>
                                <h2>Login</h2>
                                <FormLogin />
                            </div>
                    </Col>
                </Row>
            </div>
        )
    }
}