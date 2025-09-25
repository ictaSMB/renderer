import { QRCodeSVG } from "qrcode.react";
import React, { FunctionComponent } from "react";
import qrcodeImg from "../../../static/images/logo-qrcode.jpg";

interface DocumentQrCode {
  url: string;
}

export const DocumentQrCode: FunctionComponent<DocumentQrCode> = ({ url }) => {
  const imageSettings = {
    src: qrcodeImg,
    height: 30,
    width: 30,
    excavate: true,
  };

  return <QRCodeSVG value={url} size={150} imageSettings={imageSettings} />;
};
