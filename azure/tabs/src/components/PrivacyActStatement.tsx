import * as React from "react";
import { RouteComponentProps  } from "react-router-dom";
import Header from "./controls/Header";
import Footer from "./controls/Footer";
import AppServices from "./../services/AppServices";
import IPrivacyActStatementState from "./../interfaces/IPrivacyActStatementState"
/*
 * This component is used to display the organizations privacy act statement
 */
class PrivacyActStatement extends React.Component<RouteComponentProps, IPrivacyActStatementState> {
  private _services:AppServices = new AppServices();

  constructor(props: RouteComponentProps) {
    super(props);   
    this.state = { statementText: '' };    
    this._services.getPrivacyActStatement().then(statement => this.setState({ statementText: statement }));

  }

  private goToHome = () => {           
    this.props.history.push('Home');    
  };

  render() {      
    return (
      <div>
        <Header showBack={false} showHome={false} title={'Privacy Act Statement'} {...this.props}/>        
        <div className="content" dangerouslySetInnerHTML={{ __html: this.state.statementText }} />
        <Footer primaryButtonText='I Acknolwedge the Privacy Statement' primaryButtonDisabled={false} onPrimaryButtonClicked={this.goToHome} {...this.props} />
      </div>
    );
  }
}

export default PrivacyActStatement;
