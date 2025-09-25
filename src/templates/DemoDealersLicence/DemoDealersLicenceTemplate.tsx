import styled from "@emotion/styled";
import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { DemoDealersLicence } from "./types";
import { getDocumentData } from "../../utils";
import cover_page from "../../../static/images/demo_coverpage.jpg";
import letter_head from "../../../static/images/letterheader.jpg";
const Containerstyle = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 210mm;
  height: 297mm;
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

export const DemoDealersLicenceTemplate: FunctionComponent<TemplateProps<DemoDealersLicence>> = ({ document }) => {
  const { licenceno, recipient, links } = getDocumentData(document) as DemoDealersLicence;
  const qrCodeUrl = links?.self.href;

  return (
    <>
      <Containerstyle>
        <div className="" id="cover-page">
          <img
            style={{ opacity: 1, position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
            src={cover_page}
            alt="cover page"
          />
          <div style={{ marginTop: "24%", marginLeft: "8%", marginRight: "8%", position: "relative", lineHeight: 1.6 }}>
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
            <p style={{ textAlign: "justify" }}>
              The Information and Communication Technologies Authority, in exercise of the powers conferred upon it
              under Section 24 of the Information and Communication Technologies Act 2001 (as amended) and of all other
              powers exercisable by this Authority for that purpose, hereby grants a
            </p>
            <div style={{ textAlign: "center" }}>
              <strong>
                <span style={{ fontSize: "1.5em" }}>DEALER&apos;S LICENCE - E Licence</span>&nbsp;
                <span style={{ fontSize: "1.25em" }}>
                  [as per the Information and Communication Technologies (Amendment of Schedule) Regulations 2003]
                </span>
              </strong>
            </div>
            <p style={{ textAlign: "center" }}>issued to</p>
            <h3 style={{ textAlign: "center" }}>
              <strong>{recipient.name}</strong>
            </h3>
            <h4 style={{ textAlign: "center" }}>
              <strong>(Registrar of Companies file no. {recipient.companyno})</strong>
            </h4>
            <p style={{ textAlign: "justify" }}>
              having its registered office at <b>{recipient.address}</b>, to sell, expose or offer for sale or hire a
              radiocommunication or telecommunication apparatus or device pursuant to the terms and conditions set out
              in this Licence.
            </p>
            <p style={{ textAlign: "center" }}>
              <strong>
                Effective Date: xx<sup>th</sup> xxx xxxx
              </strong>
              <br />
              <strong>
                Validity Period:&nbsp;
                <em>
                  <u>5 years (from Effective Date)</u>
                </em>
              </strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              Issued by the Information and Communication Technologies Authority on the&nbsp;
              <b>
                xx<sup>th</sup>
              </b>
              &nbsp; day of <b>xxx</b> in the year <b>xxxx</b>.
            </p>
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <strong>This is a computer-generated document. No signature is required.</strong>
            </div>
            <br />
            <br />
            <div style={{ textAlign: "right" }}>{qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}</div>
          </div>
        </div>
      </Containerstyle>
      <Containerstyle>
        <div className="" id="terms-and-conditions_page1">
          <img
            style={{ opacity: 1, position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
            src={letter_head}
            alt="letter head"
          />
          <div style={{ marginTop: "8%", marginLeft: "5%", marginRight: "8%", position: "relative", lineHeight: 1.48 }}>
            <h4 style={{ fontSize: "1.25em", textAlign: "center" }}>
              <strong>INFORMATION AND COMMUNICATION TECHNOLOGIES AUTHORITY</strong>
              <br />
              <br />
              <strong>DEALER&apos;S LICENCE</strong>
            </h4>
            <p style={{ textAlign: "center" }}>
              <strong>Terms and Conditions</strong>
            </p>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
              <ol>
                <li value="1">
                  The Licence is granted to <strong>&apos;{recipient.name}&apos;</strong>, hereinafter referred to as
                  &apos;the Licensee&apos;.
                </li>
              </ol>
              <ol>
                <li value="2">
                  The Licence is valid for a period of <strong>five</strong> (5) years, with effect from&nbsp;
                  <strong>
                    xx<sup>th</sup> xxx xxxx
                  </strong>
                  .
                </li>
              </ol>
              <ol>
                <li value="3">
                  An annual licence fee amounting to Rs 5,000/- is payable to the Authority. The licensee shall effect
                  payment with respect to the annual fee at least 15 days prior to its anniversary every year.
                </li>
              </ol>
              <ol>
                <li value="4">
                  A surcharge of 10% on the licence fee shall be due to be payable, in the event the licence fee is not
                  paid at least 15 days before the anniversary of the Licence.
                </li>
              </ol>
              <ol>
                <li value="5">
                  Where fee in respect of this licence remain unpaid for a period of one (1) year, this licence shall
                  lapse in accordance with Section 24(9)(b) of the Act.
                  <br />
                  This licence shall not be renewed unless the Licensee has paid any outstanding amount on this licence
                  or any other licence issued to the Licensee under Section 24 of the Act.
                </li>
              </ol>
              <ol>
                <li value="6">
                  Where the licensee is involved in the commercialization of mobile phones, the licensee shall ensure
                  that he has in his possession an official document which certifies that the manufacturer or authorized
                  distributor is an accredited local distributor/reseller of mobiles phones of that particular make.
                  Should the authorization obtained by the manufacturer or authorized distributor be time bound, this
                  should be indicated in the official document
                </li>
              </ol>
              <ol>
                <li id="sublist">
                  Where the Licensee is engaged in the commercialisation of refurbished ICT equipment, the Licensee
                  shall:
                  <ol type="a">
                    <li>
                      ensure that the refurbished ICT equipment has been vigorously vetted and repaired, implying that
                      the products have been through some extreme levels of checking and renovation prior to sale to
                      end-users;
                    </li>
                    <li>
                      import only ICT equipment as close as possible to the latest regeneration of new products. For
                      example, mobile phones with only 2G or 3G functionalities should be avoided;
                    </li>
                    <li>
                      ensure that only quality and safe refurbished ICT equipment are imported for commercialisation in
                      Mauritius;
                    </li>
                    <li>
                      ensure that the products are properly labelled as &apos;certified refurbished&apos; or
                      &apos;manufacturer refurbished&apos; to guide the consumers as to the quality of the product at
                      the time of purchase;
                    </li>
                    <li>
                      ensure that all refurbished mobile devices commercialised have genuine International Mobile
                      Equipment Identity (&apos;IMEI&apos;). Tampering with the IMEI of a mobile device is an offence
                      under the ICT Act;
                    </li>
                    <li>provide a warranty of at least six months from the date of purchase; and</li>
                    <li>
                      provide the customer with the possibility of returning the product within a minimum period of 14
                      days should he be dissatisfied with the product.
                    </li>
                  </ol>
                </li>
              </ol>
            </p>
            <p style={{ textAlign: "center" }}>1</p>
          </div>
        </div>
      </Containerstyle>
      <Containerstyle>
        <div className="" id="terms-and-conditions_page2">
          <img
            style={{ opacity: 1, position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
            src={letter_head}
            alt="letter head"
          />
          <div style={{ marginTop: "8%", marginLeft: "5%", marginRight: "8%", position: "relative", lineHeight: 1.55 }}>
            <p style={{ textAlign: "justify" }}>
              <ol>
                <li value="7">
                  Where the licensee is involved in the commercialization of radio communication or telecommunication
                  equipment, the licensee shall ensure that its suppliers/distributors of
                  radiocommunication/telecommunication equipment are either the manufacturer thereof or are duly
                  authorized representatives of the manufacturer for the territory of Mauritius.
                </li>
                <br />
                <li value="8">
                  The Licensee shall, at all-time provide good quality service to his consumers and a warranty period of
                  at least one year on the radiocommunication/telecommunication equipment purchased, either from the
                  manufacturer or from its authorized representative for the territory of Mauritius or from the Licensed
                  Dealer. The terms and conditions of the warranty for the one year period should be indicated to the
                  customer prior to the purchase of equipment.
                </li>
                <br />
                <li value="9">
                  Where the licensee is engaged in the commercialization of spare parts, the licensee shall:
                  <br />
                  <ol type="a">
                    <li style={{ marginTop: "1%" }}>
                      at all-time ensure that the spare parts and accessories he commercializes comply with
                      international safety standards and are of good quality.
                    </li>
                    <li style={{ marginTop: "1%" }}>
                      at all times, keep in his possession relevant compliance documents certifying that the secondary
                      cells/batteries and chargers comply with the abovementioned standards.
                    </li>
                    <li style={{ marginTop: "1%" }}>
                      provide a warranty of a least 6 months on all spare parts and accessories sold.
                    </li>
                  </ol>
                </li>
                <br />
                <li value="10">
                  Where the licensee is engaged to service, repair and maintain radiocommunication/telecommunication
                  apparatus or devices, the licensee shall:
                  <br />
                  <ol type="a">
                    <li style={{ marginTop: "1%" }}>
                      already have in his possession all the relevant permit or license from other competent
                      authorities.
                    </li>
                    <li style={{ marginTop: "1%" }}>
                      ensure that his personnel conducting the repair have the required qualifications being at least a
                      valid National Certificate Level 4 Consumer Electronics Servicing or National Certificate Level 4
                      Industrial Electronics, or its equivalent as certified by the Mauritius Qualification Authority
                      (MQA).
                    </li>
                    <li style={{ marginTop: "1%" }}>
                      effect repairs, maintenance and service of devices or apparatus according to the
                      manufacturer&apos;s policy pertaining to service, repair and maintenance of the
                      radiocommunication/telecommunication equipment.
                    </li>
                    <li style={{ marginTop: "1%" }}>
                      at all times make use of good quality and genuine spare parts and shall use good Engineering
                      practices which will guarantee safety of the customers.
                    </li>
                    <li style={{ marginTop: "1%" }}>
                      honour the guarantee or the warranty declared or issued to the customer in relation to the service
                      provided.
                    </li>
                  </ol>
                </li>
                <br />
                <li value="11">
                  The Authority reserves the right:
                  <br />
                  <ol type="a">
                    <li style={{ marginTop: "1%" }}>of not automatically renewing the Licence after its expiry;</li>
                    <li style={{ marginTop: "1%" }}>
                      to revoke the Licence if the Authority feels that the Licensee is not operating to its
                      satisfaction, as specified in the Information and Communication Technologies Act 2001 (as
                      amended);
                    </li>
                  </ol>
                </li>
              </ol>
            </p>
            <p style={{ textAlign: "center" }}>2</p>
          </div>
        </div>
      </Containerstyle>
      <Containerstyle>
        <div className="" id="terms-and-conditions_page3">
          <img
            style={{ opacity: 1, position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
            src={letter_head}
            alt="letter head"
          />
          <div style={{ marginTop: "8%", marginLeft: "5%", marginRight: "8%", position: "relative", lineHeight: 1.58 }}>
            <p style={{ textAlign: "justify", marginLeft: "6%" }}>
              <ol type="a">
                <li value="3" style={{ marginTop: "1%" }}>
                  to impose additional restrictions/obligations concerning the operation of this Licence as and when
                  required;
                </li>
                <li value="4" style={{ marginTop: "1%" }}>
                  to additional information during the term of this licence
                </li>
              </ol>
            </p>
            <p style={{ textAlign: "justify" }}>
              <ol>
                <li value="12">The Licence is not transferable.</li>
                <br />
                <li value="13">
                  The Licensee is authorised to sell, expose or offer for sale or hire radiocommunication or
                  telecommunication apparatus or devices that are&nbsp;
                  <b>
                    <u>type approved</u>
                  </b>
                  &nbsp; by the Authority.
                </li>
                <br />
                <li value="14">
                  The Licensee shall submit an application on the prescribed form to this Authority for such type
                  approval, of each type and model of radiocommunication or telecommunication apparatus which he intends
                  to commercialise in Mauritius, and should along with such application, provide the following
                  documents:
                  <br />
                  <ol type="a">
                    <li style={{ marginTop: "1%" }}>
                      original copy of the brochure on the said apparatus or device(s);
                    </li>
                    <li style={{ marginTop: "1%" }}>a copy of the operating manual;</li>
                    <li style={{ marginTop: "1%" }}>
                      a test report or Certificate of Compliance with International or European Standards;
                    </li>
                    <li style={{ marginTop: "1%" }}>
                      a copy of the type approval certificates obtained in the country of origin, or where the equipment
                      has been duly tested and approved;
                    </li>
                    <li style={{ marginTop: "1%" }}>
                      copy of any warranty that relates to such apparatus or device(s).
                    </li>
                  </ol>
                </li>
                <br />
                <li value="15">
                  No radiocommunication apparatus or device(s), type approved by this Authority, shall be sold,
                  delivered, distributed or donated to any person in Mauritius, unless the appropriate licence for the
                  operation of the said apparatus or device, has been issued to this person by the Authority.
                </li>
                <br />
                <li value="16">
                  Where the Licensee is involved in the activity of hiring radiocommunication/telecommunication
                  equipment under this licence, such equipment shall at all material times be covered by the relevant
                  licence(s) issued either to the Licensee or to its clients as may be appropriate.
                </li>
                <br />
                <li value="17">
                  All radiocommunication apparatus or device(s) shall be programmed to operate on frequencies
                  specifically assigned by this Authority for the operation of such apparatus or device(s) and shall
                  also be programmed to operate at an Effective Isotropic Radiated Power (EIRP) not exceeding that
                  specified by this Authority.
                </li>
                <br />
                <li value="18">
                  Under no circumstances should the facility for programming or reprogramming any frequency on the
                  radiocommunication apparatus be made available to any person to whom such apparatus or device(s) is
                  sold, exposed, offered for sale or hire, delivered, distributed or donated.
                </li>
                <br />
                <li value="19">
                  No radiocommunication apparatus or device(s) shall be installed by the licensee at any location other
                  than that approved by the Authority.
                </li>
              </ol>
            </p>
            <p style={{ textAlign: "center" }}>3</p>
          </div>
        </div>
      </Containerstyle>
      <Containerstyle>
        <div className="" id="terms-and-conditions_page4">
          <img
            style={{ opacity: 1, position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
            src={letter_head}
            alt="letter head"
          />
          <div style={{ marginTop: "8%", marginLeft: "5%", marginRight: "8%", position: "relative", lineHeight: 1.6 }}>
            <p style={{ textAlign: "justify" }}>
              <ol>
                <li value="20">
                  The Authority reserves the right to impose additional restrictions regarding the use of apparatus or
                  device(s) type approved in any country, and to subject such apparatus or device(s) to additional local
                  tests.
                </li>
                <br />
                <li value="21">
                  The Licensee shall, at all times, during the term of this Licence, including any renewals thereof,
                  comply with all applicable laws, telecommunication directives and regulations, including intellectual
                  property rights, related laws and international conventions to which the Republic of Mauritius is a
                  signatory.
                </li>
                <br />
                <li value="22">
                  Should anything adverse against the holder of this Licence come to the knowledge of the Authority, it
                  reserves the right to revoke this Licence.
                </li>
              </ol>
            </p>
            <p style={{ textAlign: "center", marginTop: "99%" }}>4</p>
          </div>
        </div>
      </Containerstyle>
    </>
  );
};
