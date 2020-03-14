import React from 'react';
import { Alert } from '@material-ui/lab';
import {connect} from "react-redux";
import {hideMsg} from "../../Redux/alertReducer";

const AlertComponent = ({message, alertType, hideMsg, isVisible}) => {
    if(!isVisible) return null;
    return (
        <Alert
            onClose={hideMsg}
            severity={alertType}>{message}</Alert>
    );
};

const mapStateToProps = (state) => {
    return {
        message: state.alert.message,
        typeAlert: state.alert.typeAlert,
        isVisible: state.alert.isVisible
    }
};

export default connect(mapStateToProps, {hideMsg})(AlertComponent);