import React, { useState, useEffect } from "react";
import "../../sass/dashboard.scss";
import CreateQRCode from "../components/CreateQRCode";
import QRCodeListView from "../components/QRCodeListView";

const Dashboard = () => {
    const [qrCodes, setQrCodes] = useState([]);

    //Create a function that makes a request to the server to get all QR codes.
    //The request should have the following parameters:

    //Use axios to make a request to the server to get all QR codes.
    //The response should be a list of QR codes.
    useEffect(() => {
        getQRCodes();
    }, []);

    const getQRCodes = async () => {
        try {
            const response = await axios.get("/api/qrCodes");
            setQrCodes(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="dashboard-page">
            <h1>QR Code Generator</h1>
            <CreateQRCode setQrCodes={setQrCodes} />
            <QRCodeListView qrCodes={qrCodes} />
        </div>
    );
};

export default Dashboard;
