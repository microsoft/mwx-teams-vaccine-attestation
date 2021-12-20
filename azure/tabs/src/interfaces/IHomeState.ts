import { UserInfo } from "@microsoft/teamsfx";
import IResourceLink from './IResourceLink';

/*
  
*/
interface IHomeState {
  links:IResourceLink[]|undefined;
  isAdmin:boolean;
  user:UserInfo|undefined;
}

export default IHomeState;