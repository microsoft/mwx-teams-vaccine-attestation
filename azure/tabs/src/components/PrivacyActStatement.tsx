import * as React from "react";
import { RouteComponentProps  } from "react-router-dom";
import Header from "./controls/Header";
import Footer from "./controls/Footer";
import AppServices from "./../services/AppServices";
import IPrivacyActState from "./../interfaces/IPrivacyActState"
/*
 * This component is used to display the organizations privacy act statement
 */
class PrivacyActStatement extends React.Component<RouteComponentProps, IPrivacyActState> {
  private _services:AppServices = new AppServices();

  constructor(props: RouteComponentProps) {
    super(props);   
    this.state = { settings: undefined };    
    this._services.getPrivacyActSettings().then(settings => this.setState({ settings: settings }));

  }

  private goToHome = () => {           
    this.props.history.push('Home');    
  };

  render() {          
    return (
      <div>
        <Header showBack={false} showHome={false} title={this.state.settings?.header} {...this.props}/>  
        { 
          this.state.settings &&      
          <div className="content" dangerouslySetInnerHTML={{ __html: this.state.settings.statement }} />
        }
        <Footer primaryButtonText='I Acknolwedge the Privacy Statement' primaryButtonDisabled={false} onPrimaryButtonClicked={this.goToHome} {...this.props} />
      </div>
    );
  }
}

export default PrivacyActStatement;
