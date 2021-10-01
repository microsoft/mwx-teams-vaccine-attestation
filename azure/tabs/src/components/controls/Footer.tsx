import React from "react";
import { PrimaryButton } from '@fluentui/react';
import "./../App.css";
import IFooterProps from "./../../interfaces/IFooterProps";

/*
*/

class Footer extends React.Component<IFooterProps> {
  
  constructor(props: IFooterProps) {
    super(props);
  }
  
  render(): React.ReactElement<IFooterProps> {
    const showButton = (this.props.primaryButtonText !== undefined) && (this.props.primaryButtonText.trim() !== '');
    const { primaryButtonText, primaryButtonDisabled, onPrimaryButtonClicked } = this.props;


    return (
      <div className='footer'>
        { 
          showButton &&
          <PrimaryButton text={primaryButtonText} disabled={primaryButtonDisabled} onClick={onPrimaryButtonClicked} />

        }
      </div>
    );
  }
}

export default Footer;
