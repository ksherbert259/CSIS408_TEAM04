//Render a QR code

import React from "react";
import { Card } from "react-bootstrap";

const QRCode = ({ qrcode }) => {
    return (
        <div className="qrcode-card">
            <Card style={{ width: "10rem" }}>
                <Card.Img variant="top" src="https://via.placeholder.com/200" />
                <Card.Body>
                    <Card.Title>{qrcode.url}</Card.Title>
                    <Card.Text>{qrcode.details}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default QRCode;
