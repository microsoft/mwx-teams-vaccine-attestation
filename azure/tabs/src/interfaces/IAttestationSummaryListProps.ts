import IAttestationSummary from "./IAttestationSummary";
import { SelectionMode } from '@fluentui/react/lib/DetailsList';
/*
  Properties to pass into the file picker control
*/
interface IAttestationSummaryListProps {    
  selectionMode : SelectionMode|undefined;
  attestations? : IAttestationSummary[];  
  onSelect?: (attestations: IAttestationSummary[]) => void|undefined;   
}

export default IAttestationSummaryListProps;