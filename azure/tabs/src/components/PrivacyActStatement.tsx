import * as React from "react";
import { RouteComponentProps  } from "react-router-dom";
import Header from "./controls/Header";
import Footer from "./controls/Footer";
/*
 * This component is used to display the organizations privacy act statement
 */
class PrivacyActStatement extends React.Component<RouteComponentProps> {

  constructor(props: RouteComponentProps) {
    super(props);   
  }

  private goToHome = () => {           
    this.props.history.push('Home');    
  };

  render() {
    return (
      <div>
        <Header showBack={false} showHome={false} title={'Privacy Act Statement'} {...this.props}/>
        <Footer primaryButtonText='I Acknolwedge the Privacy Statement' primaryButtonDisabled={false} onPrimaryButtonClicked={this.goToHome} {...this.props} />
      </div>
    );
  }
}

export default PrivacyActStatement;
