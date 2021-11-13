/*
  Properties to pass into the file picker control
*/
interface IFilePickerProps {
  disabled?: boolean|undefined;  
  required?: boolean|undefined;
  label?: string|undefined;
  files? : File[]|undefined;  
  onChange?: (files?: File[]|undefined) => void|undefined;  
}

export default IFilePickerProps;