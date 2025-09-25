import { TemplateRegistry } from "@tradetrust-tt/decentralized-renderer-react-components";
import { CocTemplates } from "./Coc";
import { DemoDealersLicenceTemplates } from "./DemoDealersLicence";
import { DealersLicenceTemplates } from "./DealersLicence";
import { DealersCertificateTemplates } from "./DealersCertificate";
import { BillOfLadingTemplates } from "./BillOfLading";

export const registry: TemplateRegistry<any> = {
  COC: CocTemplates,
  DemoDealersLicence: DemoDealersLicenceTemplates,
  DealersLicence: DealersLicenceTemplates,
  DealersCertificate: DealersCertificateTemplates,
  BILL_OF_LADING: BillOfLadingTemplates,
};
