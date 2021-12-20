
import { Context } from "@azure/functions";
import { loadConfiguration, OnBehalfOfUserCredential } from "@microsoft/teamsfx";
import { ApiInitResult } from "./ApiTypes";

//const { ApiInitResult } = require('./AppTypes');
const { Connection, Request:DbRequest, TYPES } = require('tedious');
type TeamsfxContext = { [key: string]: any };

const executeSqlQuery = (context, query, params) => new Promise((resolve, reject) => {
    const rows = [];    
    
    const connection = new Connection({
        server: process.env["db_server"],
        authentication: {
            type: 'default',
            options: {
                userName: process.env["db_user"],
                password: process.env["db_password"],
            }
        },
        options: {
            database: process.env["db_database"],
            encrypt: true
        }
    });
    
    // Use this logic to coonect to Azure SQL backend pools using managed indentity of an Azure VM
    
    /*    const connection = new Connection({
        server: process.env["db_server"],
        authentication: {
            type: 'azure-active-directory-msi-vm',
        },
        options: {
            database: process.env["db_database"],
            encrypt: true,
            port: 1433
        }
    });
    // Use this logic to coonect to Azure SQL backend pools using managed indentity of an Azure App Service/Function Apps 
    
    const connection = new Connection({
        server: process.env["db_server"],
        authentication: {
            type: 'azure-active-directory-msi-app-service',
        },
        options: {
            database: process.env["db_database"],
            encrypt: true,
            port: 1433
        }
    });
*/

    const request = new DbRequest(query, (err) => {
        if (err) {
            reject(err);
        } else {            
            resolve(rows);
        }       
    });    

    ///TODO: implement paramaters
    //request.addParameter('payload', TYPES.NVarChar, paramPayload, Infinity);

    request.on('row', columns => {
        const row = {};
        
        columns.forEach(column => {
            row[column.metadata.colName] = column.value;                                        
        });

        rows.push(row);
    });

    connection.on('connect', err => {
        if (err) {
            reject(err);
        }
        else {
            connection.execSql(request);
        }
    });   

    connection.connect();    
});

exports.executeSqlQuery = executeSqlQuery;

const initializeApi = (context: Context, teamsfxContext: TeamsfxContext):ApiInitResult => {
    const result:ApiInitResult = new ApiInitResult();

    try {
        loadConfiguration();
    } 
    catch (e) {
        context.log.error(e);
        result.responseStatusCode = 500;
        result.errorMessage = "Failed to load app configuration";
        return result;        
    }
    
      // Prepare access token.
    result.accessToken = teamsfxContext["AccessToken"];
    if (!result.accessToken) {
        context.log,console.error("No access token was found in request header.");
        result.responseStatusCode = 400;
        result.errorMessage = "No access token was found in request header.";
        return result;                
      }
    
      // Construct credential.    
    try {
        result.credential = new OnBehalfOfUserCredential(result.accessToken);
    } catch (e) {
        context.log.error(e);
        result.responseStatusCode = 500;
        result.errorMessage = "Failed to obtain on-behalf-of credential using your accessToken. Ensure your function app is configured with the right Azure AD App registration.";
        return result;         
    }

    return result;
}

exports.initializeApi = initializeApi;