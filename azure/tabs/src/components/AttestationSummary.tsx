import * as React from "react";
import { RouteComponentProps, withRouter  } from "react-router-dom";
import { Stack } from '@fluentui/react/lib/Stack';
import Header from "./controls/Header";
import Footer from "./controls/Footer";
import SummaryField from "./controls/SummaryField";
import AppServices from './../services/AppServices';
import GraphServices from './../services/GraphServices';
import { formatDateTime } from './../services/Utils';
import IAttestationSummaryState from "./../interfaces/IAttestationSummaryState";

/*
 * 
 */
class AttestationSummary extends React.Component<RouteComponentProps<{ id:string|undefined}>, IAttestationSummaryState> {
  private _appServices:AppServices = new AppServices();
  private _graphServices:GraphServices = new GraphServices();

  constructor(props:RouteComponentProps<{ id:string|undefined}>) {
    super(props);
    
    this.state = {
      settings: undefined,
      summary: undefined
    };

    //this.props.
    const id = this.props.match.params.id;
    
    if (id !== undefined) {
      this._appServices.getAttestationSummary(id)
        .then(summary => { this.setState({ summary: summary }) });
    }
    this._appServices.getAttestationSummarySettings()
      .then(settings => this.setState( { settings: settings }));
      
  };

  render() {
    const rowStackTokens = { childrenGap: 25 };

    return (
      <div>
        <Header showBack={true} showHome={true} title={'Attestation Summary'} {...this.props} />
        <div className="content summary">
          <Stack tokens={rowStackTokens} /*styles={stackStyles}*/>
            {
              this.state.settings?.summaryPrompt &&              
              <div className="summaryPrompt">
                {this.state.settings.summaryPrompt}
              </div>
            }
            {              
              this.state.summary && 
              <div className="summaryFields">
                <div className="summaryRow">
                  <SummaryField label="Submitted For" value={this.state.summary?.submittedForName} />         
                  {
                    (this.state.summary?.submittedForName === this.state.summary.submitterName) ?
                    <SummaryField label="Email" value={this.state.summary?.submitterEmail} /> :
                    <SummaryField label="Submitted By" value={this.state.summary?.submitterName} />                    
                  }
                </div>
                <div className="summaryRow">
                  <SummaryField label="Supervisor" value={this.state.summary?.supervisorName} />  
                  <SummaryField label={this.state.settings?.workSiteEntityName}  value={this.state.summary?.workSite}  />                  
                </div>
                <div className="summaryRow">
                  <SummaryField label="Vaccination Status" value={this.state.summary?.attestationStatus} />                  
                </div>
                <div className="summaryRow">
                  {
                    this.state.summary.vaccineDate && 
                    <SummaryField label={this.state.settings?.vaccinationDatePrompt} value={formatDateTime(this.state.summary.vaccineDate)} />
                  }
                  {
                    this.state.summary.covidTestDate && 
                    <SummaryField label={this.state.settings?.testDatePrompt} value={formatDateTime(this.state.summary.covidTestDate)} />
                  }                                  
                  <SummaryField label="Submitted On" value={formatDateTime(this.state.summary.attestationDate)} />                  
                </div>
              </div>              
            }             
          </Stack>          
        </div>
        <Footer {...this.props} primaryText={this.state.settings?.screenshotPrompt} />        
      </div>
    );
  }
}

export default withRouter(AttestationSummary);
