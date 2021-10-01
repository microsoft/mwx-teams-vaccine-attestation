import * as React from "react";
import { RouteComponentProps  } from "react-router-dom";
import Header from "./controls/Header";
import Footer from "./controls/Footer";

/*
 * This component is used to display the organizations privacy act statement
 */
class Attestation extends React.Component<RouteComponentProps> {

  private submit = () => {
    this.props.history.push('Admin');  
  };

  private canSubmit = ():boolean => {
    return false;
  }

  

  render() {
    return (
      <div>
        <Header showBack={false} showHome={false} title={'Attestation Screen'} {...this.props} />
        <Footer primaryButtonText='Submit' primaryButtonDisabled={this.canSubmit()} onPrimaryButtonClicked={this.submit} {...this.props} />
      </div>
    );
  }
}

export default Attestation;
