import { IPersonaProps } from '@fluentui/react/lib/Persona';

/*
  Contains Attestaion information
*/
interface IAttestation {
  isOnBehalfOf: boolean;
  attestationDate: Date|undefined|null;
  vaccineDate: Date|undefined|null;
  covidTestDate: Date|undefined|null;
  submitterName: string|undefined|null;
  submitterEmail: string|undefined|null;
  submittedForName: string|undefined;
  supervisor: IPersonaProps|undefined|null;
  workSiteId: number|undefined|null;
  attestationStatusId: number|undefined|null;
  certified:boolean;
  supportingFiles:File[]|undefined;
}

export default IAttestation;