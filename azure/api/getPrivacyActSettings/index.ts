/* This code sample provides a starter kit to implement server side logic for your Teams App in TypeScript,
 * refer to https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference for complete Azure Functions
 * developer guide.
 */

// Import polyfills for fetch required by msgraph-sdk-javascript.
import "isomorphic-fetch";
import { Context, HttpRequest } from "@azure/functions";
import { Client } from "@microsoft/microsoft-graph-client";
import {
  createMicrosoftGraphClient,
  loadConfiguration,
  OnBehalfOfUserCredential,
  UserInfo,
} from "@microsoft/teamsfx";
import { ApiInitResult, PrivacyActSettings } from "../shared/ApiTypes";
const { initializeApi, executeSqlQuery } = require('./../shared/ApiServices');


interface Response {
  status: number;
  body: { [key: string]: any };
}

type TeamsfxContext = { [key: string]: any };

/**
 * This function handles requests from teamsfx client.
 * The HTTP request should contain an SSO token queried from Teams in the header.
 * Before trigger this function, teamsfx binding would process the SSO token and generate teamsfx configuration.
 *
 * This function initializes the teamsfx SDK with the configuration and calls these APIs:
 * - OnBehalfOfUserCredential() - Construct credential with the received SSO token and initialized configuration.
 * - getUserInfo() - Get the user's information from the received SSO token.
 * - createMicrosoftGraphClient() - Get a graph client to access user's Microsoft 365 data.
 *
 * The response contains multiple message blocks constructed into a JSON object, including:
 * - An echo of the request body.
 * - The display name encoded in the SSO token.
 * - Current user's Microsoft 365 profile if the user has consented.
 *
 * @param {Context} context - The Azure Functions context object.
 * @param {HttpRequest} req - The HTTP request.
 * @param {teamsfxContext} TeamsfxContext - The context generated by teamsfx binding.
 */
export default async function run(
  context: Context,
  req: HttpRequest,
  teamsfxContext: TeamsfxContext
): Promise<Response> {
  context.log("HTTP trigger function processed a request.");

  // Initialize response.
  const res: Response = {
    status: 200,
    body: {},
  };

  // Put an echo into response body.
  //res.body.receivedHTTPRequestBody = req.body || "";
  const initResults = initializeApi(context, teamsfxContext);

  if (initResults.isError()) {
    res.status = initResults.responseStatusCode;
    res.body = { 
      error: initResults.errorMessage
    }
    return res;
  }

  const settings = new PrivacyActSettings();
  
  try {    
    const rows:[] = await executeSqlQuery(context, `SELECT [Name], [Value] FROM ApplicationSetting WHERE [Name] LIKE 'Privacy.%'`);

    rows.forEach(item => {
      switch (item['Name']) {
        case 'Privacy.Header':
          settings.header = item['Value'];
          break;

        case 'Privacy.Statement':
          settings.statement = item['Value'];
          break;
      }    
    });
    
    res.body = settings;

  } catch (e) {
    context.log.error(e);
    return {
      status: 500,
      body: { error: `Failed to retrieve Privacy Settings.  ${e.message}` },
    };
  }

  return res;
}
