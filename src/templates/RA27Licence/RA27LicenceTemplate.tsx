import styled from "@emotion/styled";
import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { RA27LicenceDocument, RA27LicenceDocumentSchema } from "./types";
import { getDocumentData } from "../../utils";
import cover_page from "../../../static/images/coverpage.jpg";
import invalid_cover_page from "../../../static/images/coverpage-invalid.jpg";
import notyeteffective_cover_page from "../../../static/images/coverpage-notyeteffective.jpg";
import letter_head from "../../../static/images/letterheader.jpg";
import invalid_letter_head from "../../../static/images/letterheader-invalid.jpg";
import notyeteffective_letter_head from "../../../static/images/letterheader-notyeteffective.jpg";

const Coverpage = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 208mm;
  height: 310mm;
  overflow: hidden;
  position: relative;
`;
const Termsandconditionspage1 = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 208mm;
  height: 320mm;
  overflow: hidden;
  position: relative;
  #sublist {
    display: block;
  }
  #sublist::before {
    display: inline-block;
    content: "6A";
    counter-increment: item;
    width: 1.5em;
    margin-left: -1.5em;
  }
`;
const Termsandconditionspage2 = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 208mm;
  height: 310mm;
  overflow: hidden;
  position: relative;
`;
const Termsandconditionspage3 = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 208mm;
  height: 310mm;
  overflow: hidden;
  position: relative;
`;
const Termsandconditionspage4 = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 208mm;
  height: 297mm;
  overflow: hidden;
  position: relative;
`;
const Termsandconditionspage5 = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 208mm;
  height: 297mm;
  overflow: hidden;
  position: relative;
`;
const Termsandconditionspage6 = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 208mm;
  height: 297mm;
  overflow: hidden;
  position: relative;
