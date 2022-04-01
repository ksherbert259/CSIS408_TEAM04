//Render a QR code

import React from "react";
import { Card } from "react-bootstrap";

const QRCode = ({ qrcode }) => {
    return (
        <div className="qrcode-card">
            <a href={qrcode.url}>
                <Card style={{ width: "14rem" }}>
                    <Card.Img variant="top" src={qrcode.image} />

                    <Card.Body>
                        <Card.Title>{qrcode.url}</Card.Title>
                        <Card.Text>{qrcode.details}</Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </div>
    );
};

export default QRCode;
