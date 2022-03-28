import React, { useEffect, useState } from "react";
import axios from "axios";
import QRCode from "./qrcode";
import "../../sass/dashboard.scss";

const QRCodeListView = ({ qrCodes }) => {
    return (
        <div className="flex qr-code-list">
            {qrCodes.map((qrcode) => (
                <div key={qrcode.id}>
                    <QRCode qrcode={qrcode} />
                </div>
            ))}
        </div>
    );
};

export default QRCodeListView;
