//Create a react component called CreateQRCode that will render a form that will allow the user to create a QR code.
//The form should have a text input for the user to enter the text to be encoded.
//The form should have a submit button that will encode the text and display the QR code.
//The QR code should be displayed in a div with the class "qr-code".
//The QR code should be a square with a size of 200px.

import React, { useState } from "react";
import axios from "axios";
// import "../../sass/dashboard.scss";
import QRCode from "./qrcode";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";

const CreateQRCode = ({ setQrCodes }) => {
    //Create a state variable called text that will hold the text that will be encoded.
    //The text should be set to an empty string.
    const [url, setUrl] = useState("");
    const [details, setDetails] = useState("");

    //Create a function that makes a request to the server to create a QR code.
    //The request should have the following parameters:
    //url: the url to be encoded in the QR code
    const submitCreateQRCodeRequest = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        //Use axios to make a request to the server to create a QR code.
        try {
            const newQRCode = await axios.post("/api/qrCode/store", {
                qrCode: {
                    url,
                },
            });
            console.log(newQRCode);

            setQrCodes((qrCodes) => [...qrCodes, newQRCode.data]);
        } catch (error) {
            console.log(error);
        }

        console.log(url);
    };

    return (
        <div className="dashboard-page">
            <Form onSubmit={submitCreateQRCodeRequest}>
                <FormGroup>
                    <FormLabel>Input Url</FormLabel>
                    <FormControl
                        type="text"
                        value={url}
                        placeholder="Enter Url"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Details</FormLabel>
                    <FormControl
                        type="text"
                        value={details}
                        placeholder="Enter details"
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CreateQRCode;
