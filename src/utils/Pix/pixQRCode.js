import React from 'react';
import QRCode from 'react-google-qrcode';

const PixQRCode = ({
  text,
  className
}) => {

  return (
    <div >
      <QRCode
        data={text}
        size={100}
        framed
        className={className}
      />
    </div>
  );
}

export default PixQRCode;