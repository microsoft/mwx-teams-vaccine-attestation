import * as React from "react";
import { RouteComponentProps  } from "react-router-dom";
import { Stack, IStackStyles, IStackTokens, IStackItemStyles, Text, ITextProps, PrimaryButton, DefaultButton } from '@fluentui/react';
import { Image, IImageProps, ImageFit } from '@fluentui/react/lib/Image';
import { TeamsUserCredential } from "@microsoft/teamsfx";
import Header from "./controls/Header";
import Footer from "./controls/Footer";
import AppServices from "./../services/AppServices";
import IHomeSettings from "./../interfaces/IHomeSettings";
import IHomeState from "./../interfaces/IHomeState";


/*
 * This component is used to display the organizations privacy act statement
 */
class Home extends React.Component<RouteComponentProps, IHomeState> {
  private _services:AppServices = new AppServices();

  constructor(props:RouteComponentProps) {
    super(props);
    this.state = { isAdmin: false, links: [], user: undefined };

    var credential = new TeamsUserCredential();

    credential.getUserInfo().then(result => {
      this.setState( { user: result } );
    })

    this._services.getHomeSettings().then(data => {
      ///TODO: check if the user is a member of the admin group
      
      this.setState( { links: data.links, isAdmin: true } );
    });
  }

  private goToAttestation = () => {
    this.props.history.push('attestation');      
  };

  private goToMyAttestations = () => {
    this.props.history.push('my');      
  };

  private goToAdminSettings = () => {
    this.props.history.push('admin');      
  };
  

  render() {    

    const mainStackTokens: IStackTokens = {
      childrenGap: 20,
      padding: 10,
    };
    

    return (
      <div>
        <Header showBack={false} showHome={false} title={'Vaccine Attestation Home'} {...this.props} />   
        <div className="sceneryContent">
          <div className="image">
            <Image src='scenery.jpg' alt="person with mask on using computer" className="scenery" imageFit={ImageFit.cover} />   
          </div>
          <div className="controls">
            <Stack tokens={mainStackTokens}>              
              <Stack.Item>
                {
                  this.state.user !== undefined &&
                  <Text nowrap block className='text'>
                    Hello, {this.state.user.displayName}.
                  </Text>
                }
                
                <Text nowrap block className='text'>
                  Please select an option below:
                </Text>
              </Stack.Item>
              <Stack.Item>
                <PrimaryButton text='Submit My Attestation' onClick={this.goToAttestation} className='primaryButton' />
              </Stack.Item>
              <Stack.Item>
                <DefaultButton text='View My Submissions' onClick={this.goToMyAttestations} className='button' />
              </Stack.Item>
              {
                this.state.links.map(link => {
                  return (
                    <Stack.Item>
                      <DefaultButton text={link.text} href={link.url} className='button' />
                    </Stack.Item>
                  );
                })
              }
            </Stack>
          </div>        
        </div>     
        {
          (this.state.isAdmin) ? 
          <Footer primaryButtonText='Admin Settings' primaryButtonDisabled={false} onPrimaryButtonClicked={this.goToAdminSettings} {...this.props} /> : 
          <Footer {...this.props} />
        }
      </div>
    );
  }
}

export default Home;