import IAttestationStatus from './IAttestationStatus';
import IWorkSite from './IWorkSite'

/*

*/
interface IAttestationSettings {
  showOnBehalfOf: boolean;
  onBehalfOfLabel: string;
  employeeSectionHeader: string;
  workSiteLabel: string;
  attestationSectionHeader: string;
  attestationSectionBody: string;
  attestationStatusLabel: string;
  attestationStatusDescription: string;
  certificationSectionHeader: string;
  certificationPrompt: string;
  certificationLabel: string;
  certificationAcknowledgement: string;
  attestationStatuses:IAttestationStatus[];
  workSites:IWorkSite[];
  sendSubmissionEmail:boolean;
  vaccinationDatePrompt?: string|undefined;
  testDatePrompt?: string|undefined;
}

export default IAttestationSettings;