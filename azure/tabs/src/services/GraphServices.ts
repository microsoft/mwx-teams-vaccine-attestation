import { TeamsUserCredential, createMicrosoftGraphClient } from "@microsoft/teamsfx";
import { Client, GraphRequest, GraphError } from "@microsoft/microsoft-graph-client";
import { User } from '@microsoft/microsoft-graph-types';
import { flexClassName } from "@fluentui/react-northstar";

class GraphServices {
  private _credential:TeamsUserCredential;

  constructor() {
    this._credential = new TeamsUserCredential();
  }

  public searchUsers = async (text:string, maxResults:number|undefined = undefined):Promise<User[]> => {
    
    const graphClient:Client = createMicrosoftGraphClient(this._credential, ["User.ReadBasic.All"]);
    
    const request:GraphRequest = graphClient.api('users')
      .count(false)
      .search(`"displayName:${text}"`)
      .orderby('displayName')
      .select('id,displayName,mail,jobTitle')
      .header('ConsistencyLevel', 'eventual' );
      
    if (maxResults !== undefined) {
      request.top(maxResults!);
    }
        
    const users:User[] = (await request.get()).value;
    return users;
  }

  public getCurrentUser = async ():Promise<User> => {
    const graphClient:Client = createMicrosoftGraphClient(this._credential, ["User.Read"]);
      
    const currentUser = await graphClient.api('me')
      .select('id,displayName,mail,jobTitle')
      .get();
                   
    return currentUser;  
  }

  public getCurrentUserManager = async ():Promise<User|undefined> => {
    const graphClient = createMicrosoftGraphClient(this._credential, ["User.Read"]);
    
    let currentUser:User|undefined = undefined;

    try {
      currentUser = await graphClient.api('me/manager')
        .select('id,displayName,mail,jobTitle')
        .get();                          
    }
    catch {
      console.log(`Current user doesn't have a manager`);
    }

    return currentUser;
  }
}


export default GraphServices;



