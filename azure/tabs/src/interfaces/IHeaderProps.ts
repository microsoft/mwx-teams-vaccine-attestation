import { RouteComponentProps  } from "react-router-dom";

/*
  Properties to pass into the Header Control
*/
interface IHeaderProps extends RouteComponentProps {
  title?: string|undefined;
  showBack: boolean;
  showHome: boolean;  
}

export default IHeaderProps;