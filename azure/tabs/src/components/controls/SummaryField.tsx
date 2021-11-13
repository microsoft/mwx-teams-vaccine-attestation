import React from "react";
import { mergeStyles } from '@fluentui/react/lib/Styling';
import "./../App.css";
import ISummaryFieldProps from "./../../interfaces/ISummaryFieldProps";
import { TeachingBubbleBase } from "@fluentui/react";

/*
*/

class SummaryField extends React.Component<ISummaryFieldProps> {

  constructor(props: ISummaryFieldProps) {
    super(props);
      
  }

  render(): React.ReactElement<ISummaryFieldProps> {
    

    return (      
      <div className="summaryField">
        <div className="summaryFieldLabel">{this.props.label}</div>
        <div className="summaryFieldValue">{this.props.value}</div>
      </div>
    );
  }

}

export default SummaryField;