import * as React from "react";
import { RouteComponentProps  } from "react-router-dom";
import Header from "./controls/Header";
import Footer from "./controls/Footer";

/*
 * This component is used to display the organizations privacy act statement
 */
class MyAttestations extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Header showBack={false} showHome={false} title={'My Attestations'} {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

export default MyAttestations;