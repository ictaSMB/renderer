import styled from "@emotion/styled";
import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { DealersCertificateDocument, DealersCertificateDocumentSchema } from "./types";
import { getDocumentData } from "../../utils";
import "./font.css";
import certificateBg from "../../../static/images/dealerscertificateBg.jpg";
import invalidcertificateBg from "../../../static/images/dealerscertificate-invalidBg.jpg";
import notyeteffectivecertificateBg from "../../../static/images/dealerscertificate-notyeteffectiveBg.jpg";
import logo from "../../../static/images/icta-logo.jpg";

const Page = styled("div")`
  max-width: 297mm;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  :root {
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  b,
  strong {
    font-weight: bolder;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .col {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }

  .mt-2,
  .my-2 {
    margin-top: 0.5rem !important;
  }

  .mr-4,
  .mx-4 {
    margin-right: 1.5rem !important;
  }

  .text-justify {
    text-align: justify !important;
  }

  .text-right {
    text-align: right !important;
  }

  .text-center {
    text-align: center !important;
  }

  .logo {
    margin: 3%;
    width: 140px;
  }

  .title {
    font-family: "Centaur MT Std";
    font-size: 36pt;
    margin-bottom: 3%;
  }

  .text-sm {
    margin: 2%;
    font-size: 11pt;
  }

  .text-md {
    font-size: 14pt;
    margin-bottom: 3%;
  }

  .text-lg {
    font-size: 16pt;
  }

  .spacer {
    margin: 20px 20px 0 20px;
  }

  .footer {
    margin: 5px 20px 5px 20px;
    font-size: 10pt;
  }

  @media print {
    @page {
      size: A4 landscape;
    }
  }
`;

export const DealersCertificateTemplate: FunctionComponent<TemplateProps<DealersCertificateDocumentSchema>> = ({
  document,
}) => {
  const { certificateno, recipientname, licenceno, issueddate, validuntil, links } = getDocumentData(
    document
  ) as DealersCertificateDocument;
  const qrCodeUrl = links?.self.href;

  const issueddatearray = issueddate.split("/");
  const convertedissueddate = new Date(issueddatearray[1] + "/" + issueddatearray[0] + "/" + issueddatearray[2]);
  const date = convertedissueddate.getDate();
  const month = convertedissueddate.toLocaleString("en-US", { month: "long" });
  const year = convertedissueddate.toLocaleString("en-US", { year: "numeric" });
  const validuntildatearray = validuntil.split("/");
  const convertedvaliduntildate = new Date(
    validuntildatearray[1] + "/" + validuntildatearray[0] + "/" + validuntildatearray[2]
  );
  const validdate = convertedvaliduntildate.getDate();
  const validmonth = convertedvaliduntildate.toLocaleString("en-US", { month: "long" });
  const validyear = convertedvaliduntildate.toLocaleString("en-US", { year: "numeric" });
  const expirydate = new Date(convertedvaliduntildate.setDate(convertedvaliduntildate.getDate() + 1));
  const invaliddealers = ["C/E888/2023", "C/E531/2023", "C/E651/2024"];
  const isInArray = invaliddealers.includes(certificateno);

  function getOrdinal(date: number): string {
    let ord = "th";

    if (date % 10 == 1 && date != 11) {
      ord = "st";
    } else if (date % 10 == 2 && date != 12) {
      ord = "nd";
    } else if (date % 10 == 3 && date != 13) {
      ord = "rd";
    }

    return ord;
  }

  function status(expirydate: Date, convertedissueddate: Date): JSX.Element {
    const datenow = new Date();
    if (datenow > expirydate) {
      return (
        <img
          style={{ opacity: 1, position: "absolute", width: "96.9%", height: "96.1%" }}
          src={invalidcertificateBg}
          alt="Certificate Background"
        />
      );
    } else if (isInArray === true) {
      return (
        <img
          style={{ opacity: 1, position: "absolute", width: "96.9%", height: "96.1%" }}
          src={invalidcertificateBg}
          alt="Certificate Background"
        />
      );
    } else if (datenow < convertedissueddate) {
      return (
        <img
          style={{ opacity: 1, position: "absolute", width: "96.9%", height: "96.1%" }}
          src={notyeteffectivecertificateBg}
          alt="Certificate Background"
        />
      );
    } else {
      return (
        <img
          style={{ opacity: 1, position: "absolute", width: "96.9%", height: "96.1%" }}
          src={certificateBg}
          alt="Certificate Background"
        />
      );
    }
  }

  return (
    <Page>
      <div style={{ margin: "0%", border: "2px solid #000000" }}>
        <div style={{ margin: "0.17%", border: "5px solid #000000" }}>
          <div style={{ margin: "0.2%", border: "2px solid #000000" }}>
            {status(expirydate, convertedissueddate)}
            <section>
              <div className="row">
                <div className="col">
                  <img className="img-fluid logo" src={logo} alt="icta logo" />
                </div>
                <div className="col">
                  <div className="text-center">
                    <div className="title">CERTIFICATE</div>
                    <div className="text-md">
                      <b>Number: {certificateno}</b>
                    </div>
                    <div>
                      <i>Issued to</i>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="text-sm text-right">Certificate Number: {certificateno}</div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="text-center text-lg">
                    <b>
                      {recipientname} ({licenceno})
                    </b>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="spacer text-lg text-justify">
                    This is to certify that the above-mentioned company is a duly licensed dealer under section 24 of
                    the Information and Communication Technologies Act 2001 (as amended).
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="spacer text-lg text-justify">
                    The Licensee is authorised to sell, expose or offer for sale or hire radiocommunication or
                    telecommunication apparatus or devices that are authorised by the Authority.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="spacer text-lg text-justify">
                    Issued by the Information and Communication Technologies Authority on the{" "}
                    <b>
                      <i>
                        {date}
                        <sup>{getOrdinal(date)}</sup>
                      </i>
                    </b>{" "}
                    of{" "}
                    <b>
                      <i>{month}</i>
                    </b>{" "}
                    in the year{" "}
                    <b>
                      <i>{year}</i>
                    </b>
                    .
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="spacer text-lg">
                    Certificate valid until:{" "}
                    <b>
                      <i>
                        {validdate}
                        <sup>{getOrdinal(validdate)}</sup> {validmonth} {validyear}
                      </i>
                    </b>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <div className="text-center">
                    <b>This is a computer-generated document. No signature is required.</b>
                  </div>
                  <div className="mr-4 text-right">{qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}</div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <hr className="spacer" />
                  <div className="footer">
                    The Licensee shall at all times strictly comply with the terms and conditions of its Dealer&apos;s
                    Licence and any written direction given to him by the Authority in relation to the exercise of his
                    rights and obligations under a licence.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Page>
  );
};
