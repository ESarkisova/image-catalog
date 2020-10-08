import React from 'react';
import {connect} from "react-redux";
import {hideMsg} from "../../Redux/alertReducer";
import Alert from '@material-ui/lab/Alert';

const AlertComponent = ({message, typeAlert, hideMsg, isVisible}) => {
    if(!isVisible) return null;
    return (
        <Alert
            onClose={hideMsg}
            severity={typeAlert}>{message}</Alert>
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