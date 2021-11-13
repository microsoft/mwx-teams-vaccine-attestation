/*
  Information about a worksite
*/
interface IAttestationStatus {
  id:number;  
  text:string;  
  active: boolean;
  requireVaxDate: boolean;
  requireTestDate: boolean;
  requireDocuments: boolean;
}

export default IAttestationStatus;