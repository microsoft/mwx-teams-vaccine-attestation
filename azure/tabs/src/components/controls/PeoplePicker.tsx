import React from "react";
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { IBasePickerSuggestionsProps, NormalPeoplePicker, ValidationState, IBasePickerStyles } from '@fluentui/react/lib/Pickers';
import { User } from '@microsoft/microsoft-graph-types';
import "./../App.css";

import IPeoplePickerProps from "./../../interfaces/IPeoplePickerProps";
import GraphServices from './../../services/GraphServices';
import { getUserInitials } from './../../services/Utils';
/*
*/

class PeoplePicker extends React.Component<IPeoplePickerProps> {
  private _graphService:GraphServices;

  constructor(props: IPeoplePickerProps) {    
    super(props);
    this._graphService = new GraphServices();

    //import { Event } from '@microsoft/microsoft-graph-types';
    //activeEvent: {} as microsoftgraph.Event
  }

  // private getInitials = (displayName:string):string => {
  //   const names = displayName.split(' ');
  //   if (names.length === 0)
  //     return '?';

  //   else if (names.length === 1)     
  //       return displayName[0];          

  //   return `${names[0][0]}${names[names.length - 1][0]}`;      
  // }

  private getPeople = async (text:string):Promise<IPersonaProps[]> => {
    const users:User[] = await this._graphService.searchUsers(text);    
    const personas:IPersonaProps[] = users.map(user => {
      return {
        id: user.id!,        
        email: user.mail!,
        //imageUrl: "https://m365x186878.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname=adelev%40m365x186878.onmicrosoft.com",
        imageInitials: getUserInitials(user.displayName!),
        text: user.displayName!,
        secondaryText: user.jobTitle!      
      };
    });

    return personas;
  }

  private onFilterChanged = (
    filterText: string,
    currentPersonas?: IPersonaProps[],
    limitResults?: number
  ): IPersonaProps[] | Promise<IPersonaProps[]> => {        
    if (!filterText)
      return [];
        
    // this.getPeople(filterText)
    //   .then(people => {

    //     if (currentPersonas !== undefined) {
    //       people = this.removeDuplicates(people, currentPersonas!);
    //     }
    //     people = limitResults ? people.slice(0, limitResults) : people;
    //     return this.convertResultsToPromise(people)
    //   });
        
    const people: Promise<IPersonaProps[]> = this.getPeople(filterText);
    return people;    
  };

  private removeDuplicates = (personas: IPersonaProps[], possibleDupes: IPersonaProps[]) => {
    return personas.filter(persona => !this.listContainsPersona(persona, possibleDupes));
  }

  private listContainsPersona = (persona: IPersonaProps, personas: IPersonaProps[]) => {
    if (!personas || !personas.length || personas.length === 0) {
      return false;
    }
    return personas.filter(item => item.text === persona.text).length > 0;
  }

  private convertResultsToPromise = (results: IPersonaProps[]): Promise<IPersonaProps[]> => {
    return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
  }

  render() {

    const suggestionProps: IBasePickerSuggestionsProps = {
      suggestionsHeaderText: 'Suggested People',
      mostRecentlyUsedHeaderText: 'Suggested Contacts',
      noResultsFoundText: 'No results found',
      loadingText: 'Loading',
      showRemoveButtons: true,
      suggestionsAvailableAlertText: 'People Picker Suggestions available',
      suggestionsContainerAriaLabel: 'Suggested contacts',
    };

    const pickerStyles: Partial<IBasePickerStyles> = { root: { width: 500 }};

    const pickerId = `people${new Date().getTime()}`
    const requiredClass:string = (this.props.required) ? ' taag-required' : '';

    const labelClass = ((this.props.label) && (this.props.required)) ? 'ms-label taag-required' : 'ms-label';
    const pickerClass = ((!this.props.label) && (this.props.required)) ? 'ms-PeoplePicker taag-required' : 'ms-PeoplePicker'; 

    return (                  
      <div>
        {
          this.props.label && 
          <label htmlFor={pickerId} className={labelClass}>{this.props.label}</label>          
        }       
        <NormalPeoplePicker
          // eslint-disable-next-line react/jsx-no-bind
          onResolveSuggestions={this.onFilterChanged}
          // eslint-disable-next-line react/jsx-no-bind
          /*onEmptyInputFocus={this.returnMostRecentlyUsed}*/
          /*getTextFromItem={this.getTextFromItem}*/
          pickerSuggestionsProps={suggestionProps}
          className={pickerClass}
          key={'normal'}
          // eslint-disable-next-line react/jsx-no-bind
          //onRemoveSuggestion={this.onRemoveSuggestion}
          //onValidateInput={this.validateInput}
          selectionAriaLabel={'Selected contacts'}
          removeButtonAriaLabel={'Remove'}
          inputProps={{
            onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
            onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
            'aria-label': 'People Picker',
            id: pickerId,
          }}       
          resolveDelay={300}
          disabled={this.props.disabled}
          onChange={this.props.onChange}
          selectedItems={this.props.selectedPeople}      
          styles={pickerStyles}    
        />
        {
          !this.props.label && this.props.required &&
          <span>*</span>
        }
      </div>        
    );
  }
}

export default PeoplePicker;
