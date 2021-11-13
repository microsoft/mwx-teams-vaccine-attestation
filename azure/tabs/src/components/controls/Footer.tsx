import React from "react";
import { PrimaryButton } from '@fluentui/react';
import "./../App.css";
import IFooterProps from "./../../interfaces/IFooterProps";
import { isStringNullUndefinedBlank } from "./../../services/Utils"
/*
*/

class Footer extends React.Component<IFooterProps> {
  
  constructor(props: IFooterProps) {
    super(props);
  }
  
  render(): React.ReactElement<IFooterProps> {
    const showButton = (this.props.primaryButtonText !== undefined) && (this.props.primaryButtonText.trim() !== '');
    const showText = !isStringNullUndefinedBlank(this.props.primaryText);
    const { primaryButtonText, primaryButtonDisabled, onPrimaryButtonClicked } = this.props;


    return (      
      <div className='footer'>        
        {
          showText &&
          <span className="primaryText">{this.props.primaryText}</span>
        }
        { 
          showButton &&          
          <PrimaryButton text={primaryButtonText} disabled={primaryButtonDisabled} onClick={onPrimaryButtonClicked} className='primary' />
        }
      </div>
    );
  }
}

export default Footer;
