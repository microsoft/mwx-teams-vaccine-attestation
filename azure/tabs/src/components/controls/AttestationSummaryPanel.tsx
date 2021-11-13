import React from "react";
import { initializeIcons, TeachingBubbleBase } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Panel, PanelType } from '@fluentui/react/lib/Panel';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TooltipHost } from '@fluentui/react';
import { FontIcon } from '@fluentui/react/lib/Icon';
import SummaryField from "./SummaryField";
import { formatDateTime } from './../../services/Utils';
import IAttestationSummary from "./../../interfaces/IAttestationSummary";
import IAttestationSummaryPanelProps from "./../../interfaces/IAttestationSummaryPanelProps";

class AttestationSummaryPanel extends React.Component<IAttestationSummaryPanelProps> {
  constructor(props: IAttestationSummaryPanelProps) {    
    super(props);      
  }

  private _dismissPanel = ():void => {
    if (this.props.onClose !== undefined) {
      this.props.onClose();
    }
  }
  
  render() {

    return (           
      <Panel
        isOpen={this.props.isOpen}
        onDismiss={this._dismissPanel}
        type={PanelType.medium}        
        closeButtonAriaLabel="Close"
        headerText="Submission Details"
      >
        {
          this.props.attestation && 
          
          <div className="summaryFields">
            <div className="summaryRow">
              <SummaryField label="Submitted For" value={this.props.attestation.submittedForName} />                       
            </div>            
            {
              (this.props.attestation.submittedForName === this.props.attestation.submitterName) ?
              <div className="summaryRow">
                <SummaryField label="Submitted For Email" value={this.props.attestation.submitterEmail} />
              </div>:
              <>
                <div className="summaryRow">              
                  <SummaryField label="Submitted By" value={this.props.attestation.submitterName} />
                </div>
                <div className="summaryRow">
                  <SummaryField label="Submitted By Email" value={this.props.attestation.submitterEmail} />
                </div>
              </>
            }
            <div className="summaryRow">
              <SummaryField label="Submitted On" value={formatDateTime(this.props.attestation.attestationDate)} /> 
            </div>
            <div className="summaryRow">
              <SummaryField label="Supervisor" value={this.props.attestation.supervisorName} />                
            </div>
            <div className="summaryRow">              
              <SummaryField label={this.props?.workSiteEntityName}  value={this.props.attestation.workSite}  />                  
            </div>
            <div className="summaryRow">
              <SummaryField label="Vaccination Status" value={this.props.attestation.attestationStatus} />                  
            </div>
            {
              this.props.attestation.vaccineDate && 
              <div className="summaryRow">              
                <SummaryField label={this.props?.vaccinationDatePrompt} value={formatDateTime(this.props.attestation.vaccineDate)} />
              </div>
            }
            {
              this.props.attestation.covidTestDate && 
              <div className="summaryRow">
                <SummaryField label={this.props?.testDatePrompt} value={formatDateTime(this.props.attestation.covidTestDate)} />
              </div>
            }  
            <div className="summaryRow">
              <SummaryField label="Submission Status" value={this.props.attestation.attestationStatus} />                  
            </div>                                                                
          </div>      
          
        }
      </Panel>      
    );
  }
}

export default AttestationSummaryPanel;
