import { v2, v3 } from "@tradetrust-tt/tradetrust";

export interface DealersLicenceDocument {
  licenceno: string;
  effectivedate: string;
  recipientname: string;
  recipientbrnorcoi: string;
  recipientaddress: string;
  links: {
    self: {
      href: string;
    };
  };
}

export type DealersLicenceDocumentSchemaV2 = v2.OpenAttestationDocument & DealersLicenceDocument;
export type DealersLicenceDocumentSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: DealersLicenceDocument;
};
export type DealersLicenceDocumentSchema = DealersLicenceDocumentSchemaV2 | DealersLicenceDocumentSchemaV3;
