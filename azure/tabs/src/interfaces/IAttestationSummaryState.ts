import IAttestationSummary from "./IAttestationSummary";
import IAttestationSummarySettings from "./IAttestationSummarySettings";
/*
  
*/
interface IAttestationSummaryState {
  summary?:IAttestationSummary|undefined;  
  settings?:IAttestationSummarySettings|undefined;
}

export default IAttestationSummaryState;