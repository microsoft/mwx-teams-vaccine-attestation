import * as React from "react";
import { RouteProps, withRouter, RouteComponentProps  } from "react-router-dom";
import Header from "./controls/Header";
import Footer from "./controls/Footer";
/*
 * This component is used to display the organizations privacy act statement
 */
class Admin extends React.Component<RouteComponentProps> {
  //private history = useHistory();

  constructor(props: RouteComponentProps) {
    super(props);   
  }

  private goToHome = () => {       
    // const history = useHistory();
    // history.push('/Home');
    
    this.props.history.push('Home');
    //history.go.push("/home");
    //this.context.transitionTo('/Home');
  };

  render() {
    return (
      <div>
        <Header showBack={true} showHome={true} title={'Attestation Admin'} {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

export default Admin;
