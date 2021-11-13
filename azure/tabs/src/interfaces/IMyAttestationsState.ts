import IAttestationSummary from "./IAttestationSummary";
import IMyAttestationsSettings from "./IMyAttestationsSettings";
/*
  
*/
interface IMyAttestationsState {
  attestations?:IAttestationSummary[]|undefined;  
  settings?:IMyAttestationsSettings|undefined;
  selected?:IAttestationSummary|undefined;
}

export default IMyAttestationsState;