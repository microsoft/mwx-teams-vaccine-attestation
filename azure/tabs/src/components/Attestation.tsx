import * as React from "react";
import { RouteComponentProps  } from "react-router-dom";
import { TeamsUserCredential } from "@microsoft/teamsfx";
import { Checkbox, ICheckboxProps } from '@fluentui/react/lib/Checkbox';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { IBasePickerSuggestionsProps, NormalPeoplePicker, ValidationState, IBasePickerStyles } from '@fluentui/react/lib/Pickers';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from '@fluentui/react/lib/Dropdown';
import { DatePicker, mergeStyleSets, IDatePickerStrings, defaultDatePickerStrings } from '@fluentui/react';
import Header from "./controls/Header";
import Footer from "./controls/Footer";
import PeoplePicker from "./controls/PeoplePicker";
import FilePicker from "./controls/FilePicker";
import AppServices from './../services/AppServices';
import GraphServices from './../services/GraphServices';
import IAttestationState from "./../interfaces/IAttestationState";
import { getUserInitials, isStringNullUndefinedBlank, isDateNullUndefinedInFuture, 
  isNumberNullUndefined, isPeronaPropsNullUndefined } from './../services/Utils';
//import { datepickerCalendarHeaderActionClassName } from "@fluentui/react-northstar";


/*
 * 
 */
class Attestation extends React.Component<RouteComponentProps, IAttestationState> {
  private _appServices:AppServices = new AppServices();
  private _graphServices:GraphServices = new GraphServices();

  constructor(props:RouteComponentProps) {
    super(props);
    this.state = { 
      attestation: {
        isOnBehalfOf: false,
        attestationDate: null,
        vaccineDate: null,
        covidTestDate: null,
        submitterName: null,
        submitterEmail: null,
        submittedForName: '',       
        supervisor: null,
        workSiteId: null,
        attestationStatusId: null,
        certified: false,
        supportingFiles: [],
      },
      settings: null,
      user: null
    };

    var credential = new TeamsUserCredential();    

    credential.getUserInfo().then(result => {
      const attestation = this.state.attestation;
      attestation.submitterName = result.displayName;
      attestation.submittedForName = result.displayName;      
      this.setState( { user: result, attestation: attestation } );
            


      //credential.login(['User.Read', 'User.ReadBasic.All']);
    });

    this._appServices.getAttestationSettings().then(result => {      
      this.setState( { settings: result } );
    });

    this._graphServices.getCurrentUser().then(result => {
      const attestation = this.state.attestation;
      attestation.submitterEmail = result.mail;      
      this.setState( { attestation: attestation } );
    });

    this._graphServices.getCurrentUserManager().then(result => {
      if (result !== undefined) {
        const attestation = this.state.attestation;
        attestation.supervisor = {
          id: result.id!,        
          //email: result.mail!,
          //imageUrl: "https://m365x186878.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname=adelev%40m365x186878.onmicrosoft.com",
          imageInitials: getUserInitials(result.displayName!),
          text: result.displayName!,
          secondaryText: result.jobTitle!      
        };        
      }
    })

  }

  private submit = () => {
    const attestation = this.state.attestation;
    attestation.attestationDate = new Date();
    this._appServices.submitAttestation(attestation)
      .then(id => { this.props.history.push(`/summary/${id}`); });
  };

