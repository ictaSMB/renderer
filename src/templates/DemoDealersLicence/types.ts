import { v2 } from "@tradetrust-tt/tradetrust";

export interface DemoDealersLicence extends v2.OpenAttestationDocument {
  licenceno: string;
  recipient: {
    name: string;
    companyno: string;
    address: string;
  };
  effectivedate: string;
  links: {
    self: {
      href: string;
    };
  };
}
