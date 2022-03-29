import React, { useEffect, useState } from "react";
import axios from "axios";
import QRCode from "./qrcode";
import "../../sass/dashboard.scss";

const QRCodeListView = ({ qrCodes, loading }) => {
    return (
        <div className="flex qr-code-list">
            {!loading ? (
                qrCodes.map((qrcode) => (
                    <div key={qrcode.id}>
                        <QRCode qrcode={qrcode} />
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default QRCodeListView;
