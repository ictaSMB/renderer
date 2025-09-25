import { v2 } from "@tradetrust-tt/tradetrust";
import { DealersLicenceDocumentSchemaV2 } from "./types";

export const DealersLicenceSampleV2: DealersLicenceDocumentSchemaV2 = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "DealersLicence",
    url: "https://rad-cocada-16861d.netlify.app",
  },
  issuers: [
    {
      name: "ICT Authority",
      documentStore: "0x00e905DEF4Ad06129A5b2075B52CC71429f4c448",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "icta.mu",
      },
    },
  ],
  licenceno: "E/2023/999",
  effectivedate: "04/04/2023",
  recipientname: "Test Company",
  recipientbrnorcoi: "C1234",
  recipientaddress: "Royal Road, Port Louis",
  links: {
    self: {
      href: "https://everify.icta.mu?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fceladon-churros-05516c.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2Fe4cfc09e-c8eb-4c80-8416-740627dac68b%22%2C%22key%22%3A%22c6fac37f4f893cfd189c29a1ff97af9d9e97b6691069d7184b756e7fe5b5ff74%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Feverify.icta.mu%2F%22%2C%22chainId%22%3A%221%22%7D%7D",
    },
  },
};
