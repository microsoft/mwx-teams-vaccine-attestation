import { RouteComponentProps  } from "react-router-dom";

/*
  Properties to pass into the footer control
*/
interface IFooterProps extends RouteComponentProps {
  primaryButtonText?: string|undefined;
  primaryButtonDisabled?: boolean|undefined;
  onPrimaryButtonClicked?: () => void|undefined;  
}

export default IFooterProps;