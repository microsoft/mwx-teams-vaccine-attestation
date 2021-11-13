import * as React from "react";
import { RouteComponentProps  } from "react-router-dom";
import { TeamsUserCredential } from "@microsoft/teamsfx";
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react/lib/DetailsList';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TooltipHost } from '@fluentui/react';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import Header from "./controls/Header";
import Footer from "./controls/Footer";
import AttestationSummaryList from "./controls/AttestationSummaryList";
import AttestationSummaryPanel from "./controls/AttestationSummaryPanel";
import SummaryField from "./controls/SummaryField";
import AppServices from './../services/AppServices';
import GraphServices from './../services/GraphServices';
import { formatDateTime } from './../services/Utils';
import IMyAttestationsState from "./../interfaces/IMyAttestationsState";
import IAttestationSummary from "../interfaces/IAttestationSummary";

/*
 * 
 */
class MyAttestations extends React.Component<RouteComponentProps, IMyAttestationsState> {
  private _appServices:AppServices = new AppServices();
  private _graphServices:GraphServices = new GraphServices();

  constructor(props:RouteComponentProps) {
    super(props);

    var credential:TeamsUserCredential = new TeamsUserCredential();    

    this._graphServices.getCurrentUser().then(currentUser => {      
      this._appServices.getAttestationsByEmail(currentUser.mail!).then(attestations => {
        this.setState( { attestations: attestations });
      });          
    });    

    this._appServices.getMyAttestationsSettings().then(result => {      
      this.setState( { settings: result } );
    });
  }

  private _onAttestationSelected = (attestations:IAttestationSummary[]): void => {
    this.setState( { selected: (attestations.length > 0) ? attestations[0] : undefined } );   
  } 

  private _onPanelClosed = (): void => {
    this.setState( {selected: undefined} );
  }

  render() {  
    return (
      <div>
        <Header showBack={true} showHome={true} title={'My Attestations'} {...this.props} />
        <div className="content">        
          {
            (this.state?.attestations === undefined) ? 
            <Spinner size={SpinnerSize.large} /> :                          
            <AttestationSummaryList 
              attestations={this.state.attestations}              
              selectionMode={SelectionMode.single}
              onSelect={this._onAttestationSelected}
           />
          }
          <AttestationSummaryPanel
            isOpen={this.state?.selected !== undefined}
            attestation={this.state?.selected}            
            workSiteEntityName={this.state?.settings?.workSiteEntityName}
            vaccinationDatePrompt={this.state?.settings?.vaccinationDatePrompt}
            testDatePrompt={this.state?.settings?.testDatePrompt}
            onClose={this._onPanelClosed}
          />
        </div>
        <Footer {...this.props} />
      </div>
    );
  }
}

export default MyAttestations;