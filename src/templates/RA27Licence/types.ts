import { v2, v3 } from "@tradetrust-tt/tradetrust";

export interface RA27LicenceDocument {
  licenceno: string;
  effectivedate: string;
  recipientname: string;
  frequencyband: string;
  power: string;
  recipientaddress: string;
  make: string;
  model: string;
  licencefee: string;
  links: {
    self: {
      href: string;
    };
  };
}

export type RA27LicenceDocumentSchemaV2 = v2.OpenAttestationDocument & RA27LicenceDocument;
export type RA27LicenceDocumentSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: RA27LicenceDocument;
};
export type RA27LicenceDocumentSchema = RA27LicenceDocumentSchemaV2 | RA27LicenceDocumentSchemaV3;
