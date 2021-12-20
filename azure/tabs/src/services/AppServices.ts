import * as axios from "axios";
import { v4 } from "uuid";
import { TeamsUserCredential, getResourceConfiguration, ResourceType } from "@microsoft/teamsfx";
import IPrivacyActSettings from './../interfaces/IPrivacyActSettings';
import IResourceLink from './../interfaces/IResourceLink';
import IHomeSettings from './../interfaces/IHomeSettings';
import IAttestationSettings from '../interfaces/IAttestationSettings';
import IAttestation from './../interfaces/IAttestation';
import IAttestationSummary from './../interfaces/IAttestationSummary';
import IAttestationSummarySettings from '../interfaces/IAttestationSummarySettings';
import IMyAttestationsSettings from '../interfaces/IMyAttestationsSettings';
import IBlobContainerInfo from "../interfaces/IBlobContainerInfo";

class AppServices {
  constructor() {}
  
  private callApi = async(apiRoute:string, verb:string = 'get'):Promise<axios.AxiosResponse<any>> => {

    const retryCount = 5;
    const retryMultiplier = 100;
    const credential = new TeamsUserCredential();
    const accessToken = await credential.getToken("");
    const apiConfig = getResourceConfiguration(ResourceType.API);
    const apiUrl = `${apiConfig.endpoint}/api/${apiRoute}`;
    var result = undefined;

    // if ((verb !== 'get') && (verb !== 'post') && (verb !== 'put')) {
    //   throw new { message: 'Invalid verb specificed.'};
    // }

    for (var count = 0; count < retryCount; count++) {

    
      try {
        var response:axios.AxiosResponse<any>|undefined = undefined;

        if (verb === 'get') {
          response = await axios.default.get(apiUrl, { headers: { authorization: "Bearer " + accessToken?.token || "", } });
        }



        result = response!.data;
        break;
      } 
      catch (err: unknown) {
        var errorMessage = `Attempt ${count + 1} of ${retryCount} failed. Request: ${apiUrl}.`;
        if (axios.default.isAxiosError(err)) {
           errorMessage += `.  ${err.message}`;
          if (err.response?.data?.error) {
            errorMessage += `.  ${err.response.data.error}`;
          }
        }
        else {
          errorMessage += `.  Unknown error.`;
        }        
        
        console.error(errorMessage);

        if ((count + 1) >= retryCount)
          throw err;

        // Sleep
        for (var delay = 0; delay < ((1 + retryCount) * retryMultiplier); delay++);
      }
    }

    return result;
  }

  
  public getPrivacyActSettings = async():Promise<IPrivacyActSettings> => {
    const settings:IPrivacyActSettings = ((await this.callApi('getPrivacyActSettings') as unknown) as IPrivacyActSettings);    
    return settings;
  }  

  public getHomeSettings = async():Promise<IHomeSettings> => {
    const settings:IHomeSettings = ((await this.callApi('getHomeSettings') as unknown) as IHomeSettings);    
    return settings;    
  }

  public getAttestationSettings = async():Promise<IAttestationSettings> => {
    const settings:IAttestationSettings = ((await this.callApi('getSubmissionSettings') as unknown) as IAttestationSettings);    
    return settings; 
  }

  public submitAttestation = async(attestation:IAttestation):Promise<string> => {
    const submissionId = v4();
    const containerInfo:IBlobContainerInfo = ((await this.callApi(`getStorageContainerAccess/${submissionId}`) as unknown) as IBlobContainerInfo);    

    console.log(containerInfo.containerUrl);
    console.log(containerInfo.settingsSasUrl);

    return submissionId;
  }

  public getAttestationSummary = async(id:string):Promise<IAttestationSummary> => {
      
    const summary:IAttestationSummary = {
      id: id,      
      attestationDate: new Date(),
      vaccineDate: new Date(),
      covidTestDate: undefined,
      submitterName: 'test submitter name',
      submitterEmail: 'submitterName@test.com',
      submittedForName: 'test submitted for name',
      supervisorName: 'test supervisor Name',
      supervisorEmail: 'supervisorName@test.com',  
      workSite: 'the work site',
      attestationStatus: 'the status',     
      // attestationStatusIconName: 'Completed',
      // attestationStatusIconColor: '#006400',
      supportingFiles: [
        'https://www.bing.com',
        'https://www.google.com'
      ]
    };

    return summary;

  }

  public getAttestationSummarySettings = async():Promise<IAttestationSummarySettings> => {
    const settings:IAttestationSummarySettings = {
      summaryPrompt: "Your submission has been completed",
      screenshotPrompt: "*** PLEASE TAKE A SCREENSHOT OF SUBMISSION FOR YOUR RECORDS ***",
      workSiteEntityName: "Worksite",
      vaccinationDatePrompt: "Date of Most Recent Vaccine",
      testDatePrompt: "Date of Most Recent Negative COVID-19 Test"
    };
    return settings;
  }

  public getMyAttestationsSettings = async():Promise<IMyAttestationsSettings> => {
    const settings:IMyAttestationsSettings = {        
      workSiteEntityName: "Worksite",
      vaccinationDatePrompt: "Date of Most Recent Vaccine",
      testDatePrompt: "Date of Most Recent Negative COVID-19 Test"
    };
    return settings;
  }

  public getAttestationsByEmail = async(email:string):Promise<IAttestationSummary[]> => {
    const ticks:number = new Date().getTime();
    const msInDay:number = 86400000;
    
    const attestations:IAttestationSummary[] = [];

    for (var index = 0; index < 100; index++) {
      attestations.push(
        {          
          id: index.toString(),      
          attestationDate: new Date(ticks - (msInDay * index)),
          vaccineDate: ((index % 2) === 0) ? new Date(ticks - (2 * msInDay)) : undefined,
          covidTestDate: ((index % 2) === 1) ? new Date(ticks - (2 * msInDay)) : undefined,
          submitterName: 'test submitter name',
          submitterEmail: email,
          submittedForName: 'test submitted for name',
          supervisorName: 'test supervisor Name',
          supervisorEmail: 'supervisorName@test.com',  
          workSite: 'the work site',
          attestationStatus: 'Not Approved',   
          // attestationStatusIconName: 'Completed',
          // attestationStatusIconColor: '#006400',
          supportingFiles: [
            'https://www.bing.com',
            'https://www.google.com'
          ]
        });
    }
    return attestations
  }
}

export default AppServices;