  private onBehalfOfChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean): void => {
    const attestation = this.state.attestation;
    attestation.isOnBehalfOf = (checked === null) ? false : checked!;    
    if (attestation.isOnBehalfOf) {
      attestation.submittedForName = '';
    } 
    else {
      attestation.submittedForName = this.state.user?.displayName;
    }
    this.setState( { attestation: attestation } );          
  }

  private onSubmittedForChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void=> {
    const attestation = this.state.attestation;
    attestation.submittedForName = newValue || '';    
    this.setState( { attestation: attestation } );  
  }
  
  private onSupervisorChange = (items?: IPersonaProps[]|undefined): void => {
    const attestation = this.state.attestation;

    if ((items === undefined) || (items === null) || (items?.length === 0)) {
      attestation.supervisor = null;      
    }
    else {
      attestation.supervisor = items[items.length - 1];
    }

    this.setState( { attestation: attestation } );   
  };

  private onWorkSiteChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption<any> | undefined, index?: number | undefined):void => {
    const attestation = this.state.attestation;

    if ((option === undefined) || (option === null)) {
      attestation.workSiteId = null;
    }
    else {
      attestation.workSiteId = Number(option.key);
    }
    this.setState( { attestation: attestation } )      
  };

  private onAttestationStatusChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption<any> | undefined, index?: number | undefined):void => {
    const attestation = this.state.attestation;

    if ((option === undefined) || (option === null)) {
      attestation.attestationStatusId = null;
      attestation.vaccineDate = null;
      attestation.covidTestDate = null;
    }
    else {
      attestation.attestationStatusId = Number(option.key);
      const status = this.state.settings?.vaccinationStatuses.find(item => { return item.id === attestation.attestationStatusId });

      if (!status?.requireTestDate) {
        attestation.covidTestDate = null;
      }

      if (!status?.requireVaxDate) {
        attestation.vaccineDate = null;
      }

      if (!status?.requireDocuments) {
        attestation.supportingFiles = [];
      }
    }
    this.setState( { attestation: attestation } );      
  };

  private onVaxDateChange = (date: Date | null | undefined) => {
    const attestation = this.state.attestation;
    attestation.vaccineDate = date;
    this.setState( { attestation: attestation } );
  }

  private onTestDateChange = (date: Date | null | undefined) => {
    const attestation = this.state.attestation;
    attestation.covidTestDate = date;
    this.setState( { attestation: attestation } );
  }

  private onSupportingDocumentsChange = (files?: File[]|undefined): void => {
    const attestation = this.state.attestation;

    if ((files === undefined) || (files === null) || (files?.length === 0)) {
      attestation.supportingFiles = [];      
    }
    else {
      attestation.supportingFiles = files;
    }

    this.setState( { attestation: attestation } );   
  };


  private onCertificationChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean): void => {
    const attestation = this.state.attestation;
    attestation.certified = (checked === null) ? false : checked!;     
    this.setState( { attestation: attestation } );          
  }

  private getSelectedSupervisor = ():IPersonaProps[] => {
    const supervisor:IPersonaProps|null|undefined = this.state.attestation.supervisor;
    
    if ((supervisor === null) || (supervisor === undefined)) {
      return [];
    }

    return [ supervisor ];
  }

  private getWorkSiteLocations = (): IDropdownOption[] => {
    const workSites = this.state.settings?.workSites;

    if ((workSites === null) || (workSites === undefined)) {
      return [];
    }

    return workSites?.map(item => { return { key: item.id, text: item!.text } });
  }

  private getAttestationStatuses = (): IDropdownOption[] => {
    const statuses = this.state.settings?.vaccinationStatuses;

    if ((statuses === null) || (statuses === undefined)) {
      return [];
    }

    return statuses?.map(item => { return { key: item.id, text: item!.text } });
  }

  private requireVaccineDate = ():boolean => {
    const attestation = this.state.attestation;
    
    if ((attestation.attestationStatusId === null) || (attestation.attestationStatusId === undefined)) {
      return false;
    }

    const status = this.state.settings?.vaccinationStatuses.find(item => { return item.id === attestation.attestationStatusId });
    return status!.requireVaxDate;
  }

  private requireTestDate = ():boolean => {
    const attestation = this.state.attestation;
    
    if ((attestation.attestationStatusId === null) || (attestation.attestationStatusId === undefined)) {
      return false;
    }

    const status = this.state.settings?.vaccinationStatuses.find(item => { return item.id === attestation.attestationStatusId });
    return status!.requireTestDate;
  }

  private requireSupportingDocuments = ():boolean => {
    const attestation = this.state.attestation;
    
    if ((attestation.attestationStatusId === null) || (attestation.attestationStatusId === undefined)) {
      return false;
    }

    const status = this.state.settings?.vaccinationStatuses.find(item => { return item.id === attestation.attestationStatusId });
    return status!.requireDocuments;
  }

  private isAttestationValid = ():boolean => {
    const attestation = this.state.attestation;

    if (isStringNullUndefinedBlank(attestation.submittedForName)) {
      return false;
    }
     
    if (isPeronaPropsNullUndefined(attestation.supervisor)) {
      return false;
    }

    if (isNumberNullUndefined(attestation.workSiteId)) {
      return false;
    }
    
    if (isNumberNullUndefined(attestation.attestationStatusId)) {
      return false;
    }
        
    if (!attestation.certified) {
      return false;
    }
    
    if ((this.requireVaccineDate()) && (isDateNullUndefinedInFuture(attestation.vaccineDate))) {
      return false;
    }
        
    if ((this.requireTestDate()) && (isDateNullUndefinedInFuture(attestation.covidTestDate))) {
      return false;
    }

    if ((this.requireSupportingDocuments()) && (attestation.supportingFiles === undefined) && (attestation.supportingFiles!.length === 0)) {         
      return false;
    }    

    return true;
  }

  render() {
    const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 500 } };
    const textFieldStyles: Partial<ITextFieldStyles> = { root: { width: 500 } };
    

    const datePickerStyles = mergeStyleSets({
      root: { selectors: { '> *': { marginBottom: 15 } } },
      control: { width: 500, maxWidth: 500, marginBottom: 15 },
    });

    const today = new Date(Date.now());
    const minDate = new Date(2020, 1, 1);

    const datePickerStrings: IDatePickerStrings = {
      ...defaultDatePickerStrings,      
      isOutOfBoundsErrorMessage: `Date must be between ${minDate.toLocaleDateString()} and ${today.toLocaleDateString()}`,
    };

    return (
      <div>
        <Header showBack={true} showHome={true} title={'Attestation Screen'} {...this.props} />
        <div className='contentFullWidth attestation'>      
          { 
            this.state.settings?.showOnBehalfOf &&   
            <>
              <div className="Section fieldRow">
                <Checkbox label={this.state.settings?.onBehalfOfLabel} checked={this.state.attestation.isOnBehalfOf} onChange={this.onBehalfOfChange} />    
              </div>
              <hr />
            </>            
          }          
          <div className="SectionHeader">{this.state.settings?.employeeSectionHeader}</div>
          <div className="Section">            
            <div className="fieldRow">
              {
                this.state.attestation.isOnBehalfOf &&
                <div>
                  <TextField label="Submitted For" required value={this.state.attestation?.submittedForName} styles={textFieldStyles} />
                </div>
              }
              <div>
                <PeoplePicker disabled={false} selectedPeople={this.getSelectedSupervisor()} onChange={this.onSupervisorChange} label="Supervisor Name" required />
              </div>                      
            </div>
            <div className="fieldRow">
              <Dropdown
                label={ this.state.settings?.workSiteLabel}
                selectedKey={this.state.attestation.workSiteId}
                // eslint-disable-next-line react/jsx-no-bind
                onChange={this.onWorkSiteChange}
                placeholder="Select an option"
                options={this.getWorkSiteLocations()}
                styles={dropdownStyles}
                required
              />
            </div>
          </div>
          <div className="SectionHeader">{this.state.settings?.vaccinationStatusSectionHeader}</div>
          <div className="Section">            
            {
              this.state.settings?.vaccinationStatusSectionBody && 
              <>
                <div dangerouslySetInnerHTML={{ __html: this.state.settings?.vaccinationStatusSectionBody?.replace(/\n/gi, "<br />") }} />     
                <br/>
                <hr/>
              </>         
            }            
            <div className="fieldRow">
              <Dropdown
                label={ this.state.settings?.vaccinationStatusLabel}
                selectedKey={this.state.attestation.attestationStatusId}
                // eslint-disable-next-line react/jsx-no-bind
                onChange={this.onAttestationStatusChange}
                placeholder={ this.state.settings?.vaccinationStatusDescription}
                options={this.getAttestationStatuses()}
                styles={dropdownStyles}
                required
              />
            </div>
            <div className="fieldRow">
              {
                this.requireVaccineDate() &&
                <DatePicker
                  isRequired
                  label={this.state.settings?.vaccinationDatePrompt}
                  placeholder="Select a date..."
                  ariaLabel="Select a date"
                  className={datePickerStyles.control}                                  
                  minDate={minDate}
                  maxDate={today}
                  strings={datePickerStrings}
                  allowTextInput
                  onSelectDate={this.onVaxDateChange}
                />
              }
              {
                this.requireTestDate() &&
                <DatePicker
                  isRequired
                  label={this.state.settings?.testDatePrompt}
                  placeholder="Select a date..."
                  ariaLabel="Select a date"
                  className={datePickerStyles.control}                                  
                  minDate={minDate}
                  maxDate={today}
                  strings={datePickerStrings}
                  allowTextInput
                  onSelectDate={this.onTestDateChange}
                />
              }
              {
                this.requireSupportingDocuments() &&
                <FilePicker
                  files={this.state.attestation.supportingFiles}
                  label="Upload Supprting Documents"
                  required
                  onChange={this.onSupportingDocumentsChange}
                />
              }
            </div>
          </div>
          <div className="SectionHeader">{this.state.settings?.certificationSectionHeader}</div>
          <div className="Section">            
            <div className="fieldRow">
              {
                this.state.settings?.certificationPrompt &&
                <label className='ms-Label taag-Required'>{this.state.settings?.certificationPrompt}</label>
              }
            </div>
            <div className="fieldRow">
              <Checkbox label={this.state.settings?.certificationLabel} checked={this.state.attestation.certified} onChange={this.onCertificationChange} />
            </div>
            {
              this.state.settings?.certificationAcknowledgement &&
              <>
                <br/>
                <div className="fieldRow">
                  <div dangerouslySetInnerHTML={{ __html: this.state.settings?.certificationAcknowledgement?.replace(/\n/gi, "<br />") }} />    
                </div>
              </>
            }
          </div>          
        </div>
        <Footer primaryButtonText='Submit' primaryButtonDisabled={!this.isAttestationValid()} onPrimaryButtonClicked={this.submit} {...this.props} />
      </div>
    );
  }
}

export default Attestation;
