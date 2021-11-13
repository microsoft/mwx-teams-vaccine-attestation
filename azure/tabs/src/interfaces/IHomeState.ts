import { UserInfo } from "@microsoft/teamsfx";
import IResourceLink from './IResourceLink';

/*
  
*/
interface IHomeState {
  links:IResourceLink[];
  isAdmin:boolean;
  user:UserInfo|undefined;
}

export default IHomeState;