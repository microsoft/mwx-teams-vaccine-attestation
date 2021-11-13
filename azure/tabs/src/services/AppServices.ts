import IResourceLink from './../interfaces/IResourceLink';
import IHomeSettings from './../interfaces/IHomeSettings';
import IAttestationSettings from '../interfaces/IAttestationSettings';
import IAttestation from './../interfaces/IAttestation';
import IAttestationSummary from './../interfaces/IAttestationSummary';
import IAttestationSummarySettings from '../interfaces/IAttestationSummarySettings';
import IMyAttestationsSettings from '../interfaces/IMyAttestationsSettings';

class AppServices {
  constructor() {
  }
  
  public getPrivacyActStatement = async():Promise<string> => {
    const text:string = `<strong>Authority:</strong>
      <p>Pursuant to 5 U.S.C. chapters 11 and 79, and in discharging the functions directed under Executive Order 14043, Requiring Coronavirus Disease 2019 Vaccination for Federal Employees (Sept. 9, 2021), we are authorized to collect this information. The authority for the system of records notice (SORN) associated with this collection of information, OPM/GOVT-10, Employee Medical File System of Records, 75 Fed. Reg. 35099 (June 21, 2010), amended 80 Fed. Reg. 74815 (Nov. 30, 2015), also includes 5 U.S.C. chapters 33 and 63 and Executive Order 12196, Occupational Safety and Health Program for Federal Employees (Feb. 26, 1980). Providing this information is mandatory, and we are authorized to impose penalties for failure to provide the information pursuant to applicable Federal personnel laws and regulations.</p>
      <p><strong>Purpose:</strong></p>
      <p>This information is being collected and maintained to promote the safety of Federal workplaces and the Federal workforce consistent with the above-referenced authorities, Executive Order 13991, Protecting the Federal Workforce and Requiring Mask-Wearing (Jan. 20, 2021), the COVID-19 Workplace Safety: Agency Model Safety Principles established by the Safer Federal Workforce Task Force, and guidance from Centers for Disease Control and Prevention and the Occupational Safety and Health Administration.</p>
      <p><strong>Routine Uses:</strong></p>
      <p>While the information requested is intended to be used primarily for internal purposes, in certain circumstances it may be necessary to disclose this information externally, for example to disclose information to: a Federal, State, or local agency to the extent necessary to comply with laws governing reporting of communicable disease or other laws concerning health and safety in the work environment; to adjudicative bodies (e.g., the Merit System Protection Board), arbitrators, and hearing examiners to the extent necessary to carry out their authorized duties regarding Federal employment; to contractors, grantees, or volunteers as necessary to perform their duties for the Federal Government; to other agencies, courts, and persons as necessary and relevant in the course of litigation, and as necessary and in accordance with requirements for law enforcement; or to a person authorized to act on your behalf. A complete list of the routine uses can be found in the SORN associated with this collection of information.</p>
      <p><strong>Consequence of Failure to Provide Information:</strong></p>
      <p>Providing this information is mandatory. Unless granted a legally required exception, all covered Federal employees are required to be vaccinated against COVID-19 and to provide documentation concerning their vaccination status to their employing agency. Unless you have been granted a legally required exception, failure to provide this information may subject you to disciplinary action, including and up to removal from Federal service</p>`;

    return text;
  }  

  public getHomeSettings = async():Promise<IHomeSettings> => {
    const data:IHomeSettings = {
      links: [
        {
          id: 1,
          order: 1,
          text: 'Find a COVID-19 vaccine near you',
          url: 'https://www.vaccines.gov/'
        },
        {
          id: 2,
          order: 2,
          text: 'Find a COVID-19 Testing location',
          url: 'https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html'
        }
      ],
      adminGroupId: 'c0c6791b-fb98-4dcd-9531-55b8c1085c53'
    };

    return data;
  }

  public getAttestationSettings = async():Promise<IAttestationSettings> => {
    const data:IAttestationSettings = {
      showOnBehalfOf: true,
      onBehalfOfLabel: 'I am attesting on behalf of another user',
      employeeSectionHeader: 'Employee Information',
      workSiteLabel: 'Please select the work site that you report to in the drop down below:',
      attestationSectionHeader: 'Attestation Information',
      attestationSectionBody: `Employees are considered "fully vaccinated" two weeks after completing the second dose of a two-dose COVID-19 vaccine (e.g., Pfizer or Moderna) or two weeks after receiving a single dose of a one-dose vaccine (e.g., Johnson & Johnson/Janssen)

Employees who choose not to complete the form or decline to attest their vaccination status will be assumed to be not fully vaccinated for purposes of application of the safety protocols.
      
If you are not vaccinated due to medical or religious reasons, please check either "I am not fully vaccinated" or "I decline to respond."
      
Note that if you have already received one dose of a vaccine, but are not fully vaccinated, or if you received your final dose less than two weeks ago, then you will be treated as not fully vaccinated until you are at least two weeks past your final doe and submit a new attestation.`,      
      attestationStatusLabel: 'Attestation Status',
      attestationStatusDescription: 'Please select the statement that best describes your current COVID-19 vaccination status',
      certificationSectionHeader: 'Certification Attestation',
      certificationPrompt: 'Certification',
      certificationLabel: 'I attest that the information provided in this form is accurate and true to the best of my knowledge.',
      certificationAcknowledgement: 'I understand that a knowing and willful false statement on this form can be punished by a fine or imprisonment or both (18 U.S.C. 1001). Selecting "I decline to respond" does not constitute a false statement. I understand that making a false statement on this form could result in additional administrative action including an adverse personnel action up to and including removal from my position.',
      sendSubmissionEmail: true,
      vaccinationDatePrompt: "Date of Most Recent Vaccine",
      testDatePrompt: "Date of Most Recent Negative COVID-19 Test",
      attestationStatuses: [
        {
          id: 1,  
          text: 'I am fully vaccinated', 
          active: true,
          requireVaxDate: true,
          requireTestDate: false,
          requireDocuments: true
        },
        {
          id: 2,  
          text: 'I am not fully vaccinated', 
          active: true,
          requireVaxDate: false,
          requireTestDate: true,
          requireDocuments: false
        },
        {
          id: 3,  
          text: 'I have tested negative for COVID-19 in the past 7 days', 
          active: true,
          requireVaxDate: false,
          requireTestDate: true,
          requireDocuments: false
        },
        {
          id: 4,  
          text: 'I decline to respond', 
          active: true,
          requireVaxDate: false,
          requireTestDate: true,
          requireDocuments: false
        },
      ],      
      workSites: [
        {
          id: 1,  
          text: 'Charlotte', 
          active: true,
        },
        {
          id: 2,  
          text: 'Pittsburgh', 
          active: true,
        },
        {
          id: 3,  
          text: 'Raleigh', 
          active: true,
        },
        {
          id: 4,  
          text: 'Tampa', 
          active: true,
        }
      ]
    };

    return data;
  }

  public submitAttestation = async(attestation:IAttestation):Promise<number> => {
    return -1;
  }

  public getAttestationSummary = async(id:number):Promise<IAttestationSummary> => {
      
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
          id: index,      
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