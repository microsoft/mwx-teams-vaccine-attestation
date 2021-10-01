import React from "react";
import { Stack, IStackStyles, IStackTokens, IStackItemStyles, IIconProps, initializeIcons } from '@fluentui/react';
import { TooltipHost, ITooltipHostStyles } from '@fluentui/react/lib/Tooltip';
import { IconButton } from '@fluentui/react/lib/Button';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import "./../App.css";
import IHeaderProps from "./../../interfaces/IHeaderProps";

/*
*/

class Header extends React.Component<IHeaderProps> {
  
  constructor(props: IHeaderProps) {
    super(props);
    initializeIcons();
  }
  
  render() {

    // Non-mutating styles definition
    const textStackItemStyles: IStackItemStyles = {
      root: {
        alignItems: 'center',
        display: 'flex',
        height: 75,
        justifyContent: 'center',
        overflow: 'hidden',
      },
    };

    const buttonStackItemStyles: IStackItemStyles = {
      root: {
        alignItems: 'center',    
        display: 'flex',
        height: 75,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 70,
      },
    };

    const logoStackItemStyles: IStackItemStyles = {
      root: {
        alignItems: 'center',    
        display: 'flex',
        height: 75,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 200,
      },
    };

    // Tokens definition    
    const innerStackTokens: IStackTokens = {
      childrenGap: 5,
      padding: 10,
    };
    
    const stackStyles: IStackStyles = {
      root: {        
        overflow: 'hidden',
        width: '100%',
      },
    };

    const backIcon: IIconProps = { iconName: 'NavigateBack' };
    const homeIcon: IIconProps = { iconName: 'Home' };
    const calloutProps = { gapSpace: 0 };

    // The TooltipHost root uses display: inline by default.
    // If that's causing sizing issues or tooltip positioning issues, try overriding to inline-block.
    const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

    return (      
      <Stack horizontal styles={stackStyles} tokens={innerStackTokens}>
        <Stack.Item grow styles={buttonStackItemStyles}>
          {
            this.props.showBack &&          
            <TooltipHost
              content="Navigate Back to Previous Screen"
              // This id is used on the tooltip itself, not the host
              // (so an element with this id only exists when the tooltip is shown)           
              calloutProps={calloutProps}
              styles={hostStyles} >
              <IconButton iconProps={backIcon} title="Navigate Back to Previous Screen" ariaLabel="Navigate Back to Previous Screen" />
            </TooltipHost>
          }
        </Stack.Item>
        <Stack.Item grow styles={buttonStackItemStyles}>
         {
            this.props.showHome &&          
            <TooltipHost
              content="Navigate Home"
              // This id is used on the tooltip itself, not the host
              // (so an element with this id only exists when the tooltip is shown)           
              calloutProps={calloutProps}
              styles={hostStyles} >
              <IconButton iconProps={homeIcon} title="Navigate to Home" ariaLabel="Navigate to Home" />
            </TooltipHost>
          }
        </Stack.Item>
        <Stack.Item grow disableShrink styles={textStackItemStyles}>
          {
            this.props.title
          }
        </Stack.Item>
        <Stack.Item grow styles={logoStackItemStyles}>
          <Image src='logo.png' width="200px" alt="VaxApp" />
        </Stack.Item>
      </Stack>    

      // <div className='header'>
      //   <h1>{ this.props.title}</h1>
      // </div>
    );
  }
}

export default Header;
