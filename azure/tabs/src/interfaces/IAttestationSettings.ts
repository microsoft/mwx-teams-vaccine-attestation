import IAttestationStatus from './IAttestationStatus';
import IWorkSite from './IWorkSite'

/*

*/
interface IAttestationSettings {
  showOnBehalfOf: boolean;
  onBehalfOfLabel: string;
  employeeSectionHeader: string;
  workSiteLabel: string;
  vaccinationStatusSectionHeader: string;
  vaccinationStatusSectionBody: string;
  vaccinationStatusLabel: string;
  vaccinationStatusDescription: string;
  certificationSectionHeader: string;
  certificationPrompt: string;
  certificationLabel: string;
  certificationAcknowledgement: string;
  vaccinationStatuses:IAttestationStatus[];
  workSites:IWorkSite[];
  sendSubmissionEmail:boolean;
  vaccinationDatePrompt?: string|undefined;
  testDatePrompt?: string|undefined;
}

export default IAttestationSettings;