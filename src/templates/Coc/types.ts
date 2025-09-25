import { v2 } from "@tradetrust-tt/tradetrust";

export interface Coc extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
  };
}
