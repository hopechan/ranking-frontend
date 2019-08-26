import React from "react";
import NotificationAlert from "react-notification-alert";


export default class Alertas extends React.Component {

    //Metodo constructor
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }
    notificationAlert = React.createRef();
    notify(place, color,message) {
        var options = {};
        options = {
            place: place,
            message:message,
            type: color,
            icon: "nc-icon nc-bell-55",
            autoDismiss: 7
        };
        this.notificationAlert.current.notificationAlert(options);
    }
    render() {
        return (
            <div>
            <NotificationAlert ref={this.notificationAlert} />
            </div>
        );
    }
}