import IResourceLink from './IResourceLink';

/*

*/
interface IHomeSettings {
  header:string|undefined;
  links:IResourceLink[]|undefined;
  adminGroupId:string|undefined;
  reviewerGroupId:string|undefined;
}

export default IHomeSettings;