import { v2, v3 } from "@tradetrust-tt/tradetrust";

export interface DealersCertificateDocument {
  certificateno: string;
  recipientname: string;
  licenceno: string;
  issueddate: string;
  validuntil: string;
  links: {
    self: {
      href: string;
    };
  };
}

export type DealersCertificateDocumentSchemaV2 = v2.OpenAttestationDocument & DealersCertificateDocument;
export type DealersCertificateDocumentSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: DealersCertificateDocument;
};
export type DealersCertificateDocumentSchema = DealersCertificateDocumentSchemaV2 | DealersCertificateDocumentSchemaV3;
