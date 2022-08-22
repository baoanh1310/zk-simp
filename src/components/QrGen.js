import React from 'react';
import QRCode from 'react-native-qrcode-svg';

const QrGen = ({ hashValue }) => {
    return (
        <QRCode value={hashValue} />
    );
}

export default QrGen;