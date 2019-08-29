import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class ModalNotas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            modal : !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>CCGK</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Materias</ModalHeader>
                    <ModalBody>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}