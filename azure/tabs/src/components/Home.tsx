import * as React from "react";
import { RouteComponentProps  } from "react-router-dom";
import Header from "./controls/Header";
import Footer from "./controls/Footer";

/*
 * This component is used to display the organizations privacy act statement
 */
class Home extends React.Component<RouteComponentProps> {

  private goToAdminSettings = () => {
    this.props.history.push('Admin');  
  };

  render() {
    return (
      <div>
        <Header showBack={false} showHome={false} title={'Vaccine Attestation Home'} {...this.props} />
        <Footer primaryButtonText='Admin Settings' primaryButtonDisabled={false} onPrimaryButtonClicked={this.goToAdminSettings} {...this.props} />
      </div>
    );
  }
}

export default Home;