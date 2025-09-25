import { v3 } from "@tradetrust-tt/tradetrust";
import { DealersCertificateDocumentSchemaV3 } from "./types";

export const DealersCertificateSampleV3: DealersCertificateDocumentSchemaV3 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
  ],
  type: ["VerifiableCredential", "OpenAttestationCredential"],
  issuanceDate: "2025-04-18T09:00:00Z",
  credentialSubject: {
    certificateno: "C/E999/2023",
    recipientname: "Test Company",
    licenceno: "E/2023/9999",
    issueddate: "01/01/2023",
    validuntil: "31/12/2023",
    links: {
      self: {
        href: "https://everify.icta.mu?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fceladon-churros-05516c.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2Fe4cfc09e-c8eb-4c80-8416-740627dac68b%22%2C%22key%22%3A%22c6fac37f4f893cfd189c29a1ff97af9d9e97b6691069d7184b756e7fe5b5ff74%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Feverify.icta.mu%2F%22%2C%22chainId%22%3A%221%22%7D%7D",
      },
    },
  },
  openAttestationMetadata: {
    template: {
      type: v3.TemplateType.EmbeddedRenderer,
      name: "DealersCertificate",
      url: "https://rad-cocada-16861d.netlify.app",
    },
    proof: {
      type: v3.ProofType.OpenAttestationProofMethod,
      method: v3.Method.Did,
      value: "did:ethr:0x116106e8b326B3Cd53A88aD5C70718A7a3707E13",
      revocation: { type: v3.RevocationType.None },
    },
    identityProof: {
      type: v3.IdentityProofType.DNSDid,
      identifier: "icta.mu",
    },
  },
  issuer: {
    id: "https://www.icta.mu",
    name: "ICT Authority",
  },
};
