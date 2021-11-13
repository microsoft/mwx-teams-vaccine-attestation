import { UserInfo } from "@microsoft/teamsfx";
import IAttestation from "./IAttestation";
import IAttestationSettings from './IAttestationSettings';
/*
  
*/
interface IAttestationState {
  attestation:IAttestation;
  settings: IAttestationSettings|undefined|null;
  user:UserInfo|undefined|null;
}

export default IAttestationState;