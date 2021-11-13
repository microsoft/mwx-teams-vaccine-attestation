import { IPersonaProps } from '@fluentui/react/lib/Persona';
/*
  Properties to pass into the footer control
*/
interface IPeoplePickerProps {
  disabled: boolean|undefined;  
  required?: boolean|undefined;
  label?: string|undefined
  selectedPeople? : IPersonaProps[];  
  onChange?: (items?: IPersonaProps[]|undefined) => void|undefined;  
}

export default IPeoplePickerProps;