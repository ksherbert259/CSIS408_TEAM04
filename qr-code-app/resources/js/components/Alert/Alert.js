import React, { useEffect } from "react";
import { AlertTypes } from "./AlertTypes";
import { Alert } from "react-bootstrap";

const AlertView = ({ title, message, type, setAlert }) => {
    return (
        <Alert
            variant={type && type}
            onClose={() => setAlert({ ...alert, showing: false })}
            dismissible
            transition={true}
        >
            <Alert.Heading>{title && title}</Alert.Heading>
            <p>{message && message}</p>
        </Alert>
    );
};

export default AlertView;
