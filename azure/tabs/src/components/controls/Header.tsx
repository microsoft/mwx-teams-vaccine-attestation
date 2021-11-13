import React from "react";
import { initializeIcons } from '@fluentui/react';
import { TooltipHost, ITooltipHostStyles } from '@fluentui/react/lib/Tooltip';
import { IconButton, IButtonStyles } from '@fluentui/react/lib/Button';
import { Image, IImageProps, IImageStyleProps } from '@fluentui/react/lib/Image';
import { FontIcon, IIconProps, IIconStyles, IIconStyleProps } from '@fluentui/react/lib/Icon';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import "./../App.css";
import IHeaderProps from "./../../interfaces/IHeaderProps";

/*
*/

class Header extends React.Component<IHeaderProps> {
  
  constructor(props: IHeaderProps) {
    super(props);
    initializeIcons();
  }

  private goToHome = () => {           
    this.props.history.push('Home');    
  };
  
  private goBack = () => {
    this.props.history.goBack();
  }

  render() {    
    const backIcon: IIconProps = { iconName: 'PageLeft'};
    const homeIcon: IIconProps = { iconName: 'Home' };

    const iconButtonStyles:IButtonStyles = {
      icon: {color: '#6264A7', fontSize: 56},
      root: {
        width: 70,
        height: 70,
        backgroundColor: 'transparent',
        margin: 0,
        padding: 7,
        selectors: {
          '& .ms-Button-icon:hover, .ms-Button-flexContainer:hover': {
            backgroundColor: 'transparent',
            color: 'rgba(70, 71, 117, 1)'
          },
        }
      },
    };

    return (      
      <div className="header">        
        {
          this.props.showBack &&                    
          <IconButton 
            iconProps={backIcon} 
            title="Navigate Back to Previous Screen" 
            ariaLabel="Navigate Back to Previous Screen" 
            className="back"
            onClick={this.goBack}
            styles={iconButtonStyles}              
          />          
        }      
        {
          this.props.showHome &&                    
          <IconButton 
            iconProps={homeIcon} 
            title="Navigate to Home" 
            ariaLabel="Navigate to Home" 
            className="home" 
            onClick={this.goToHome} 
            styles={iconButtonStyles} 
          />          
        }
        <div className="title">{this.props.title}</div>                  
        <Image src='logo.png' height="65px" alt="VaxApp" className="logo" />        
      </div>          
    );
  }
}

export default Header;
