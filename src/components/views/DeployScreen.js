import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { Context } from "../../Context";

const DeployScreen = () => {
    const [copied, setCopied] = useState(false);
    const [, , , , ctcInfo,] = useContext(Context);
    const history = useHistory();

    const preStyle = {
        backgroundColor: "#ddd",
        boxShadow: "-10px 10px #f2f3f4 "
    }

    const handleProceed = () => { history.push("/app/insurancecompany") }
    const handleCopy = () => { setCopied(true) }

    return (
        <Container className="mt-3 text-left">
            <h2>Contract Details: </h2>
            <pre className="mt-4 p-4" style={preStyle}>
                {ctcInfo}
            </pre>
            <CopyToClipboard onCopy={handleCopy} text={ctcInfo}>
                <Button variant="primary">
                    {copied ? "Copied" : "Copy to clipboard"}
                </Button>
            </CopyToClipboard>
            <Button
                className="ml-3"
                variant="secondary"
                onClick={handleProceed}>
                Proceed to Application
            </Button>
        </Container>
    );
}

export default DeployScreen;