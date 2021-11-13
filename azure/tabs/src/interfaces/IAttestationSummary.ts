/*
  Contains the attestaion summary
*/
interface IAttestationSummary {  
  id: number;
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
  supportingFiles:string[]|undefined;
}

export default IAttestationSummary;