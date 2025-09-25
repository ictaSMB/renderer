import { v2 } from "@tradetrust-tt/tradetrust";
import { Coc } from "./types";

export const CocSample: Coc = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "COC",
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
  name: "Type Approval Certificate",
  recipient: {
    name: "Trilok Dabeesing",
  },
};
