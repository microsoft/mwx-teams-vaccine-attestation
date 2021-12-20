/*
  Contains the attestaion summary
*/
interface IAttestationSummary {  
  id: string;
  attestationDate: Date;
  vaccineDate: Date|undefined|null;
  covidTestDate: Date|undefined|null;
  submitterName: string;
  submitterEmail: string;
  submittedForName: string;
  supervisorName: string;
  supervisorEmail: string;  
  workSite: string;
  attestationStatus: string;  
  // attestationStatusIconName: string|undefined;
  // attestationStatusIconColor: string|undefined;
  supportingFiles:string[]|undefined;
}

export default IAttestationSummary;