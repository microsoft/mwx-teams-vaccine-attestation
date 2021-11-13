import IAttestationSummary from "./IAttestationSummary";
/*
  Properties to pass into the file picker control
*/
interface IAttestationSummaryPanelProps {      
  attestation?: IAttestationSummary|undefined;  
  isOpen?: boolean|undefined;
  workSiteEntityName?: string|undefined;
  vaccinationDatePrompt?: string|undefined;
  testDatePrompt?: string|undefined;
  buttons?: string[]|undefined;
  onClose?: () => void|undefined;   
  onButtonClick?: (button: string) => void|undefined;
}

export default IAttestationSummaryPanelProps;