import React, { useState, useEffect } from "react";
import AlertView from "../components/Alert/Alert";
import "../../sass/dashboard.scss";
import CreateQRCode from "../components/CreateQRCode";
import QRCodeListView from "../components/QRCodeListView";
import { AlertTypes } from "../components/Alert/AlertTypes";

const Dashboard = () => {
    const [qrCodes, setQrCodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        showing: false,
        title: "",
        type: AlertTypes.DANGER,
        message: "",
    });

    //Create a function that makes a request to the server to get all QR codes.
    //The request should have the following parameters:

    //Use axios to make a request to the server to get all QR codes.
    //The response should be a list of QR codes.
    useEffect(() => {
        getQRCodes();
    }, []);

    const getQRCodes = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/api/qrCodes");
            setLoading(false);
            setQrCodes(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="dashboard-page">
            {alert.showing && (
                <AlertView
                    title={alert.title}
                    message={alert.message}
                    type={alert.type}
                    setAlert={setAlert}
                />
            )}
            <h1>QR Code Generator</h1>
            <CreateQRCode
                setQrCodes={setQrCodes}
                setLoading={setLoading}
                setAlert={setAlert}
            />
            <QRCodeListView qrCodes={qrCodes} loading={loading} />
        </div>
    );
};

export default Dashboard;