`;

export const RA27LicenceTemplate: FunctionComponent<TemplateProps<RA27LicenceDocumentSchema>> = ({ document }) => {
  const {
    licenceno,
    recipientname,
    recipientaddress,
    effectivedate,
    frequencyband,
    power,
    make,
    model,
    licencefee,
    links,
  } = getDocumentData(document) as RA27LicenceDocument;
  const qrCodeUrl = links?.self.href;

  const effectivedatearray = effectivedate.split("/");
  const convertedeffectivedate = new Date(
    effectivedatearray[1] + "/" + effectivedatearray[0] + "/" + effectivedatearray[2]
  );
  const date = convertedeffectivedate.getDate();
  const month = convertedeffectivedate.toLocaleString("en-US", { month: "long" });
  const year = convertedeffectivedate.toLocaleString("en-US", { year: "numeric" });
  const validuntil = new Date(convertedeffectivedate.setFullYear(convertedeffectivedate.getFullYear() + 5));
  const expirydate = new Date(validuntil.setDate(validuntil.getDate() + 1));
  const invalidra27 = ["E/2022/8888"];
  const isInArray = invalidra27.includes(licenceno);

  function status_coverpage(expirydate: Date, convertedeffectivedate: Date, isInArray: boolean): JSX.Element {
    const datenow = new Date();
    if (datenow > expirydate) {
      return (
        <img
          style={{ opacity: 1, position: "absolute", left: 0, top: 25, width: "100%", height: "100%" }}
          src={invalid_cover_page}
          alt="Cover Page"
        />
      );
    } else if (isInArray === true) {
      return (
        <img
          style={{ opacity: 1, position: "absolute", left: 0, top: 25, width: "100%", height: "100%" }}
          src={invalid_cover_page}
          alt="Cover Page"
        />
      );
    } else if (datenow < convertedeffectivedate) {
      return (
        <img
          style={{ opacity: 1, position: "absolute", left: 0, top: 25, width: "100%", height: "100%" }}
          src={notyeteffective_cover_page}
          alt="Cover Page"
        />
      );
    } else {
      return (
        <img
          style={{ opacity: 1, position: "absolute", left: 0, top: 25, width: "100%", height: "100%" }}
          src={cover_page}
          alt="Cover Page"
        />
      );
    }
  }

  function status_letterhead(expirydate: Date, convertedeffectivedate: Date, isInArray: boolean): JSX.Element {
    const datenow = new Date();
    if (datenow > expirydate) {
      return (
        <img
          style={{ opacity: 1, position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
          src={invalid_letter_head}
          alt="Letter Head"
        />
      );
    } else if (isInArray === true) {
      return (
        <img
          style={{ opacity: 1, position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
          src={invalid_letter_head}
          alt="Letter Head"
        />
      );
    } else if (datenow < convertedeffectivedate) {
      return (
        <img
          style={{ opacity: 1, position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
          src={notyeteffective_letter_head}
          alt="Letter Head"
        />
      );
    } else {
      return (
        <img
          style={{ opacity: 1, position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
          src={letter_head}
          alt="Letter Head"
        />
      );
    }
  }

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

  return (
    <>
      <Coverpage>
        <div className="" id="cover-page">
          {status_coverpage(expirydate, convertedeffectivedate, isInArray)}
          <div
            style={{ marginTop: "28%", marginLeft: "8%", marginRight: "8%", position: "relative", lineHeight: 1.65 }}
          >
            <h4 style={{ textAlign: "center" }}>
              <strong>
                <em>
                  LICENCE ISSUED UNDER SECTION 24 OF
                  <br />
                  THE INFORMATION AND COMMUNICATION TECHNOLOGIES ACT 2001 (AS AMENDED)
                </em>
              </strong>
              <br />
              <br />
              <strong>Licence No. {licenceno}</strong>
            </h4>
            <br />
            <p style={{ textAlign: "justify" }}>
              The Information and Communication Technologies Authority, in exercise of the powers conferred upon it
              under Section 24 of the Information and Communication Technologies Act 2001 (as amended) and of all other
              powers exercisable by this Authority for that purpose, hereby grants a
            </p>
            <br />
            <div style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "1.5em" }}>LOW POWER RADIO DEVICES LICENCE - RA27 Licence</span>&nbsp;
                <span style={{ fontSize: "1.25em" }}>
                  [as per the Information and Communication Technologies (Amendment of Schedule) Regulations 2003]
                </span>
              </strong>
            </div>
            <p style={{ textAlign: "center" }}>to</p>
            <h3 style={{ textAlign: "center" }}>
              <strong>{recipientname}</strong>
            </h3>
            <br />
            <p style={{ textAlign: "justify" }}>
              of <b>{recipientaddress}</b>, to operate Low Power Device(s) subject to the Terms and conditions in the
              the Licence.
            </p>
            <br />
            <p style={{ textAlign: "center" }}>
              <strong>
                Effective Date: {date}
                <sup>{getOrdinal(date)}</sup> {month} {year}
              </strong>
              <br />
              <strong>
                Validity Period:&nbsp;
                <em>
                  <u>5 years (from Effective Date)</u>
                </em>
              </strong>
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              Issued by the Information and Communication Technologies Authority on the&nbsp;
              <b>
                {date}
                <sup>{getOrdinal(date)}</sup>
              </b>
              &nbsp; day of <b>{month}</b> in the year <b>{year}</b>.
            </p>
            <br />
            <div style={{ textAlign: "center" }}>
              <strong>This is a computer-generated document. No signature is required.</strong>
            </div>
            <br />
            <br />
            <div style={{ textAlign: "right" }}>{qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}</div>
          </div>
        </div>
      </Coverpage>
      <Termsandconditionspage1>
        <div className="" id="terms-and-conditions_page1">
          {status_letterhead(expirydate, convertedeffectivedate, isInArray)}
          <div style={{ marginTop: "6%", marginLeft: "5%", marginRight: "8%", position: "relative", lineHeight: 1.5 }}>
            <h4 style={{ fontSize: "1.25em", textAlign: "center" }}>
              <strong>INFORMATION AND COMMUNICATION TECHNOLOGIES AUTHORITY</strong>
              <br />
              <br />
              <strong>LOW POWER RADIO DEVICES – RA27</strong>
            </h4>
            <p style={{ textAlign: "center" }}>
              <strong>Terms and Conditions</strong>
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              <ol>
                <li value="1">
                  <strong>Definitions; Interpretation</strong>
                  <ol>
                    <br />
                    <li>
                      <strong>The following terms shall have the meanings set forth below:</strong>
                      <br />
                      <br />
                      <ol type="a">
                        <li>&quot;Act&quot; means the Information and Communication Technologies Act 2001;</li>
                        <br />
                        <li>&quot;Authority&quot; means the Information and Communication Technologies Authority;</li>
                        <br />
                        <li>&quot;Effective Date&quot; means xx September 2024;</li>
                        <br />
                        <li>&quot;ITU&quot; means the International Telecommunication Union;</li>
                        <br />
                        <li>
                          &quot;Licence&quot; means the Licence issued to the Licensee and includes the terms and
                          conditions and the Annex hereto;
                        </li>
                        <br />
                        <li>&quot;Licensee&quot; means the person/body/company to whom the Licence is granted;</li>
                        <br />
                        <li>
                          &quot;Low Power Devices&quot; means radio devices that offer a low risk of interference with
                          with other radio services, because their transmitted power, and hence their range, is low.
                        </li>
                        <br />
                        <li>
                          &quot;Radio Apparatus&quot; means Low Power Radio Devices for the transmission and reception
                          of information;
                        </li>
                        <br />
                        <li>&quot;Regulation&quot; means any regulation made under the Act;</li>
                        <br />
                      </ol>
                    </li>
                    <li value="2">
                      For the purpose of interpreting this Licence, the Interpretation and General Clauses Act shall
                      apply Act shall apply as if this Licence were an Act of Parliament. Headings and titles shall be
                      disregarded. Any term(s) defined or contained in this Licence shall be interpreted in a manner not
                      inconsistent inconsistent with the Act.
                    </li>
                    <br />
                    <li value="3">
                      Where this Licence provides for any power of the Authority to give any direction or make any
                      decision, it implies, unless the contrary intention appears and except for the power to revoke set
                      forth in clause 6 below, a power, exercisable in the same manner and subject to the same
                      conditions or limitations, to revoke, amend or give or make again any such direction or decision.
                    </li>
                  </ol>
                </li>
              </ol>
            </p>
            <p style={{ textAlign: "center" }}>1</p>
          </div>
        </div>
      </Termsandconditionspage1>
      <Termsandconditionspage2>
        <div className="" id="terms-and-conditions_page2">
          {status_letterhead(expirydate, convertedeffectivedate, isInArray)}
          <div style={{ marginTop: "2%", marginLeft: "5%", marginRight: "8%", position: "relative", lineHeight: 1.55 }}>
            <p style={{ textAlign: "justify" }}>
              <ol>
                <li value="2">
                  <strong>Scope</strong>
                </li>
                <br />
                <ol>
                  <li value="1">This Licence authorises the Licensee to operate low power radio devices.</li>
                  <br />
                  <li>
                    The Licensee shall make use of the Radio Apparatus and frequency assigned for its own internal
                    purpose only. The licensee shall not use the Radio Apparatus for purposes not authorised under this
                    licence.
                  </li>
                  <br />
                  <li>
                    The Licensee shall, at all times, observe the provisions of the ITU Convention to the extent they
                    are applicable.
                  </li>
                </ol>
                <br />
                <li value="3">
                  <strong>Term</strong>
                </li>
                <br />
                <ol>
                  <li>
                    This Licence shall come into force on the{" "}
                    <strong>
                      {" "}
                      {date} <sup>{getOrdinal(date)}</sup> {month}
                      {year}
                    </strong>
                    (the Effective Date) and shall remain valid for a period of 5 years.
                  </li>
                  <br />
                  <li>Notwithstanding the above, the licence may be terminated pursuant to Clause 6 below.</li>
                </ol>
                <br />
                <li value="4">
                  <strong>Licence fees</strong>
                </li>
                <br />
                <ol>
                  <li>
                    The Licensee shall pay such licence fees to the Authority as prescribed in the Telecommunication
                    (Licence Fees) Regulations 2003 as may be amended from time to time. As at the Effective Date, the
                    annual licence fees payable are set as follows: -
                  </li>
                  <br />
                  <li>
                    The licence fees as morefully detailed at Annex I hereto are thus payable to the Authority. Payment
                    by cheque should be made to the order of the &quot;Information and Communication Technologies
                    Authority&quot;.
                  </li>
                  <br />
                  <li>
                    The licence fees are payable for the first time on the Effective Date of the Licence or if the
                    Effective Date is earlier than the date of issue of the Licence, on the date of the issue and
                    thereafter not later than 15 days before the anniversary thereof.
                  </li>
                  <br />
                  <li>
                    Where the Licensee fails to pay the licence fees due under this Licence or the Act or any Regulation
                    within the time specified in Clause 4.3 above, he shall in addition pay a surcharge of 10 per cent
                    on the fees which are due.
                  </li>
                  <br />
                </ol>
              </ol>
              <br />
              <p style={{ textAlign: "center" }}>
                <strong>Low Power Radio Devices Licence - Rs. 1,000 per device</strong>
              </p>
            </p>
            <p style={{ textAlign: "center" }}>2</p>
          </div>
        </div>
      </Termsandconditionspage2>
      <Termsandconditionspage3>
        <div className="" id="terms-and-conditions_page3">
          {status_letterhead(expirydate, convertedeffectivedate, isInArray)}
          <div style={{ marginTop: "0%", marginLeft: "5%", marginRight: "8%", position: "relative", lineHeight: 1.58 }}>
            <p style={{ textAlign: "justify", marginLeft: "6%" }}>
              <ol>
                <li value="5">
                  Where fee in respect of this licence remain unpaid for a period of one (1) year, this licence shall
                  lapse in accordance with Section 24(9)(b) of the Act. The Authority may thereafter, in accordance with
                  law, take any action to recoup any amount of licence fees due and to forfeit the Radio Apparatus.
                </li>
                <br />
                <li>
                  This licence shall not be renewed unless the Licensee has paid any outstanding amount on this licence
                  or any other licence issued to the Licensee under Section 24 of the Act.
                </li>
                <br />
              </ol>
              <li value="5">
                <strong>Radiocommunication Facilities</strong>
              </li>
              <br />
              <ol>
                <li value="1">
                  The Radio Apparatus used, shall at all times within the frequency band{" "}
                  <strong>&quot;{frequencyband}&quot;</strong>, be assigned on a non-interference and non-protection
                  basis to the Licensee. No other frequency may be installed on any of the Radio Apparatus owned and
                  operated by the Licensee.{" "}
                </li>
                <br />
                <li>
                  The Licensee shall at no time use or encroach upon any frequency not assigned to it by the Authority
                  and shall not cause any interference to any Service on any frequency bands.
                </li>
                <br />
                <li>
                  The Licensee shall operate Radio Apparatus only of types which have been previously approved by the
                  Authority and meet such standards as may be prescribed from time to time by the Authority, or
                  standards recommended by the ITU or any other international body recognised by the Authority.
                </li>
                <br />
                <li value="4">
                  The Licensee shall operate and maintain such Radio Apparatus so as to conform, at all times, to the
                  specifications to which they have been type approved.
                </li>
                <br />
                <li value="5">
                  The maximum allowable Effective Radiated Power (ERP) of any of the Radio Apparatus should be{" "}
                  <strong>&quot;{power}&quot;</strong> at all times. The Licensee shall under no circumstances, cause
                  the ERP of any such Radio The Authority may impose lower ERP limits in the operation of the Radio
                  Apparatus, depending on operational circumstances.{" "}
                </li>
                <br />
                <li value="6">
                  The Authority may impose lower ERP limits in the operation of the Radio Apparatus, depending on
                  operational circumstances.
                </li>
                <br />
                <li value="7">
                  The Licensee shall notify the Authority of the installation of any additional Low Power Radio Device
                  and pay the relevant licence fees to the Authority prior to the use of the new Radio Apparatus.
                </li>
                <br />
                <li value="8">
                  The Licensee shall not permit or offer any unauthorised person to operate the Radio Apparatus or to
                  have access to them.
                </li>
                <br />
              </ol>
            </p>
            <p style={{ textAlign: "center" }}>3</p>
          </div>
        </div>
      </Termsandconditionspage3>
      <Termsandconditionspage4>
        <div className="" id="terms-and-conditions_page4">
          {status_letterhead(expirydate, convertedeffectivedate, isInArray)}
          <div style={{ marginTop: "0%", marginLeft: "5%", marginRight: "8%", position: "relative", lineHeight: 1.6 }}>
            <p style={{ textAlign: "justify" }}>
              <ol>
                <ol>
                  <li value="9">
                    The Licensee shall make the Radio Apparatus accessible for inspection, at all reasonable times, by
                    officers of this Authority.
                  </li>
                  <br />
                  <li value="10">
                    The Licensee shall ensure that sufficient clearance between any existing telecommunication
                    infrastructure and its own facilities on sites being part of the Radio Apparatus is maintained, so
                    as to prevent any radio interference to existing telecommunication systems.
                  </li>
                  <br />
                  <li value="11">
                    The Licensee shall cure, at its own cost, any harmful radio interference emanating from its Radio
                    Apparatus and affecting such telecommunication systems:{" "}
                  </li>
                  <br />
                </ol>
                <li value="6">
                  <strong>Revocation; Termination</strong>
                </li>
                <br />
                <ol>
                  <li value="1">
                    The Authority may, in accordance with the Act or any Regulation and at any time, revoke this Licence
                    , if the Licensee-
                    <br />
                    <ol type="a">
                      <li>
                        has failed to comply with the provisions of this Licence, or the Act or any Regulation including
                        but not limited to the obligation to pay licence fees in relation to the operation of this
                        Licence or any other licence issued by this Authority, within the specified time,
                      </li>
                      <br />
                      <li>has failed to comply with Clause 2.1 or Clause 5.1 above;</li>
                      <br />
                      <li>has failed to comply with any direction(s) or decision(s) made by the Authority.</li>
                      <br />
                    </ol>
                  </li>
                  <br />
                  <li value="2">
                    The Authority may, where this Licence has been revoked, refuse to reissue this Licence or any other
                    licence to the Licensee.
                  </li>
                  <br />
                  <li>
                    {" "}
                    This Licence will terminate:
                    <ol type="a">
                      <br />
                      <li>upon the dissolution or bankruptcy or winding up of the legal person of the Licensee; or</li>
                      <br />
                      <li>on the effective date of a new licence or authorisation replacing this Licence; or</li>
                      <br />
                      <li>on the revocation of this Licence pursuant to Clause 6.1 above.</li>
                      <br />
                    </ol>
                  </li>
                </ol>
                <li value="7">
                  <strong>Modification</strong>
                </li>
                <br />
                The Authority reserves the right to modify this Licence as may be required for the safeguard of public
                interest or national security.
                <br />
                <br />
              </ol>
            </p>
            <p style={{ textAlign: "center" }}>4</p>
          </div>
        </div>
      </Termsandconditionspage4>
      <Termsandconditionspage5>
        <div className="" id="terms-and-conditions_page5">
          {status_letterhead(expirydate, convertedeffectivedate, isInArray)}
          <div style={{ marginTop: "0%", marginLeft: "5%", marginRight: "8%", position: "relative", lineHeight: 1.6 }}>
            <p style={{ textAlign: "justify" }}>
              <ol>
                <li value="8">
                  <strong> Compliance with Directions and Decisions</strong>
                </li>
                <br />
                The Licensee shall comply with all directions issued and decisions made by the Authority under the Act,
                forthwith or within such delay as may be specified, without prejudice to the Licensee&rsquo;s rights to
                seek review under the law.
                <br />
                <br />
                <li value="9">
                  <strong>Extent of Liability </strong>
                  <br />
                  <br />
                  <ol>
                    <li>
                      The Licensee shall be solely liable for any incident arising out of the operation of the Radio
                      Apparatus.
                    </li>
                    <br />
                    <li>
                      The Authority shall in no case be liable in respect of any claim or damage arising out of any act
                      done or any omission on the part of the Licensee.
                    </li>
                    <br />
                  </ol>
                </li>
                <li value="10">
                  <strong> Assignment; Transfer; Other Changes</strong>
                  <br />
                  <br />
                  <ol>
                    <li>
                      This Licence shall not be assigned, transferred, mortgaged, encumbered or sold without the express
                      approval of the Authority.
                    </li>
                    <br />
                    <li>
                      The Licensee shall notify the Authority of any change in its registered address or address for
                      correspondence within seven (7) days of the date of such change. In default, correspondence
                      addressed at the last known address shall be deemed to have been properly and validly addressed.
                    </li>
                  </ol>
                </li>
                <br />
                <li value="11">
                  <strong> Surrender of the Licence</strong>
                  <br />
                  <br />
                  <ol>
                    <li>
                      The Licensee shall surrender this Licence to the Authority within two (2) weeks of its termination
                      or any extension thereof or its revocation pursuant to clause 6 above or as may be provided by
                      law.
                    </li>
                    <br />
                    <li>
                      The Licensee may surrender this Licence at any time with the express approval of the Authority and
                      subject to the settlement of any outstanding dues.
                    </li>
                  </ol>
                </li>
                <br />
                <li value="12">
                  <strong>Compliance with other Legal Provisions</strong>
                </li>
                <br />
                The Licensee shall, at all times, during the term of this Licence, including any renewals thereof,
                comply with all applicable laws and regulations.
                <br />
              </ol>
            </p>
            <p style={{ textAlign: "center" }}>5</p>
          </div>
        </div>
      </Termsandconditionspage5>
      <Termsandconditionspage6>
        <div className="" id="terms-and-conditions_page6">
          {status_letterhead(expirydate, convertedeffectivedate, isInArray)}
          <div style={{ marginTop: "0%", marginLeft: "5%", marginRight: "8%", position: "relative", lineHeight: 1.6 }}>
            <p style={{ textAlign: "center" }}>
              <p style={{ textAlign: "center" }}>
                <strong>ANNEX I</strong>
              </p>
              <p style={{ textAlign: "center" }}>
                <strong>LOW POWER RADIO DEVICES LICENCE-RA27</strong>
              </p>
              <p style={{ textAlign: "justify" }}>
                Annual Licence fees payable by &quot;{recipientname}&quot; to the Information and Communication
                Technologies Authority. <br />
              </p>
            </p>
            <table border={0} width={"100%"}>
              <thead>
                <th>Licence No</th>
                <th>Make</th>
                <th>Model</th>
                <th>Annual Fee(Rs)</th>
              </thead>
              <tr>
                <td>{licenceno}</td>
                <td>{make}</td>
                <td>{model}</td>
                <td>{licencefee}</td>
              </tr>
            </table>
            <p style={{ textAlign: "center" }}>6</p>
          </div>
        </div>
      </Termsandconditionspage6>
    </>
  );
};
