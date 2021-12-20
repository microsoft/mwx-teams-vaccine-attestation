import { OnBehalfOfUserCredential } from "@microsoft/teamsfx";

export class ApiInitResult {  
  accessToken:string|undefined;
  credential:OnBehalfOfUserCredential
  responseStatusCode:number|undefined;
  errorMessage:string|undefined;  

  public isError = ():boolean => {
    return this.responseStatusCode !== undefined;
  }
}

export class ResourceLink {
  id:number|undefined;
  order:number;
  text:string;
  url:string;  
}

export class WorkSite {
  id:number;  
  text:string;  
  active: boolean;
}

export class VaccinationStatus {
  id:number;  
  text:string;  
  active: boolean;
  requireVaxDate: boolean;
  requireTestDate: boolean;
  requireDocuments: boolean;
}

export class PrivacyActSettings {
  header:string;
  statement:string;
}

export class HomeSettings {
  constructor() {
    this.links = [];
  }

  header:string|undefined;
  links:ResourceLink[]|undefined;
  adminGroupId:string|undefined;
  reviewerGroupId:string|undefined;
}

export class SubmissionSettings {
  constructor() {
    this.workSites = [];
    this.vaccinationStatuses = [];
  }
  header: string;
  showOnBehalfOf: boolean;
  onBehalfOfLabel: string;
  employeeSectionHeader: string;
  workSiteEntityName: string;
  workSiteLabel: string;
  vaccinationStatusSectionHeader: string;
  vaccinationStatusSectionBody: string;
  vaccinationStatusLabel: string;
  vaccinationStatusDescription: string;
  certificationSectionHeader: string;
  certificationPrompt: string;
  certificationLabel: string;
  certificationAcknowledgement: string;
  vaccinationStatuses:VaccinationStatus[];
  workSites:WorkSite[];
  sendSubmissionEmail:boolean;
  vaccinationDatePrompt?: string|undefined;
  testDatePrompt?: string|undefined;
}

export class SubmissionSummarySettings {
  summaryPrompt: string|undefined;
  screenshotPrompt: string|undefined;
  workSiteEntityName: string|undefined;
  vaccinationDatePrompt?: string|undefined;
  testDatePrompt?: string|undefined; 
}

export class MySubmissionsSettings {  
  workSiteEntityName?: string|undefined;
  vaccinationDatePrompt?: string|undefined;
  testDatePrompt?: string|undefined;
}

export class Submission {
  id: string;
  attestationDate: Date|undefined|null;
  vaccineDate: Date|undefined|null;
  covidTestDate: Date|undefined|null;
  submitterName: string|undefined|null;
  submitterEmail: string|undefined|null;
  submittedForName: string|undefined;
  supervisorName: string|undefined|null;
  supervisorEmail: string|undefined;
  workSiteId: number|undefined|null;
  attestationStatusId: number|undefined|null;
  supportingFileUrls:string[]|undefined;
}

export class BlobContainerAccessInfo {
  containerUrl: string;
  containerSasUrl: string;
}